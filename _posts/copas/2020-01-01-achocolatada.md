---
layout: articulo
title: Copa Achocolatada GurCoff
description: Copa con chocolates y doble Porción de Helado Suave con adiciones de fruta o golocinas
keywords: copa de Helado, helados, doble helado, chocolates
tags: [Copas, Chocolate]
category: Copas
precio: 9000
principal: si
src: img/achocolatada/choco.jpg
webp: img/achocolatada/choco.webp
png: img/achocolatada/choco200.png
webpng: img/achocolatada/choco200.webp
png1: img/achocolatada/choco350.png
webpng1: img/achocolatada/choco350.webp
png2: img/achocolatada/choco511.png
webpng2: img/achocolatada/choco511.webp
alt: Copa con chocolates y doble porción de Helado GurCoff
excerpt_separator: <!-- excerpt -->
---
Los que amamos el chocolate, encontramos un tesoro delicioso en esta copa.

<!-- excerpt -->

Solicita tu domicilio. También puedes hacer una reservación. Si la cumples puntual, recibe un descuento en tu compra:

{% include boton.html path="https://wa.me/573115245225" texto="Domicilio" %} {% include boton.html path="https://wa.me/573115245225" texto="Reservación" %}

| Producto | Descripción |
| ----------- | ------ |
| *Helado* | Contiene doble porción del helado suave que se prepara en el día. Podrás escober sus sabores o combinarlos |
| *Brownie seco* | Agrega una agradable textura al final de la copa. Este se humedece a medida que el helado derrite. Es delicioso |
| *Chococripis* | Arroz inflado con chocolate crocante |
| *Chocomelos* | Mashmellow bañado en chocolate |
| *Perlas achocolatadas* | Más crocante de chocolate fino |

![Copa Achocolatada]({{ site.baseul }}/img/achocolatada/choco310.jpg)

![Copa Achocolatada]({{ site.baseul }}/img/achocolatada/choco310b.jpg)

![Copa Achocolatada]({{ site.baseul }}/img/achocolatada/achocolatada300.jpg)

¿Quieres pedir uno? Recuerda que aplican [condiciones]().

{% include boton.html path="https://wa.me/573115245225" texto="Domicilio" %} {% include boton.html path="https://wa.me/573115245225" texto="Reservación" %}

## ¿Qué opinan en San Agustín del {{ page.title }}?

### En Facebook:

> ### Will Burnell
Very excellent icecream and frozen yoghurt. I have tried the Vanilla and the plain and always with Maracuya syrup. Riquisima!

## Más opiniones en:

<span class="icon-tripadvisor"></span> Visita [gurcoff-san-agustin]({{ site.tripadvisor }})

<span class="icon-map-marker"></span> Visita [GurCoff Mi Negocio]({{ site.minegocio }})

## Más delicias GurCoff para San Agustín Huila

<div class="recomendaciones">
  {% for post in site.tags.Postres %}
  <div>
    <picture>
      <source type="image/webp" srcset="{{ site.baseurl }}/{{ post.webpng }}">
      <img src="{{ site.baseurl }}/{{ post.png }}" alt="{{ post.alt }}">
    </picture> 
    <a href="{{ post.url }}">{{ post.title }} <p>${{ post.precio }}</p></a>
  </div>
  {% endfor %}
  </div>