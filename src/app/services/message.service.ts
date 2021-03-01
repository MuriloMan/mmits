import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public getTexts(type: string): any {
    // [en, pt][keep it]
    const t = this.getLangId(type);
    return {
      allRightsReserved: [
        'MMITS IT PARTNER - ALL RIGHTS RESERVED.',
        'MMITS IT PARTNER - TODOS OS DIREITOS RESERVADOS.'
      ][t],
      mmits: [
        'MMITS',
        'MMITS'
      ][t],
      contact: [
        'Contact',
        'Contato'
      ][t],
      rpcity: [
        'Ribeirão Preto - SP',
        'Ribeirão Preto - SP'
      ][t],
      toPortuguese: [
        'To Portuguese',
        'Para Português'
      ][t],
      toEnglish: [
        'To English',
        'Para Inglês'
      ][t],
      about: [
        'About',
        'Sobre'
      ][t],
      mmitsItPartner: [
        'MMITS - IT PARTNER',
        'MMITS - IT PARTNER'
      ][t],
      aboutDesc: [
        'Sed vitae nulla facilisis, vehicula ligula nec, tempus massa. Cras sit amet molestie mi. In malesuada, mauris id placerat fringilla, ligula est scelerisque leo, ac semper nisi mauris sit amet augue. Mauris id eleifend mi, id posuere nibh. Vivamus sit amet ipsum dictum, luctus massa nec, lacinia purus. Vestibulum consectetur, libero a bibendum volutpat, tellus elit feugiat eros, vitae feugiat neque diam ut leo. Praesent id mi ultrices diam iaculis gravida ut ut nunc. Cras gravida mattis venenatis. Duis aliquam bibendum tempor. Nullam quis nisi rutrum massa dapibus euismod ornare sit amet ligula. Nam facilisis augue in dictum laoreet. Donec vehicula cursus velit a interdum. Maecenas suscipit egestas metus, eget placerat nisi congue vitae. Sed ut gravida est, non consequat tellus. Nullam auctor eleifend lacus, eget sagittis metus rhoncus sit amet.',
        'Sed vitae nulla facilisis, vehicula ligula nec, tempus massa. Cras sit amet molestie mi. In malesuada, mauris id placerat fringilla, ligula est scelerisque leo, ac semper nisi mauris sit amet augue. Mauris id eleifend mi, id posuere nibh. Vivamus sit amet ipsum dictum, luctus massa nec, lacinia purus. Vestibulum consectetur, libero a bibendum volutpat, tellus elit feugiat eros, vitae feugiat neque diam ut leo. Praesent id mi ultrices diam iaculis gravida ut ut nunc. Cras gravida mattis venenatis. Duis aliquam bibendum tempor. Nullam quis nisi rutrum massa dapibus euismod ornare sit amet ligula. Nam facilisis augue in dictum laoreet. Donec vehicula cursus velit a interdum. Maecenas suscipit egestas metus, eget placerat nisi congue vitae. Sed ut gravida est, non consequat tellus. Nullam auctor eleifend lacus, eget sagittis metus rhoncus sit amet.'
      ][t],
      home: [
        'Home',
        'Início'
      ][t],
      facebookPageLink: [
        'Facebook page MMITS - IT PARTNER',
        'Facebook page MMITS - IT PARTNER'
      ][t],
      facebookSendPhone: [
        'Send MMITS - IT PARTNER a message on whatsapp right now',
        'Envie uma mensagem agora para MMITS - IT PARTNER no whatsapp'
      ][t],
      siteMap: [
        'Site Map',
        'Mapa do Site'
      ][t],
      
      mmitslogo: [
        'The logo MMITS was made by Murilo Man, which there are two M lying mirrored to another inside a hexagon representing the HTML simbols < and > and a slash in the midle which means a self close tag. After the symbol, the name MMITS with IT in blue collor, everything is inside a golden ratio up and bottom bordered.',
        'O logotipo MMITS foi feito por Murilo Man, onde existem dois M espelhados um no outro dentro de um hexágono representando os símbolos HTML <e> e uma barra no meio que significa uma tag de auto-fechamento. Após o símbolo, o nome MMITS com IT em cor azul, tudo está dentro de uma proporção áurea com borda superior e inferior.'
      ][t],
      cnpj: [
        'CNPJ: 36.251.403/0001-22',
        'CNPJ: 36.251.403/0001-22'
      ][t],
      imgDescTitle1: [
        'A man developing code on notebook.',
        'Um homem desenvolvendo código no notebook.'
      ][t],
      imgDescTitle2: [
        'A desk with post it or stick notes representing a organization of ideas or work.',
        'Uma mesa com postit ou notas adesivas representando uma organização de ideas ou trabalho.'
      ][t],
      adsdaasdasds: [
        'Photo by Viktor Hanacek from picjumbo.',
        'Foto de Viktor Hanacek do site picjumbo.'
      ][t],
      credits: [
        'Credits',
        'Créditos'
      ][t],
      iconMageBy: [
        'Icons made by',
        'Ícones feitos por'
      ][t],
      copyrightTitleImageDesc: [
        'Photo by Lukas from Pexels.',
        'Foto de Lukas do site Pexels.'
      ][t],
      socialNetworks: [
        'Social Networks',
        'Redes Sociais'
      ][t],
      title1: [
        'Developers & UX Experts',
        'Desenvolvedores e Especialistas de UX'
      ][t],
      descTitle1: [
        'We bring the process of developing closer to you.',
        'Nós trazemos o processo de desenvolvimento mais perto de você.'
      ][t],
      title2: [
        'Agile team',
        'Time Ágil'
      ][t],
      descTitle2: [
        'We follow agile methodology to bring the most valuable results to your objectives.',
        'Seguimos uma metodologia ágil para trazer grandes resultados para seus objetivos.'
      ][t],
      title3: [
        'bla bla bla',
        'bla bla bla'
      ][t],
      descTitle3: [
        'bla bla bla',
        'bla bla bla'
      ][t],
      whatwedo: [
        'What we do',
        'O que fazemos'
      ][t],
      whoweare: [
        'Who we are',
        'Quem somos'
      ][t],
      murilosname: [
        'Murilo Manzoli de Souza',
        'Murilo Manzoli de Souza'
      ][t],
      phone: [
        'Phone',
        'Número'
      ][t],
      email: [
        'Email',
        'Email'
      ][t],
      murilosdesc: [
        'CEO | Analyst and Software Developer, also works with UX.',
        'CEO | Analista e Desenvolvedor, também trabalha com UX.'
      ][t],
    };
  }
  private getLangId(type: string): number {
    type = type === undefined ? '' : type.toLowerCase();
    if (type === 'pt-br') {
      return 1;
    } else if (type === 'en-us') {
      return 0;
    }
  }

}