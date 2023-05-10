/*!
=========================================================
* Portfolio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import $ from 'jquery'

// navbar toggle
$('#nav-toggle').on('click', function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});
