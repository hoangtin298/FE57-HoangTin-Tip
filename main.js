function printResult(event) {
  event.preventDefault();
  var txtTongTien = document.getElementById("txtTongTien").value;
  var txtSoNguoi = document.getElementById("txtSoNguoi").value;
  var slPhanTramTip = document.getElementById("slPhanTramTip").value;

  var res =
    (parseFloat(txtTongTien) * parseFloat(slPhanTramTip)) /
    100 /
    parseFloat(txtSoNguoi);
  res = +res.toFixed(2);
  var txtThongBaoTienTip = document.getElementById("txtThongBaoTienTip");
  if (isNaN(res) || parseFloat(slPhanTramTip) === 0) {
    txtThongBaoTienTip.innerHTML = "Vui Lòng Nhập Đúng Và Đủ";
    txtThongBaoTienTip.className = "d-block alert alert-danger";
  } else {
    txtThongBaoTienTip.innerHTML =
      "TIP AMOUNT:" + "</br>" + "$" + res + " mỗi người!";

    txtThongBaoTienTip.className = "d-block alert alert-success";
  }
}
