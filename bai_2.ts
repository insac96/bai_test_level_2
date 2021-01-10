//Viết hàm tính tổng của 2 đối số
//Biết rằng nếu chỉ nhập vào 1 đối số thì trả về một hàm khác chứa đối số còn lại. 
//Ví dụ add(2, 3) return 5, add(2)(3) return 5, add("2", "3") return undefined 
//Thời gian làm bài: 15'

const Add = (a: any, b? : any) : any => {
    if(typeof a == "string" || typeof b == "string") return undefined;

    if(!b) return (c:number) : number => {
        return Add(a,c);
    };

    return a + b;
};

console.log(Add(2,3));
console.log(Add(2)(3));
console.log(Add("2", "3"));
