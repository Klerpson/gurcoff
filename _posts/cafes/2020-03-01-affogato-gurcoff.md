---
layout: articulo
title: Café con Helado Affogato GurCoff
description: Café expreso con Helado de Vainilla en su interior.
keywords: café con helado, café y helado, postre de café
principal: si
tags: [Café, Caliente]
category: Cafés
precio: 5000
src: img/cafegurcoff/cafegurcoff210.png
webp: img/cafegurcoff/cafegurcoff210.webp
png: img/cafegurcoff/affogato200.png
webpng: img/cafegurcoff/affogato200.webp
png1: img/cafegurcoff/affogato350.png
webpng1: img/cafegurcoff/affogato350.webp
png2: img/cafegurcoff/affogato800.png
webpng2: img/cafegurcoff/affogato800.webp
alt: Café con Helado GurCoff
excerpt_separator: <!-- excerpt -->
---
¿Te gusta la suavidad del capuchino? **Este es mucho mejor**. Y cuando tenemos el sabor de chocolate suizo en la heladería, podrás probar el mejor affogato mocachino. ¡Es espectacular!

<!-- excerpt -->

Solicita tu domicilio. También puedes hacer una reservación. Si la cumples puntual, recibe un descuento en tu compra:

{% include boton.html path="https://wa.me/573115245225" texto="Domicilio" %} {% include boton.html path="https://wa.me/573115245225" texto="Reservación" %}

| Producto | Descripción |
| ----------- | ------ |
| *Café orgánico* | Utilizamos café caturro cultivado en la localidad de San Agustín. Se muele antes de servirlo, para asegurar el mejor sabor |
| *Helado* | Contiene una porción del helado favorito de San Agustín Huila. Se utiliza los sabores de vainilla y chocolate suizo |

![{{ page.title }}]({{ site.baseul }}/img/cafegurcoff/cafegurcoff410.png "{{ page.alt }}")

![{{ page.title }}]({{ site.baseul }}/img/cafegurcoff/affogato300.jpg "{{ page.alt }}")


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
  {% for post in site.tags.Dulce %}
  <div>
    <picture>
      <source type="image/webp" srcset="{{ site.baseurl }}/{{ post.webpng }}">
      <img src="{{ site.baseurl }}/{{ post.png }}" alt="{{ post.alt }}">
    </picture> 
    <a href="{{ post.url }}">{{ post.title }} <p>${{ post.precio }}</p></a>
  </div>
  {% endfor %}
</div>