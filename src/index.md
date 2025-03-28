---
title: Home
layout: gallery
---

<div id="gallery">
{%- for post in collections.all -%}
    {%- if post.data.featured == true %}
    <div><a href="{{ post.url }}" name="{{ post.title }}"><img src="{{post.data.image}}" alt="{{ post.title }}"></a></div>
    {%- endif -%}
{%- endfor -%}
</div>
