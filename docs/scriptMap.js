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
                a = "этот регион знаменит чем-то очень интересным, aaa aaaa aaaaaaaaaa aaaaaaaaaaaaффффффффффффaaaaaaaaaaaaa фффффффффф фффффффффффыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффффф aaaaaaaaaaa";
                actual_name = 'империя Юлан'
            };  //это была проверка растягивания окошка если что))
            
            if(title=='2'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='3'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='4'){
                a = "";
                actual_name = '';
            };  
            
            if(title=='5'){
                a = "";
                actual_name = '';
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