function SinhVien(id,ten,email,toan,ly,hoa){
    this.id=id;
    this.name=ten;
    this.email=email;
    this.toan=toan;
    this.ly=ly;
    this.hoa=hoa;

    this.getDiemtb=function(){
        return (this.toan*1+this.ly*1+this.hoa*1)/3;
    }
}