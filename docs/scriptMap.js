document.addEventListener("DOMContentLoaded", () => {
    const regions = document.querySelectorAll(".highlight_borders");

    let tooltip = document.querySelector(".mapLegendDivTooltip");

    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.className = "mapLegendDivTooltip";
        document.body.appendChild(tooltip);

      
        const closeBtn = document.createElement("span");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "5px";
        closeBtn.style.right = "10px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.fontSize = "18px";
        closeBtn.style.fontWeight = "bold";
        closeBtn.style.userSelect = "none";
        tooltip.appendChild(closeBtn);

        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tooltip.style.display = "none";
        });
    }

  
    let tooltipText = tooltip.querySelector(".tooltipText");
    if (!tooltipText) {
        tooltipText = document.createElement("div");
        tooltipText.className = "tooltipText";
        tooltip.appendChild(tooltipText);
    }

    regions.forEach(region => {
        region.addEventListener("click", (e) => {
            e.stopPropagation(); 
            const title = region.getAttribute("data-title");
            let a = "";
            let actual_name = '';
            
            if(title=='1'){
                a = "— государство, скрытое от остального мира магическим барьером. Ни один её житель не знает о внешнем мире, как и внешний мир — о ней. Над Империей правит Богиня Персефона, древнее божество, чья слава гремела тысячи лет назад, во времена, когда Юлан была великой гегемонией. Что стало с Империей и её народом теперь — неизвестно.";
                actual_name = 'Империя Юлан'
            };  //это была проверка растягивания окошка если что))
            
            if(title=='2'){
                a = "— регион, где одновременно существует от 9 до 17 герцогств. Границы здесь постоянно меняются, и де-юре земли переходят из рук в руки. В этих землях сильный поглощает слабого, но даже в крошечном государстве можно найти неогранённый алмаз. Это идеальное место, чтобы побороться за власть, построить собственную державу и обрести независимость.";
                actual_name = 'Нестабильные Грецогства';
            };  
            
            if(title=='3'){
                a = "— единственное государство на Континенте, где у власти зверолюди. Молодая держава, родившаяся в огне войны, обрела независимость в начале Эпохи Восстановления. Её основатель и правитель — Зверь Багай, полу-человек, полу-панда, воин Святого ранга. Его имя уже окутано легендами, а земля до сих пор не забыла реки крови, пролитые в битве за свободу звероморфов. ";
                actual_name = 'Каркальское Королевство';
            };  
            
            if(title=='4'){
                a = "— древнейшее человеческое государство, уступающее по возрасту лишь Империи Юлан. Пройдя сквозь четыре великие эпохи, она вошла в Эпоху Восстановления несломленной, но потрясённой. Почти треть всех людей Континента живёт под её знамёнами, но управлять такой махиной — непростая задача. Великие дома плетут интриги, и даже древний род Траймунд не свободен от политических компромиссов. Молодая императрица Венса пока удерживает власть в своих руках. Но надолго ли?";
                actual_name = 'Траймундская Империя';
            };  
            
            if(title=='5'){
                a = "— человеческое государство, распространившее своё влияние почти на весь Континент с одной-единственной целью: истребление иных рас. В минувшую эпоху оно вело затяжную войну против коалиции стран, ныне лишённых суверенитета, и против Тёмной Империи, расположенной по ту сторону Крестовых Гор. Это глубоко религиозная страна, исповедующая культ человеческого превосходства. Здесь верят: никакая раса, кроме людей, не имеет права на существование. Формально страной правит Святой Император, но все мирские дела он и его церковь передали в руки Мирского Императора. Истинная же власть давно скрыта в тени — за алтарями, молитвами и закрытыми дверями.";
                actual_name = 'Священная Империя';
            };  
            
            if(title=='6'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='7'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='8'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='9'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='10'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='11'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='12'){
                a = "";
                actual_name = '';
            };  

            // ПЕРЕМЕННАЯ а ЭТО ТЕКСТ КОТОРЫМ ТЫ ОПИСЫВАЕШЬ СТРАНУ\РЕГИОН.
            // 2 = нестабильные герцогства
            // 3 = траймундская или какая она там империя. но та .что поменьше справа
            // 4 = она же но та что побольше слева
            // 5 = священная империя
            // 6 = о брайн
            // 7 = тристрам
            // 8 = равнины ларонса 
            // 9 = дортмунд
            // 10 = темная империя
            // 11 = пустыня объединенная в две
            // 12 = ГОРА
            // все было выделено ровно по той карте что ты скинул хд.

            showTooltip(`${actual_name} ${a}`);
        });
    });

    function showTooltip(text) {
        tooltipText.textContent = text;


        tooltip.style.position = "fixed";
        tooltip.style.left = `50%`;
        tooltip.style.top = `50%`;
        tooltip.style.transform = `translate(-50%, -50%)`;
        tooltip.style.display = "block";
        tooltip.style.zIndex = 9999;
        tooltip.style.padding = "20px";
        tooltip.style.paddingRight = "40px"; 
        tooltip.style.border = "2px solid #000";
        tooltip.style.borderRadius = "10px";
        tooltip.style.backgroundColor = "aliceblue";
        tooltip.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        tooltip.style.maxWidth = "500px";
    }


    document.addEventListener("click", (e) => {
        if (!e.target.closest(".mapLegendDivTooltip") && !e.target.closest(".highlight_borders")) {
            tooltip.style.display = "none";
        }
    });
});