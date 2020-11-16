function addBreedBox1(i) {
    const oneCat = `
    <div class="col-lg-4 catBox m-2 light-b-shadow">
        <div class="canvas">
        <button type="button" onClick="breed1('`+ i + `')" class="btn btn-primary genbut">Select</button>
            <div class="bubble bubble` + i + ` bubble-bottom-left">Meooooow!</div>
            <div class="ears ears` + i + `">
                <div class="left_ear left_ear` + i + `">
                    <div class="inner_left_ear"></div>
                </div>
                <div class="right_ear right_ear` + i + `">
                    <div class="inner_right_ear"></div>
    
                </div>
            </div>
            <div class="head head` + i + `">
                <div class="stripes">
                    <svg id="stripes1" height="100%" width="100%">
                        <line x1="70" y1="10" x2="110" y2="70"></line>
                        <line style="stroke: white; stroke-width:1;" x1="68" y1="10" x2="108" y2="70"></line>
                        <line style="stroke: white; stroke-width:1;" x1="72" y1="10" x2="112" y2="70"></line>
                    </svg>
                    <svg id="stripes2" height="100%" width="100%">
                        <line x1="110" y1="70" x2="47" y2="20"></line>
                        <line style="stroke: white; stroke-width:1;" x1="108" y1="70" x2="45" y2="20"></line>
                        <line style="stroke: white; stroke-width:1;" x1="112" y1="70" x2="49" y2="20"></line>
                    </svg>
                    <svg id="stripes3" height="100%" width="100%">
                        <line x1="145" y1="65" x2="213" y2="20"></line>
                        <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="211" y2="20"></line>
                        <line style="stroke: white; stroke-width:1;" x1="146" y1="65" x2="214" y2="20"></line>
                    </svg>
                    <svg id="stripes4" height="100%" width="100%">
                        <line x1="145" y1="65" x2="175" y2="13"></line>
                        <line style="stroke: white; stroke-width:1;" x1="147" y1="65" x2="177" y2="13"></line>
                        <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="173" y2="13"></line>
                    </svg>
                </div>
                <div class="eyes">
                    <div class="leye leye` + i + `">
                        <div class="lshut lshut` + i + `">
                            <span></span>
                        </div>
                        <div class="liris liris` + i + `"></div>
                    </div>
                    <div class="reye reye` + i + `">
                        <div class="rshut rshut` + i + `">
                            <span></span>
                        </div>
                        <div class="riris riris` + i + `"></div>
                    </div>
                </div>
                <div class="whiskers whiskers` + i + `">
                    <svg height="100%" width="100%">
                        <line id="whisker1 whisker1` + i + `" x1="10" y1="60" x2="85" y2="100"></line>
                        <line id="whisker2 whisker2` + i + `" x1="10" y1="80" x2="85" y2="100"></line>
                        <line id="whisker3 whisker3` + i + `" x1="10" y1="100" x2="85" y2="100"></line>
                        <line id="whisker4 whisker4` + i + `" x1="160" y1="100" x2="235" y2="60"></line>
                        <line id="whisker5 whisker5` + i + `" x1="160" y1="100" x2="235" y2="80"></line>
                        <line id="whisker6 whisker6` + i + `" x1="160" y1="100" x2="235" y2="100"></line>
                    </svg>
                </div>
                <div class="snout">T
                    <div class="mouth mouth` + i + `">{</div>
                </div>
            </div>
            <div class="catbod">
                <div class="catbod_top catbod_top` + i + `"></div>
                <div class="catbod_bottom catbod_bottom` + i + `">
                    <div class="belly belly` + i + `"></div>
                </div>
            </div>
            <div class="tail1 tail1` + i + `"></div>
            <div class="tail2 tail2` + i + `"></div>
            <div class="legs">
                <div class="lleg"></div>
                <div class="rleg"></div>
            </div>
        </div>
        <br>
        <!-- dna numbers listed on front end -->
        <div class="dnaDiv" id="catDNA">
            <b>
                DNA:
                <!-- Colors -->
                <span id="dnaear` + i + `"></span>
                <span id="dnahead` + i + `"></span>
                <span id="dnabodytop` + i + `"></span>
                <span id="dnabodybottom` + i + `"></span>
                <span id="dnabelly` + i + `"></span>
                <span id="dnatailbase` + i + `"></span>
                <span id="dnatailstripe` + i + `"></span>
    
                <!-- Cattributes -->
                <span id="dnaface` + i + `"></span>
                <span id="dnabooty` + i + `"></span>
                <span id="dnaanimate` + i + `"></span>
            </b>
        </div>
    </div>
    `
    return oneCat
}

function addBreedBox2(i) {
    const oneCat = `
                        <div class="col-lg-4 catBox m-2 light-b-shadow">
                            <div class="canvas">
                            <button type="button" onClick="breed2('`+ i + `')" class="btn btn-primary genbut">Select</button>
                                <div class="bubble bubble` + i + ` bubble-bottom-left">Meooooow!</div>
                                <div class="ears ears` + i + `">
                                    <div class="left_ear left_ear` + i + `">
                                        <div class="inner_left_ear"></div>
                                    </div>
                                    <div class="right_ear right_ear` + i + `">
                                        <div class="inner_right_ear"></div>
                        
                                    </div>
                                </div>
                                <div class="head head` + i + `">
                                    <div class="stripes">
                                        <svg id="stripes1" height="100%" width="100%">
                                            <line x1="70" y1="10" x2="110" y2="70"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="68" y1="10" x2="108" y2="70"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="72" y1="10" x2="112" y2="70"></line>
                                        </svg>
                                        <svg id="stripes2" height="100%" width="100%">
                                            <line x1="110" y1="70" x2="47" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="108" y1="70" x2="45" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="112" y1="70" x2="49" y2="20"></line>
                                        </svg>
                                        <svg id="stripes3" height="100%" width="100%">
                                            <line x1="145" y1="65" x2="213" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="211" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="146" y1="65" x2="214" y2="20"></line>
                                        </svg>
                                        <svg id="stripes4" height="100%" width="100%">
                                            <line x1="145" y1="65" x2="175" y2="13"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="147" y1="65" x2="177" y2="13"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="173" y2="13"></line>
                                        </svg>
                                    </div>
                                    <div class="eyes">
                                        <div class="leye leye` + i + `">
                                            <div class="lshut lshut` + i + `">
                                                <span></span>
                                            </div>
                                            <div class="liris liris` + i + `"></div>
                                        </div>
                                        <div class="reye reye` + i + `">
                                            <div class="rshut rshut` + i + `">
                                                <span></span>
                                            </div>
                                            <div class="riris riris` + i + `"></div>
                                        </div>
                                    </div>
                                    <div class="whiskers whiskers` + i + `">
                                        <svg height="100%" width="100%">
                                            <line id="whisker1 whisker1` + i + `" x1="10" y1="60" x2="85" y2="100"></line>
                                            <line id="whisker2 whisker2` + i + `" x1="10" y1="80" x2="85" y2="100"></line>
                                            <line id="whisker3 whisker3` + i + `" x1="10" y1="100" x2="85" y2="100"></line>
                                            <line id="whisker4 whisker4` + i + `" x1="160" y1="100" x2="235" y2="60"></line>
                                            <line id="whisker5 whisker5` + i + `" x1="160" y1="100" x2="235" y2="80"></line>
                                            <line id="whisker6 whisker6` + i + `" x1="160" y1="100" x2="235" y2="100"></line>
                                        </svg>
                                    </div>
                                    <div class="snout">T
                                        <div class="mouth mouth` + i + `">{</div>
                                    </div>
                                </div>
                                <div class="catbod">
                                    <div class="catbod_top catbod_top` + i + `"></div>
                                    <div class="catbod_bottom catbod_bottom` + i + `">
                                        <div class="belly belly` + i + `"></div>
                                    </div>
                                </div>
                                <div class="tail1 tail1` + i + `"></div>
                                <div class="tail2 tail2` + i + `"></div>
                                <div class="legs">
                                    <div class="lleg"></div>
                                    <div class="rleg"></div>
                                </div>
                            </div>
                            <br>
                            <!-- dna numbers listed on front end -->
                            <div class="dnaDiv" id="catDNA">
                                <b>
                                    DNA:
                                    <!-- Colors -->
                                    <span id="dnaear` + i + `"></span>
                                    <span id="dnahead` + i + `"></span>
                                    <span id="dnabodytop` + i + `"></span>
                                    <span id="dnabodybottom` + i + `"></span>
                                    <span id="dnabelly` + i + `"></span>
                                    <span id="dnatailbase` + i + `"></span>
                                    <span id="dnatailstripe` + i + `"></span>
                        
                                    <!-- Cattributes -->
                                    <span id="dnaface` + i + `"></span>
                                    <span id="dnabooty` + i + `"></span>
                                    <span id="dnaanimate` + i + `"></span>
                                </b>
                            </div>
                        </div>
                        `
    return oneCat
}
function addCat() {
    const oneCat = `
                        <div class="col-lg-4 catBox m-2 light-b-shadow">
                            <div class="canvas">
                                <div class="bubble bubble bubble-bottom-left">Meooooow!</div>
                                <div class="ears ears">
                                    <div class="left_ear left_ear">
                                        <div class="inner_left_ear"></div>
                                    </div>
                                    <div class="right_ear right_ear">
                                        <div class="inner_right_ear"></div>
                        
                                    </div>
                                </div>
                                <div class="head head">
                                    <div class="stripes">
                                        <svg id="stripes1" height="100%" width="100%">
                                            <line x1="70" y1="10" x2="110" y2="70"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="68" y1="10" x2="108" y2="70"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="72" y1="10" x2="112" y2="70"></line>
                                        </svg>
                                        <svg id="stripes2" height="100%" width="100%">
                                            <line x1="110" y1="70" x2="47" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="108" y1="70" x2="45" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="112" y1="70" x2="49" y2="20"></line>
                                        </svg>
                                        <svg id="stripes3" height="100%" width="100%">
                                            <line x1="145" y1="65" x2="213" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="211" y2="20"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="146" y1="65" x2="214" y2="20"></line>
                                        </svg>
                                        <svg id="stripes4" height="100%" width="100%">
                                            <line x1="145" y1="65" x2="175" y2="13"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="147" y1="65" x2="177" y2="13"></line>
                                            <line style="stroke: white; stroke-width:1;" x1="143" y1="65" x2="173" y2="13"></line>
                                        </svg>
                                    </div>
                                    <div class="eyes">
                                        <div class="leye leye">
                                            <div class="lshut lshut">
                                                <span></span>
                                            </div>
                                            <div class="liris liris"></div>
                                        </div>
                                        <div class="reye reye">
                                            <div class="rshut rshut">
                                                <span></span>
                                            </div>
                                            <div class="riris riris"></div>
                                        </div>
                                    </div>
                                    <div class="whiskers whiskers">
                                        <svg height="100%" width="100%">
                                            <line id="whisker1 whisker1" x1="10" y1="60" x2="85" y2="100"></line>
                                            <line id="whisker2 whisker2" x1="10" y1="80" x2="85" y2="100"></line>
                                            <line id="whisker3 whisker3" x1="10" y1="100" x2="85" y2="100"></line>
                                            <line id="whisker4 whisker4" x1="160" y1="100" x2="235" y2="60"></line>
                                            <line id="whisker5 whisker5" x1="160" y1="100" x2="235" y2="80"></line>
                                            <line id="whisker6 whisker6" x1="160" y1="100" x2="235" y2="100"></line>
                                        </svg>
                                    </div>
                                    <div class="snout">T
                                        <div class="mouth mouth">{</div>
                                    </div>
                                </div>
                                <div class="catbod">
                                    <div class="catbod_top catbod_top"></div>
                                    <div class="catbod_bottom catbod_bottom">
                                        <div class="belly belly"></div>
                                    </div>
                                </div>
                                <div class="tail1 tail1"></div>
                                <div class="tail2 tail2"></div>
                                <div class="legs">
                                    <div class="lleg"></div>
                                    <div class="rleg"></div>
                                </div>
                            </div>
                            <br>
                            <!-- dna numbers listed on front end -->
                            <div class="dnaDiv" id="catDNA">
                                <b>
                                    DNA:
                                    <!-- Colors -->
                                    <span id="dnaear"></span>
                                    <span id="dnahead"></span>
                                    <span id="dnabodytop"></span>
                                    <span id="dnabodybottom"></span>
                                    <span id="dnabelly"></span>
                                    <span id="dnatailbase"></span>
                                    <span id="dnatailstripe"></span>
                        
                                    <!-- Cattributes -->
                                    <span id="dnaface"></span>
                                    <span id="dnabooty"></span>
                                    <span id="dnaanimate"></span>
                                </b>
                            </div>
                        </div>
                        `
    return oneCat
}