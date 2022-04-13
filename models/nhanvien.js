function NhanVien(
  _tk,
  _hoTen,
  _email,
  _mk,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _tk;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _mk;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoaiNV = "";

  this.tinhTongLuong = function () {
    if (_chucVu == "Sếp") {
      this.tongLuong = parseFloat(_luongCoBan) * 3;
    } else if (_chucVu == "Trưởng phòng") {
      this.tongLuong = parseFloat(_luongCoBan) * 2;
    } else if (_chucVu == "Nhân viên") {
      this.tongLuong = parseFloat(_luongCoBan);
    }
  };

  this.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
      this.xepLoaiNV = "Xuất sắc";
    } else if (this.gioLam < 192 && this.gioLam >= 176) {
      this.xepLoaiNV = "Giỏi";
    } else if (this.gioLam < 176 && this.gioLam >= 160) {
      this.xepLoaiNV = "Khá";
    } else {
      this.xepLoaiNV = "Trung bình";
    }
  };
}
