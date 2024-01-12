$(document).ready(function () {
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://newsapi3-dbd1143a60df.herokuapp.com/api/news?api_key=53f1b64d-5042-47b5-b3d8-8f6da5f95cb3`
            async function myweather() {
                let responce = await fetch(url)
                let data = await responce.json()
                console.log(data.news[0].tit)
            }
            myweather()
        }
    })
})
/*    $("#btn").click(async function (e) {
        e.preventDefault();
        let url = `https://newsapi3-dbd1143a60df.herokuapp.com/api/news?api_key=53f1b64d-5042-47b5-b3d8-8f6da5f95cb3`
        async function mynews() {
            let responce = await fetch(url);
            let data = await responce.json();
            console.log(data)
        }

        await mynews()
    });
})
*/
