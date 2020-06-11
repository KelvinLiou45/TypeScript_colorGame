let answerID = document.getElementsByClassName('answerID') as HTMLCollectionOf<HTMLElement>;
let reflashID = document.getElementsByClassName('reflashID') as HTMLCollectionOf<HTMLElement>;
let messageID = document.getElementsByClassName('messageID') as HTMLCollectionOf<HTMLElement>;
let squares = document.getElementsByClassName('squares_square') as HTMLCollectionOf<HTMLElement>;

let squares_bgColor: string[];

setTopic();

reflashID[0].addEventListener('click',()=>{
    setTopic();
})



//設定題目
function setTopic(): void {
    //設置格子的顏色
    for (let i = 0; i < squares.length; i++) {
        messageID[0].textContent = "請選擇正確的顏色";
        squares[i].style.opacity = '1';
        let color: string;
        let r, g, b: number;
        r = getRandomNum(255);
        g = getRandomNum(255);
        b = getRandomNum(255);

        color = `rgb(${r},${g},${b})`;
        squares[i].style.background = color;
        console.log(squares[i].style.background);
    }

    //設定答案至answerID
    let answer = getRandomNum(5);
    answerID[0].textContent = squares[answer].style.background;

    //設置按鈕事件 判斷是否正確
    for(let i = 0;i<squares.length;i++){
        squares[i].addEventListener('click',()=>{
            console.log(squares[i].style.background);
            if(squares[i].style.background ==  answerID[0].textContent){
                console.log('Yes u are right');
                finishGame(answerID[0].textContent);
            }
            else{
                messageID[0].textContent = "答案不對哦! 請再試一次~";
                console.log('No');
                squares[i].style.opacity = '0';
            }
        })
    }
}

//正確顏色填滿全部squares
function finishGame(color:string):void{
    for(let i = 0;i<squares.length;i++){
        messageID[0].textContent = "您答對了! 請按Reflash按鈕重新遊戲~";
        squares[i].style.opacity = '1';
        squares[i].style.background = color;
    }
}

//隨機變數
function getRandomNum(num: number): number {
    let result: number = 0;
    result = Math.floor(Math.random() * (num + 1));
    return result;
}