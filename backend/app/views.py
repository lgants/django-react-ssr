# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from react.render import render_component
import os

comments = []

def index(request):
    rendered = render_component(
        os.path.join(os.getcwd(), '..', 'frontend', 'public','bundle.js'),
        {
            'comments': comments,
            'url': '/comment/',
        },
        to_static_markup=True,
    )

    return render_template('index.html', rendered=rendered)
