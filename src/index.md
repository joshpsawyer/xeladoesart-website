---
title: Home
layout: gallery
---



<ul>
{%- for post in collections.all -%}
    {%- if post.data.featured == true %}
    <li>
        <a href="{{ post.url }}"><img src="{{post.data.image}}" alt="{{ post.data.tite }}"></a>
    </li>
    {%- endif -%}
{%- endfor -%}
</ul>

