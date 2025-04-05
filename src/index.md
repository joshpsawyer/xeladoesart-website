---
title: Home
layout: gallery
---

<div id="gallery">
{%- for post in collections.all | sortByDate -%}
    {%- if post.data.featured == true %}
    <div><a href="{{ post.url }}" name="{{ post.data.title }}"><img src="{{post.data.image}}" alt="{{ post.data.title }}"></a></div>
    {%- endif -%}
{%- endfor -%}
</div>
