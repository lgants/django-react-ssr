# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from react.render import render_component

comments = []

def index():
    rendered = render_component(
        os.path.join(os.getcwd(), 'static', 'js', 'CommentBox.jsx'),
        {
            'comments': comments,
            'url': '/comment/',
        },
        to_static_markup=True,
    )

return render_template('index.html', rendered=rendered)
