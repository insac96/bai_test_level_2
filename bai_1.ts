//Viết công thức in ra danh sách các số là kết quả của việc lũy thừa một số n lần. 
//Ví dụ có một danh sách nhập vào là arr = [16,32,72,96] thì dãy được in ra là arr = [16, 32]
//Vì 16 = 4 mũ 2 và 32 = 2 mũ 5 (Thời gian làm bài: 15')

const Check = (numb: number, i: number) : boolean => {
    if((numb % i) == 0){
        let ket_qua = numb / i;

        if(ket_qua == 1) return true;

        if(Check(ket_qua, i)) return true;

        return false;
    };

    return false;
};

const Main = (listNumber : Array<number>) : Array<number> => {
    let newListNumber : Array<number> = [];

    listNumber.forEach((numb) : any => {
        //Kiểm tra số có phải số nguyên tố hay không
        if(!Number.isInteger(numb)) return false;

        //Nếu số là -1, 0, 1 thì thêm vào mảng mới
        if(numb == 0 || numb == -1 || numb == 1) return newListNumber.push(numb);
        
        //Chuyển số âm thành số dương
        let positiveNumb = numb < 0 ? -numb : numb;

        //Vòng lặp kiểm tra
        //Bỏ qua số mũ là 0 và 1
        for (let i = 2; i < positiveNumb; i++){
            if(Check(positiveNumb, i)) {
                newListNumber.push(numb);
                
                break;
            }
        };         
    });

    return newListNumber;
};

console.log(Main([0,1,-8,16,32,72,96]));
