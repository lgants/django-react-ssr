# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from react.render import render_component
import os


# os.path.join(os.getcwd(), '..', 'client', 'src', 'app', 'components', 'Temp.js'),
def index(request):
    # os.path.join(os.getcwd(), 'app', 'static', 'Temp.jsx')
    rendered = render_component(
        os.path.join(os.getcwd(), '..', 'client', 'src', 'components', 'Temp.jsx'),
        {
            'url': '/comment/',
        },
        to_static_markup=True,
    )

    return render(request, 'index.html', {'rendered': rendered})
