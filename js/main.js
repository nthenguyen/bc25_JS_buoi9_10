function getEle(id) {
  return document.getElementById(id);
}

var dsnv = new DSNV();
var validation = new Validation();
getLocalStorage();

const clearFields = () => {
  const fields = document.querySelectorAll(".form-control");
  for (var i = 0; i < fields.length; i++) {
    fields[i].value = "";
  }
};

const clearMessage = () => {
  const message = document.querySelectorAll(".sp-thongbao");
  for (var i = 0; i < message.length; i++) {
    message[i].innerHTML = "";
  }
};

getEle("btnThem").addEventListener("click", function () {
  closeModalByButtonEdit();
  clearMessage();
});

//close Modal cua button Them Nguoi Dung
const closeModalByButtonAdd = () => {
  getEle("btnDong").click();
  clearFields();
};

//close Modal cua button Sua
const closeModalByButtonEdit = () => {
  var modal = getEle("myModal");
  window.onclick = (event) => {
    if (event.target == modal) {
      getEle("tknv").disabled = false;
      clearFields();
    }
  };
};

getEle("btnThemNV").addEventListener("click", function () {
  var nhanvien = layThongTinNV();
  if (nhanvien) {
    dsnv.addNV(nhanvien);
    taoBang(dsnv.arr);
    setLocalStorage();
    closeModalByButtonAdd();
  }
});

function layThongTinNV() {
  var _tk = getEle("tknv").value;
  var _hoTen = getEle("name").value;
  var _email = getEle("email").value;
  var _mk = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCoBan = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  var isValid = true;
  //Tai Khoan
  isValid &=
    validation.ktraRong(_tk, "tbTKNV", "Tài khoản không được để trống") &&
    validation.kiemTraChuoiKiSo(_tk, "tbTKNV", "Tài khoản phải là số") &&
    validation.kiemTraDoDaiKiTu(_tk, "tbTKNV", "Tài khoản từ 4 - 6 số", 4, 6) &&
    validation.kiemTraTrungTaiKhoan(
      _tk,
      "tbTKNV",
      "Tài khoản đã tồn tại",
      dsnv.arr
    );

  //Ho Ten
  isValid &=
    validation.ktraRong(_hoTen, "tbTen", "Họ tên không được để trống") &&
    validation.kiemTraChuoiKiTu(_hoTen, "tbTen", "Họ tên phải là kí tự");

  //Email
  isValid &=
    validation.ktraRong(_email, "tbEmail", "Email không được để trống") &&
    validation.kiemTraEmail(_email, "tbEmail", "Email không đúng định dạng") &&
    validation.kiemTraTrungEmail(
      _email,
      "tbEmail",
      "Email đã tồn tại",
      dsnv.arr
    );

  //Mat Khau
  isValid &=
    validation.ktraRong(_mk, "tbMatKhau", "Mật khẩu không được để trống") &&
    validation.kiemTraDoDaiKiTu(
      _mk,
      "tbMatKhau",
      "Mật khẩu từ 6 - 10 kí tự",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      _mk,
      "tbMatKhau",
      "Mật khẩu ít nhất 1 kí tự thường, 1 số, 1 kí tự hoa và 1 kí tự đặc biệt"
    );
  //Ngay Lam
  isValid &=
    validation.ktraRong(_ngayLam, "tbNgay", "Ngày làm không được để trống") &&
    validation.kiemTraDinhDangNgay(
      _ngayLam,
      "tbNgay",
      "Ngày làm không đúng định dạng"
    );
  //Luong Co Ban
  isValid &=
    validation.ktraRong(
      _luongCoBan,
      "tbLuongCB",
      "Lương cơ bản không được để trống"
    ) &&
    validation.kiemTraMucLuongCoBan(
      _luongCoBan,
      "tbLuongCB",
      "Lương cơ bản từ 1 - 20tr"
    );
  //Chuc Vu
  isValid &= validation.ktraRong(
    _chucVu,
    "tbChucVu",
    "Chức vụ không được để trống"
  );
  //Gio Lam
  isValid &=
    validation.ktraRong(_gioLam, "tbGiolam", "Giờ làm không được để trống") &&
    validation.kiemTraSoGioLam(
      _gioLam,
      "tbGiolam",
      "Số giờ làm trong tháng từ 80 - 200h"
    );

  if (isValid) {
    var nhanvien = new NhanVien(
      _tk,
      _hoTen,
      _email,
      _mk,
      _ngayLam,
      _luongCoBan,
      _chucVu,
      _gioLam
    );
    nhanvien.tinhTongLuong();
    nhanvien.xepLoaiNV();
    return nhanvien;
  }
  return null;
}

function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nv = arr[i];
    content += `
    <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoaiNV}</td>
        <td style='width:150px'>
          <button class="btn btn-info" onclick="editNV('${nv.taiKhoan}')" data-target='#myModal' data-toggle='modal' ">Sửa</button>
          <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}') ">Xóa</button>
        </td> 
    </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function deleteNV(taikhoan) {
  dsnv.deleteNV(taikhoan);
  taoBang(dsnv.arr);
  setLocalStorage();
}

function editNV(taiKhoan) {
  var nv = dsnv.editNV(taiKhoan);
  getEle("tknv").disabled = true;
  getEle("tknv").value = nv.taiKhoan;
  getEle("name").value = nv.hoTen;
  getEle("email").value = nv.email;
  getEle("password").value = nv.matKhau;
  getEle("datepicker").value = nv.ngayLam;
  getEle("luongCB").value = nv.luongCoBan;
  getEle("chucvu").value = nv.chucVu;
  getEle("gioLam").value = nv.gioLam;
  clearMessage();
  closeModalByButtonEdit();
}

getEle("btnCapNhat").addEventListener("click", function () {
  var nhanvien = layThongTinNV();
  if (nhanvien) {
    dsnv.updateNV(nhanvien);
    taoBang(dsnv.arr);
    setLocalStorage();
  }
});

getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var arrTimKiem = dsnv.timTheoLoaiNV(keyword);
  taoBang(arrTimKiem);
});

function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  if (dataString) {
    var dataJson = JSON.parse(dataString);
    dsnv.arr = dataJson;
    taoBang(dsnv.arr);
  }
}
