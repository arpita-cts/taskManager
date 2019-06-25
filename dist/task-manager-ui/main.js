(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Task.ts":
/*!*************************!*\
  !*** ./src/app/Task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
        this.parent = new ParentTask;
        this.parent.parentTask = '';
        this.task = '';
        this.startDate = '';
        this.endDate = '';
        this.priority = 0;
    }
    return Task;
}());

var ParentTask = /** @class */ (function () {
    function ParentTask() {
    }
    return ParentTask;
}());


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view-task/view-task.component */ "./src/app/components/view-task/view-task.component.ts");





var routes = [
    { path: 'addTask', component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_3__["AddTaskComponent"] },
    { path: 'viewTask', component: _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_4__["ViewTaskComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n<router-outlet></router-outlet>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'task-manager-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-task/view-task.component */ "./src/app/components/view-task/view-task.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"],
                _components_view_task_view_task_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            ],
            providers: [
                _task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    border-radius: 5px;\r\n    margin: 20px;\r\n    width: 500px;\r\n    float: left;\r\n    background: #fbfbfb;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password], input[type=date] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=date]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 100%;\r\n    height: 15px;\r\n    border-radius: 5px;   \r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n  }\r\n\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%; \r\n    background: rgb(122, 122, 122);\r\n    cursor: pointer;\r\n  }\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: rgb(122, 122, 122);\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCOztBQUV6Qiw4QkFBOEI7O0FBQzlCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUlBLG1DQUFtQzs7QUFDbkM7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBRVosdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogT3ZlcndyaXRlIGRlZmF1bHQgc3R5bGVzIG9mIGhyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQWRkIGEgYmx1ZSB0ZXh0IGNvbG9yIHRvIGxpbmtzICovXHJcbmEge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcblxyXG5cclxuLnNsaWRlciB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgICBcclxuICAgIGJhY2tncm91bmQ6ICNkM2QzZDM7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyBcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n<form  (ngSubmit)=\"addTask()\">\n    <label for=\"task\"><b>Task</b></label>\n    <input class=\"form-control\" type=\"text\" placeholder=\"Add Task\" name=\"task\" [(ngModel)]=\"task.task\" required>\n\n    <label for=\"priority\"><b>Priority</b></label> \n    <p style=\"padding: 10px;font-size: 13px;\">{{task.priority}}</p>\n    <input type=\"range\" min=\"1\" max=\"30\" value=\"1\" class=\"slider\" name=\"priority\" [(ngModel)]=\"task.priority\" required>\n    \n    <label for=\"prntTask\"><b>Parent Task</b></label>\n    <select class=\"form-control\" required [(ngModel)]=\"task.parent.parentId\" placeholder=\"Select Parent Task\" name=\"parentTask\">\n      <option *ngFor=\"let pt of parentTasks\" [ngValue]=\"pt.parentId\">{{pt.parentTask}}</option>\n    </select>\n\n    <input class=\"form-control\" type=\"text\" placeholder=\"Enter Parent Task\" name=\"parentTask\" [(ngModel)]=\"task.parent.parentTask\" required>\n    \n<div class=\"form-group\">\n    <label for=\"strtDate\"><b>Start Date</b></label>\n    <input class=\"form-control\" type=\"date\" placeholder=\"start date\" name=\"strtDate\" [(ngModel)]=\"task.startDate\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"endDate\"><b>End Date</b></label>\n    <input class=\"form-control\" type=\"date\" placeholder=\"end date\" name=\"endDate\" [(ngModel)]=\"task.endDate\" required>\n  </div>\n    <hr>\n   \n    <input type=\"submit\" value=\"Add Task\">\n    <input type=\"submit\" (click)=\"resetData()\" value=\"Reset\">\n  </form>\n\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../task.service */ "./src/app/task.service.ts");



var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(_taskService) {
        this._taskService = _taskService;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = this._taskService.getTask();
        console.log(this.parentTasks);
        this._taskService.getAllParentTask().subscribe(function (res) {
            console.log(res);
            _this.parentTasks = res;
        }, function (error) {
            console.log(error);
        });
    };
    AddTaskComponent.prototype.addTask = function () {
        console.log(this.task);
        this._taskService.addTask(this.task).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    AddTaskComponent.prototype.resetData = function () {
        this.taskForm.reset();
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/components/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <h2 class=\"bg-light\">Task Manager</h2>\n    <nav class=\"navbar navbar-expand-sm bg-light\">\n        \n          <!-- Links -->\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/addTask\">Add Task</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/viewTask\">View Task</a>\n            </li>\n            \n          </ul>\n        \n        </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/view-task/view-task.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/view-task/view-task.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    border-radius: 5px;\r\n    margin: 20px;\r\n    width: 800px;\r\n    float: left;\r\n    background: #fbfbfb;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password], input[type=date] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=date]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LXRhc2svdmlldy10YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0I7O0FBRXpCLDhCQUE4Qjs7QUFDOUI7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0Qjs7QUFDNUI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBSUEsbUNBQW1DOztBQUNuQztFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlldy10YXNrL3ZpZXctdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7Ym94LXNpemluZzogYm9yZGVyLWJveH1cclxuXHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbn1cclxuXHJcbi8qIEZ1bGwtd2lkdGggaW5wdXQgZmllbGRzICovXHJcbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWRhdGVdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMjJweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMsIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLyogT3ZlcndyaXRlIGRlZmF1bHQgc3R5bGVzIG9mIGhyICovXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQWRkIGEgYmx1ZSB0ZXh0IGNvbG9yIHRvIGxpbmtzICovXHJcbmEge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/view-task/view-task.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/view-task/view-task.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n        \n            <label for=\"task\"><b>Task</b></label>\n            <input type=\"text\" placeholder=\"Add Task\" name=\"task\" required>\n          \n        </div>\n        <div class=\"col-sm-6\">\n            <label for=\"task\"><b>Parent Task</b></label>\n            <input type=\"text\" placeholder=\"Add Task\" name=\"parentTask\" required>\n        </div>\n        \n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n        \n            <label for=\"task\"><b>Priority From</b></label>\n            <input type=\"text\" placeholder=\"Priority From\" name=\"priorFrom\" required>\n          \n        </div>\n        <div class=\"col-sm-3\">\n            <label for=\"task\"><b>Priority To</b></label>\n            <input type=\"text\" placeholder=\"Priority to\" name=\"priorTo\" required>\n        </div>\n        <div class=\"col-sm-3\">\n            <label for=\"task\"><b>Start Date</b></label>\n            <input type=\"text\" placeholder=\"Start Date\" name=\"strtDate\" required>\n        </div>\n        <div class=\"col-sm-3\">\n            <label for=\"task\"><b>End Date</b></label>\n            <input type=\"text\" placeholder=\"end Date\" name=\"endDate\" required>\n        </div>\n        \n      </div>\n      <hr>\n\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Task</th>\n            <th>Parent</th>\n            <th>Priority</th>\n            <th>Start</th>\n            <th>End</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let task of tasks\">\n          <tr>\n            <td>{{task.task}}</td>\n            <td>{{task.parent.parentTask}}</td>\n            <td>{{task.priority}}</td>\n            <td>{{task.startDate}}</td>\n            <td>{{task.endDate}}</td>\n            <td><button type=\"button\"  (click)=\"editTask(task)\" [disabled]=\"task.deleteFlag == 1\">Edit</button></td>\n            <td><button type=\"button\"  (click)=\"endTask(task)\" [disabled]=\"task.deleteFlag == 1\">End Task</button></td>\n          </tr>\n         \n        </tbody>\n      </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/view-task/view-task.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/view-task/view-task.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(_taskService, _router) {
        this._taskService = _taskService;
        this._router = _router;
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._taskService.getAllTask().subscribe(function (tsks) {
            _this.tasks = tsks;
            console.log(_this.tasks);
        }, function (error) {
            console.log(error);
        });
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        console.log(task);
        this._taskService.setTask(task);
        this._router.navigate(['addTask']);
    };
    ViewTaskComponent.prototype.endTask = function (task) {
    };
    ViewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/components/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/components/view-task/view-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Task */ "./src/app/Task.ts");







var TaskService = /** @class */ (function () {
    function TaskService(_http, http) {
        this._http = _http;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
        this.baseUrl = "http://localhost:9090";
        this.task = new _Task__WEBPACK_IMPORTED_MODULE_5__["Task"]();
    }
    TaskService.prototype.getAllTask = function () {
        return this.http.get(this.baseUrl + "/task/getAllTask")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.baseUrl + '/task/addTask', task, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.get(this.baseUrl + "/task/deleteTask/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getAllParentTask = function () {
        return this.http.get(this.baseUrl + "/task/getAllParentTask")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    //   private extractData(res: Response) {
    //     let body = res.json();
    //     return body;
    //  }
    //  private handleError (error: any) {
    //   let errMsg = error.message || 'Server error';
    //   console.error(errMsg); // log to console instead
    //   return Observable.throw(errMsg);
    // }
    TaskService.prototype.setTask = function (task) {
        this.task = task;
    };
    TaskService.prototype.getTask = function () {
        return this.task;
    };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Final project\TaskManager-master\TaskManager-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map