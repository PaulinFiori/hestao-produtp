import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonModulesModule } from "../common/common-modules/common-modules.module";
import { ProdutosComponent } from "./produtos.component";
import { AngularMaterialElementsModule } from "../common/angular-material-elements/angular-material-elements.module";
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule, 
        CommonModulesModule, 
        AngularMaterialElementsModule,
        NgxMaskDirective,
        NgxMaskPipe
    ],
    declarations: [ProdutosComponent, ModalProdutoComponent]
})
export class ProdutosModule { }