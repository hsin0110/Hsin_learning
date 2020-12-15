//最新活動用vue做資料篩選
let data = {
    activities: [
        { type: '上山休息去', title: '來杯抹茶吧~', date: '2021/01/15', link: 'javascript:;' },
        { type: '日語讀書會', title: '認識50音', date: '2021/01/20', link: 'javascript:;' },
        { type: '跑跑俱樂部', title: '21K初體驗！', date: '2021/01/25', link: 'javascript:;' },
        { type: '日語讀書會', title: '唱歌學日文', date: '2021/01/30', link: 'javascript:;' },
        { type: '日語讀書會', title: '旅遊常用句子', date: '2021/02/5', link: 'javascript:;' },
        { type: '甜點工作坊', title: '軟綿綿舒芙蕾', date: '2021/02/10', link: 'javascript:;' },
        { type: '上山休息去', title: '四獸山走一回', date: '2021/02/15', link: 'javascript:;' },
        { type: '日語讀書會', title: '生活常用日語', date: '2021/02/20', link: 'javascript:;' },
        { type: '跑跑俱樂部', title: '你對跑步暸解多少？', date: '2021/02/25', link: 'javascript:;' },
        { type: '跑跑俱樂部', title: '來個3K吧！', date: '2021/03/05', link: 'javascript:;' },
        { type: '上山休息去', title: '怕高不要來之劍龍稜', date: '2021/03/10', link: 'javascript:;' },
        { type: '甜點工作坊', title: '多拉A夢愛吃的銅鑼燒', date: '2021/03/15', link: 'javascript:;' },
        { type: '跑跑俱樂部', title: '來個10K吧！', date: '2021/03/20', link: 'javascript:;' },
        { type: '跑跑俱樂部', title: '21K初體驗！', date: '2021/03/25', link: 'javascript:;' },
        { type: '甜點工作坊', title: '貝果咬一口', date: '2021/03/30', link: 'javascript:;' },
        { type: '上山休息去', title: '尋找天使的眼淚', date: '2021/04/05', link: 'javascript:;' },
    ],
    input: {
        type: '全部',
        title: ''
    },
    select: '－－請選擇－－'


}
new Vue({
    el: '#news',
    data: data,
    computed: {
        typeActivities() { //類型篩選
            if (this.input.type === '全部') {
                return this.activities //顯示全部活動，不篩選
            } else {
                return this.activities.filter(item => {
                    return item.type === this.input.type
                })
            }
        },
        titleActivities() { //關鍵字篩選
            if (this.input.title) { //如果你有打這個關鍵字，執行
                return this.typeActivities.filter(item => {
                    let content = item.title.toLowerCase();
                    let keyword = this.input.title.toLowerCase();
                    return content.indexOf(keyword) != -1 //不是負1代表找到了
                })
            } else { //若沒打任何關鍵字，就不篩選
                return this.typeActivities;
            }
        }
    }
})


new Vue({
    el: '#signup_form',
    data: data,
    computed: {
        typeClassify() {  //分類活動列別
            //先將資料庫的type存放到一個新陣列
            var beforeSort = [];
            var result = data.activities.filter(item => {
                //console.log(item.type)  //確定控制台顯示的是不是所需資料
                beforeSort.push(item.type);
                //console.log(beforeSort)
            });

            //從beforeSort陣列取出不重複的名稱(也就是直接分成4大類)
            var newSort = beforeSort.filter(function (element, index, array) {
                return array.indexOf(element) === index;
                //console.log(newSort);
            });
            return newSort;
        },
        titleClassify() {
            if (this.select === '－－請選擇－－') {
                return this.activities //顯示所有活動，不篩選
            } else {
                return this.activities.filter(item => {
                    return item.type === this.select
                })
            }
        }


    }
})