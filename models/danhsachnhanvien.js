function DSNV() {
  this.arr = [];

  this.addNV = function (nhanvien) {
    this.arr.push(nhanvien);
  };

  this.timIndex = function (id) {
    let index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var nhanvien = this.arr[i];
      if (nhanvien.taiKhoan === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  this.deleteNV = function (id) {
    let index = this.timIndex(id);
    if (index != -1) {
      this.arr.splice(index, 1);
    }
  };

  this.editNV = function (id) {
    let index = this.timIndex(id);
    if (index != -1) {
      var nhanvien = this.arr[index];
      return nhanvien;
    }
    return null;
  };

  this.updateNV = function (nhanvien) {
    let index = this.timIndex(nhanvien.taiKhoan);
    if (index != -1) {
      this.arr[index] = nhanvien;
    }
  };

  this.timTheoLoaiNV = function (keyword) {
    var arrTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      var nhanvien = this.arr[i];
      if (
        nhanvien.xepLoaiNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        arrTimKiem.push(nhanvien);
      }
    }
    return arrTimKiem;
  };
}
