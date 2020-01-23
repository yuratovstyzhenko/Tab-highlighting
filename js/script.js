window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // Example
    // let tabContent = document.querySelectorAll('.info-tabcontent');
    // let info = document.querySelector('.info-header');
    // let tabs = document.querySelectorAll('.info-header-tab');

    function tabFocusing (tabContent, info, tabs) {

        function hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
        hideTabContent(1);
        
        function showTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        
        info.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tabs.length; i++) {
                    if (target == tabs[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });
    }
});