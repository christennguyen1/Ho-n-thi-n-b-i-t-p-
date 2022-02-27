
let renderTableSinhVien = () => {
    sinhVienService.layDanhSachSinhVien().then((res) => {
       let  convertedArr=res.data.map((item)=>{
            let{id,name,email,toan,ly,hoa}=item;
            return new SinhVien(id,name,email,toan,ly,hoa);
        });
        console.log("convertedArr",convertedArr);
        sinhVienControllers.renderTable(convertedArr);
    })
        .catch((err) => {
            console.log("err", err);
        });
};
document.getElementById("btn-add").addEventListener("click", function () {
    let svObject = sinhVienControllers.layThongTinForm();
    let isValid =
        (validaytor.kiemTraDoDai(svObject.id, "spanMaSV") &&
        validaytor.kiemTraSo(svObject.id, "spanMaSV")) &
        (validaytor.kiemTraDoDai(svObject.name, "spanTenSV") &&
        validaytor.kiemTraKiTu(svObject.name, "spanTenSV"))&
        (validaytor.kiemTraEmail(svObject.email, "spanEmailSV"))&
        (validaytor.kiemTraDiem(svObject.toan, "spanToan"))&
        (validaytor.kiemTraDiem(svObject.ly, "spanLy"))&
        (validaytor.kiemTraDiem(svObject.hoa, "spanHoa"));
    isValid &&
        sinhVienService.themSinhVien(svObject).then((res) => {
            renderTableSinhVien();
            console.log(svObject);
        })
            .catch((err) => {
                console.log(err);
            });
});
function xoaSV(id) {
    sinhVienService.xoaSinhVien(id).then((res) => {
        renderTableSinhVien();
    }).catch((err) => {
        console.log(err);
    });
}
var SinhVienInfor={};
function suaSV(id){
    sinhVienService.layChiTietSinhVien(id).then((res)=>{
    SinhVienInfor=res.data;
    document.getElementById("txtMaSV").value=SinhVienInfor.id;
    document.getElementById("txtTenSV").value=SinhVienInfor.name;
    document.getElementById("txtEmail").value=SinhVienInfor.email;
    document.getElementById("txtDiemToan").value=SinhVienInfor.toan;
    document.getElementById("txtDiemLy").value=SinhVienInfor.ly;
    document.getElementById("txtDiemHoa").value=SinhVienInfor.hoa;
    })
    .catch((err)=>{
        console.log(err);
    });
}
function capNhatSV(){
    let tenSV=document.getElementById("txtTenSV").value;
    let emailSV=document.getElementById("txtEmail").value;
    let diemToan=document.getElementById("txtDiemToan").value;
    let diemLy=document.getElementById("txtDiemLy").value;
    let diemHoa=document.getElementById("txtDiemHoa").value;
    SinhVienInfor.name=tenSV;
    SinhVienInfor.email=emailSV;
    SinhVienInfor.toan=diemToan;
    SinhVienInfor.ly=diemLy;
    SinhVienInfor.hoa=diemHoa;
    let isValid =
    (validaytor.kiemTraDoDai(SinhVienInfor.name, "spanTenSV") &&
    validaytor.kiemTraKiTu(SinhVienInfor.name, "spanTenSV"))&
    (validaytor.kiemTraEmail(SinhVienInfor.email, "spanEmailSV"))&
    (validaytor.kiemTraDiem(SinhVienInfor.toan, "spanToan"))&
    (validaytor.kiemTraDiem(SinhVienInfor.ly, "spanLy"))&
    (validaytor.kiemTraDiem(SinhVienInfor.hoa, "spanHoa"));
isValid &&
    sinhVienService.capNhatSinhVien(SinhVienInfor.id,SinhVienInfor).then((res)=>{
       renderTableSinhVien();
    })
    .catch((err)=>{
        console.log(err);
    })
}