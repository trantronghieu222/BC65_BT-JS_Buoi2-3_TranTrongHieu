/* ---------- Bài 1 ---------- */
/* 
    Tính tiền lương nhân viên

    B1. Đầu vào
    Số ngày làm việc - ngayLam
    Lương theo ngày - ngayLuong
    Tổng tiền lương của nhân viên - tongTien

    B2. Tính tổng số tiền lương
    Lương theo ngày * số ngày làm việc

    B3. Kết quả : tổng tiền
*/
function handleTinhLuong(){
    var ngayLam = +document.getElementById("ngayLam").value;
    var ngayLuong = +document.getElementById("ngayLuong").value;
    var tongTien = ngayLam * ngayLuong;
    document.getElementById("bai1__result").innerHTML = tongTien;
}

/* ---------- Bài 2 ---------- */
/*
    Tính giá trị trung bình

    B1. Đầu vào
    là 5 số tự nhiên: so1, so2, so3, so4, so5
    giá trị trung bình: trungBinh
    
    B2. Tính giá trị trung bình là cộng tổng 5 số lại chia 5
    trungBinh = (so1 + so2 + so3 + so4 + so5)/5;

    B3. Đầu ra giá trị trung bình của 5 số
*/
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
/*
    Quy đổi tiền
    B1. Đầu vào
    Số lượng usd cần đổi: soLuong
    Trị giá usd: 23500
    Tổng tiền sau khi đổi: tongTien

    B2. Tính toán số tiền cần đổi = trị giá usd * số lượng
    tongTien = triGia * soLuong;

    B3. Kết quả: số tiền sau khi đổi từ usd sang VND - tongTien
*/
function handleUsdToVnd(){
    var soLuong = +document.getElementById("soLuong").value;
    const triGia = 23500;
    var tongTien = soLuong * triGia;
    document.getElementById("bai3__result").innerHTML = new Intl.NumberFormat('vn-VN').format(tongTien);
}

/* ---------- Bài 4 ---------- */
/*
    Tính diện tích chu vi hình chữ nhật
    B1. Đầu vào 
    chiều dài: chieuDai
    chiều rộng: chieuRong
    chu vi: chuVi
    diện tích: dienTich

    B2. Tính toán
    chuVi = (dai + rong) * 2;
    dienTich = dai * rong;

    B3. Kết quả : chuVi, dienTich
*/
function handleTinh(){
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong; 
    document.getElementById("bai4__result").innerHTML = `Diện tích: ${dienTich}; Chu vi: ${chuVi}`;
}

/* ---------- Bài 5 ---------- */
/*
    B1. Đầu vào
    2 ký số: number
    hàng đơn vị: donVi
    hàng chục: hangChuc
    tổng 2 ký số: tong

    B2. Xử lý
    1. Tính hàng đơn vị = number % 10
    2. Tính hàng chục = Math.floor(number / 10);
    3. Tổng = hàng đơn vị + hàng chục 

    B3. Kết quả: Tổng
*/
function handleTongKySo(){
    var number = +document.getElementById("number").value;
    var donVi = number % 10;
    var hangChuc = Math.floor(number / 10);
    var tong = donVi + hangChuc;
    document.getElementById("bai5__result").innerHTML = tong;
}