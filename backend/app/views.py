# Create your views here.
# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from react.render import render_component
import os


def index(request):
    rendered = render_component(
        os.path.join(os.getcwd(), '..', 'frontend', 'src', 'index.js'),
        {
            'url': '/comment/',
        },
        to_static_markup=True,
    )

    return render(
        request, 'index.html', {'rendered': rendered})
