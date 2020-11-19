function addCat(i) {
    const oneCat = `
                    <div class="col-lg-4 catBox m-2 light-b-shadow">
                        <div class="canvas">
                        <div class = "catid-`+i+`">
                            <div class="bubble bubble-bottom-left">Meooooow!</div>
                            <div class="ears">
                                <div class="left_ear">
                                    <div class="inner_left_ear"></div>
                                </div>
                                <div class="right_ear">
                                    <div class="inner_right_ear"></div>
                    
                                </div>
                            </div>
                            <div class="head">
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
                                    <div class="leye">
                                        <div class="lshut">
                                            <span></span>
                                        </div>
                                        <div class="liris"></div>
                                    </div>
                                    <div class="reye">
                                        <div class="rshut">
                                            <span></span>
                                        </div>
                                        <div class="riris"></div>
                                    </div>
                                </div>
                                <div class="whiskers">
                                    <svg height="100%" width="100%">
                                        <line id="whisker1" x1="10" y1="60" x2="85" y2="100"></line>
                                        <line id="whisker2" x1="10" y1="80" x2="85" y2="100"></line>
                                        <line id="whisker3" x1="10" y1="100" x2="85" y2="100"></line>
                                        <line id="whisker4" x1="160" y1="100" x2="235" y2="60"></line>
                                        <line id="whisker5" x1="160" y1="100" x2="235" y2="80"></line>
                                        <line id="whisker6" x1="160" y1="100" x2="235" y2="100"></line>
                                    </svg>
                                </div>
                                <div class="snout">T
                                    <div class="mouth">{</div>
                                </div>
                            </div>
                            <div class="catbod">
                                <div class="catbod_top"></div>
                                <div class="catbod_bottom">
                                    <div class="belly"></div>
                                </div>
                            </div>
                            <div class="tail1"></div>
                            <div class="tail2"></div>
                            <div class="legs">
                                <div class="lleg"></div>
                                <div class="rleg"></div>
                            </div>
                        </div>
                        <br>
                        <!-- dna numbers listed on front end -->
                        <div class="dnaDiv" id="catDNA-`+i`">
                            <b>
                                DNA:
                                <!-- Colors -->
                                <span class="dnaear"></span>
                                <span class="dnahead"></span>
                                <span class="dnabodytop"></span>
                                <span class="dnabodybottom"></span>
                                <span class="dnabelly"></span>
                                <span class="dnatailbase"></span>
                                <span class="dnatailstripe"></span>
                    
                                <!-- Cattributes -->
                                <span class="dnaface"></span>
                                <span class="dnabooty"></span>
                                <span class="dnaanimate"></span>
                            </b>
                            <div>
                        </div>
                    </div>
                    `
    return oneCat
}