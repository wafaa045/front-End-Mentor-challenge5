



document.querySelector('.icon_share_div').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    
    // تحقق من حجم الشاشة
    if (window.innerWidth > 600) {
        // إذا كان حجم الشاشة أكبر من 600 بكسل، التبديل بين إظهار وإخفاء المحتوى
        if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
            hiddenContent.style.display = 'flex';
        } else {
            hiddenContent.style.display = 'none';
        }
    } 
    else {
        // إذا كان حجم الشاشة أقل من أو يساوي 600 بكسل، تبديل الأقسام
        var div1 = document.querySelector('.secand_childTwo');
        var div2 = document.querySelector('.hidden_mobil');
        var secand_childH = document.querySelector('.secand_child');
        
         
        
            // تبديل الأقسام
            if (div1.classList.contains('secand_childTwo')) {
                div1.classList.remove('secand_childTwo');
                div1.classList.add('hidden_mobil');
                div2.classList.remove('hidden_mobil');
                div2.classList.add('secand_childTwo_mobil');
                secand_childH.style.height = '300px';
                console.log('Switching to mobile view'); }

                // استخدام ال toggle يغنى عن عمل داله جديده لكن من اجل تنسيق الارتفاع 
            // if (div1 && div2) { // تأكد من أن العناصر موجودة
            //     console.log('Switching back to desktop view');
            //     div1.classList.toggle('hidden_mobil');
            //     div1.classList.toggle('secand_childTwo');
            //     div2.classList.toggle('secand_childTwo_mobil');
            //     div2.classList.toggle('hidden_mobil');
            //     secand_childH.style.height = '440px';
            // }
        
           
            }
            console.log("click") });



    




document.querySelector('.icon_share_mobil').addEventListener('click', function() {
    var div1 = document.querySelector('.hidden_mobil');
    var div2 = document.querySelector('.secand_childTwo_mobil');
    var secand_childH = document.querySelector('.secand_child');
    

    console.log('Switching back to desktop view');
    div1.classList.remove('hidden_mobil');
    div1.classList.add('secand_childTwo');
    div2.classList.remove('secand_childTwo_mobil');
    div2.classList.add('hidden_mobil');
    secand_childH.style.height = '440px'; 
   
 })


