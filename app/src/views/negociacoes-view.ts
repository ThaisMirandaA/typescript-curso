import { Negociacoes } from "../models/listaNegociacoes.js";
import { Views } from "./views.js";

export class NegociacoesView extends Views<Negociacoes> {

    protected template(model: Negociacoes): string {
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                 ${model.lista().map(negociacao => {
            return `
                        <tr>
                            <th>${this.formatar(negociacao.data)}</th>
                            <th>${negociacao.quantidade}</th>
                            <th>${negociacao.valor}</th>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
   `
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data); 
    }
}