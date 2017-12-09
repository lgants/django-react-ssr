# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from react.render import render_component
from IPython import embed
import os


# os.path.join(os.getcwd(), '..', 'frontend', 'src', 'Temp.js'),
def index(request):
    # print(os.path.join(os.getcwd(), 'Temp.jsx'))
    rendered = render_component(
        os.path.join(os.getcwd(), 'app', 'static', 'Temp.jsx'),
        {
            'url': '/comment/',
        },
        to_static_markup=True,
    )
    
    return render(request, 'index.html', {'rendered': rendered})
