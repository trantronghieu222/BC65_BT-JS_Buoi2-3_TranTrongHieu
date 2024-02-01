/* ---------- Bài 1 ---------- */
function handleTinhLuong(){
    var ngayLam = +document.getElementById("ngayLam").value;
    var ngayLuong = +document.getElementById("ngayLuong").value;
    var tongTien = ngayLam * ngayLuong;
    document.getElementById("bai1__result").innerHTML = tongTien;
}

/* ---------- Bài 2 ---------- */
function handleTinhTrungBinh(){
    var so1 = +document.getElementById("so1").value;
    var so2 = +document.getElementById("so2").value;
    var so3 = +document.getElementById("so3").value;
    var so4 = +document.getElementById("so4").value;
    var so5 = +document.getElementById("so5").value;
    var trungBinh = so1 + so2 + so3 + so4 + so5;
    trungBinh = trungBinh / 5;
    document.getElementById("bai2__result").innerHTML = trungBinh;
}

/* ---------- Bài 3 ---------- */
function handleUsdToVnd(){
    var usd = +document.getElementById("usd").value;
    var vnd = usd * 23500;
    document.getElementById("bai3__result").innerHTML = new Intl.NumberFormat('vn-VN').format(vnd);
}

/* ---------- Bài 4 ---------- */
function handleTinh(){
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong; 
    document.getElementById("bai4__result").innerHTML = `Diện tích: ${dienTich}; Chu vi: ${chuVi}`;
}

/* ---------- Bài 5 ---------- */
function handleTongKySo(){
    var number = +document.getElementById("number").value;
    var tong = 0;
    tong = tong + number%10;
    number = Math.floor(number / 10);
    tong = tong + number;
    document.getElementById("bai5__result").innerHTML = tong;
}