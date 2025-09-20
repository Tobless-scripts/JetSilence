"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imports = void 0;
/*
Code Examples:

TypeScript:
import { Component } from '@angular/core';
import * as fs from 'fs';
export { UserService } from './user.service';
→ Color affects: import, from, export (import/export keywords)

Python:
import os
from datetime import datetime
import numpy as np
→ Color affects: import, from (import keywords)

PHP:
require_once 'config.php';
include 'header.php';
use App\Models\User;
→ Color affects: require_once, include, use (include/namespace keywords)

Go:
import (
        "fmt"
        "net/http"
        "encoding/json"
)
→ Color affects: import (import keyword)

Kotlin:
import kotlinx.coroutines.*
import java.util.*
import android.os.Bundle
→ Color affects: import (import keyword)

Java:
import java.util.*;
import java.io.*;
import com.example.models.User;
→ Color affects: import (import keyword)

C:
#include <stdio.h>
#include <stdlib.h>
#include "myheader.h"
→ Color affects: #include (preprocessor directive)

C++:
#include <iostream>
#include <vector>
#include "myclass.h"
using namespace std;
→ Color affects: #include, using (preprocessor directive and namespace keyword)

C#:
using System;
using System.Collections.Generic;
using MyNamespace.Models;
→ Color affects: using (using keyword)
*/
exports.imports = [
    // IMPORTS/MODULES
    {
        scope: [
            "keyword.control.import",
            "keyword.control.export",
            "keyword.control.from"
        ],
        settings: {
            foreground: "#B67C60",
            fontStyle: "medium"
        }
    }
];
