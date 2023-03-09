# 開發步驟

1.  建立angular專案angular-web-app-sign-up  
    <code>
    ng new angular-web-app-sign-up --routing=true --style css
    </code>

1.  安裝 Angular Material  
    <code>
    ng add @angular/material
    </code>    

1.  配合IIS部署編修配置
    1.  add src/web.config
    1.  edit angular.json & package.json


1.  新增git子模組angular-module-sign-up至./src/app/Submodules/目錄下

    angular-module-sign-up的開發步驟：  
    1.  新增模組angular-module-sign-up(含路由)  
        <code>
        ng g m Submodules/angular-module-sign-up --routing
        </code>  

    1.  新增元件sign-up  
        <code>
        ng g c Submodules/angular-module-sign-up/components/sign-up
        </code>    

    1.  新增服務sign-up  
        <code>
        ng g s Submodules/angular-module-sign-up/services/sign-up
        </code>
