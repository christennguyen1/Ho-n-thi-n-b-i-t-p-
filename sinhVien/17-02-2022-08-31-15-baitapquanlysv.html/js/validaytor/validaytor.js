let validaytor = {
    kiemTraSo: function (value, idErr) {
         errEl = document.getElementById(idErr);
        let parten = new RegExp("^(0|[1-9][0-9]*)$");
        if (parten.test(value)) {
            errEl.innerText = "";
            return true;
        }
        else {
            errEl.innerText = "Trường hợp này phải điền số.";
            return false;
        }
    },
    kiemTraKiTu: function (value, idErr) {
         errEl = document.getElementById(idErr);
        let parten = new RegExp("[A-Za-z]");
        if (parten.test(value)) {
            errEl.innerText = "";
            return true;
        }
        else {
            errEl.innerText = "Trường hợp này phải điền chữ.";
            return false;
        }
    },
    kiemTraDoDai: function (val, idErr) {
        errEl = document.getElementById(idErr);
        let leng=val.trim().length;
        if(leng<5)
        {
            errEl.innerText="Độ dài tối thiểu phải lớn hơn 5.";
            return false;
        }
        if(leng>30)
        {
            errEl.innerText="Độ dài tối thiểu phải bé hơn 30.";
            return false;
        }
        errEl.innerText="";
        return true;
    },
    kiemTraEmail: function (value, idErr) {
        errEl = document.getElementById(idErr);
        var re = /\S+@\S+\.\S+/;
        if( re.test(value)){
            errEl.innerText=""
            return true;
        }
        else{
            errEl.innerText="Email không hợp lệ."
            return false;
        }
    },
    kiemTraDiem: function (value, idErr) {
        errEl = document.getElementById(idErr);
        let parten = new RegExp("^(0|[1-9][0-9]*)$");
        if (parten.test(value) && value*1>=0 && value*1<=10) {
            errEl.innerText = "";
            return true;
        }
        else {
            errEl.innerText = "Mời bạn nhập lại điểm.";
            return false;
        }
    },
};