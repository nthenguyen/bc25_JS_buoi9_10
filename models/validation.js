var dsnv = new DSNV();

function Validation() {
  this.ktraRong = function (value, spanId, message) {
    if (value.trim() === "") {
      //bi loi
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    } else {
      //khong bi loi
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "none";
      return true;
    }
  };

  this.kiemTraDoDaiKiTu = function (value, spanId, message, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraChuoiKiTu = function (value, spanId, message) {
    var letters =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letters)) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraChuoiKiSo = function (value, spanId, message) {
    var numbers = /^[0-9]+$/;
    if (value.match(numbers)) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraMatKhau = function (value, spanId, message) {
    var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(password)) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, spanId, message) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraDinhDangNgay = function (value, spanId, message) {
    var date = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    if (value.match(date)) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraMucLuongCoBan = function (value, spanId, message) {
    var salary = /^[0-9]*$/;
    if (value.match(salary) >= 1000000 && value.match(salary) <= 20000000) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraSoGioLam = function (value, spanId, message) {
    var hour = /^[0-9]*$/;
    if (value.match(hour) >= 80 && value.match(hour) <= 200) {
      //hop le
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraTrungEmail = function (value, spanId, message, arr) {
    var status = false;
    for (var i = 0; i < arr.length; i++) {
      var nv = arr[i];
      if (nv.email === value) {
        status = true;
        break;
      }
    }
    if (status) {
      //k hop le
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };

  this.kiemTraTrungTaiKhoan = function (value, spanId, message, arr) {
    var status = false;
    for (var i = 0; i < arr.length; i++) {
      var nv = arr[i];
      if (nv.taiKhoan === value) {
        status = true;
        break;
      }
    }
    if (status) {
      //k hop le
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
  };
}
