import { Routes } from '@angular/router';
import { AutenticarFuncionarioComponent } from './components/pages/autenticar-funcionario/autenticar-funcionario.component';
import { CriarFuncionarioComponent } from './components/pages/criar-funcionario/criar-funcionario.component';
import { RelatorioGestorComponent } from './components/pages/relatorio-gestor/relatorio-gestor.component';
import { MarcarPontoComponent } from './components/pages/marcar-ponto/marcar-ponto.component';
import { AutenticarGestorComponent } from './components/pages/autenticar-gestor/autenticar-gestor.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full',
        redirectTo: 'pages/funcionarios/autenticar'
    },
    {
        path: 'pages/funcionarios/autenticar',
        component: AutenticarFuncionarioComponent
    },
    {
        path: 'pages/cadastro',
        component: CriarFuncionarioComponent
    },
    {
        path: 'pages/relatorio-gestor',
        component: RelatorioGestorComponent
    },
    {
        path:'pages/marcar-ponto',
        component: MarcarPontoComponent
    },
    {
        path:'pages/autenticar-gestor',
        component: AutenticarGestorComponent
    }
];
