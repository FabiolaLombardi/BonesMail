webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EliminadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_detalle_detalle__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EliminadosPage = /** @class */ (function () {
    function EliminadosPage(navCtrl, navParams, storage, correos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.correos = correos;
        this.eliminadosPage = EliminadosPage_1;
        this.detallePage = __WEBPACK_IMPORTED_MODULE_4__pages_detalle_detalle__["a" /* DetallePage */];
    }
    EliminadosPage_1 = EliminadosPage;
    EliminadosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('correosEliminados')
            .then(function (correosEliminados) {
            if (correosEliminados == null) {
                _this.listaEliminados = [];
                _this.correos.eliminados = [];
            }
            else {
                _this.listaEliminados = correosEliminados;
                _this.correos.eliminados = _this.listaEliminados;
            }
        })
            .catch(function (error) { console.log(error); });
    };
    EliminadosPage = EliminadosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eliminados',template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\pages\eliminados\eliminados.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Mensajes Eliminados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let correo of listaEliminados" [navPush]="detallePage" [navParams]=correo detail-none>\n      <ion-avatar item-left>\n        <img src="../../assets/imgs/{{correo.imagen}}" alt="">\n      </ion-avatar>\n      <h2>From: {{correo.nombre}}</h2>\n      <h3>Asunto: {{correo.asunto}}</h3>\n      <p>{{correo.mensaje}}</p>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\flombardi\gmail\src\pages\eliminados\eliminados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__["a" /* CorreosProvider */]])
    ], EliminadosPage);
    return EliminadosPage;
    var EliminadosPage_1;
}());

//# sourceMappingURL=eliminados.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnviadosPage = /** @class */ (function () {
    function EnviadosPage(navCtrl, navParams, correos, events, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.correos = correos;
        this.events = events;
        this.storage = storage;
        this.detallePage = __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */];
    }
    EnviadosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('correosEnviados')
            .then(function (correosEnviados) {
            if (correosEnviados == null) {
                _this.listaDeCorreos = [];
                _this.correos.enviados = [];
            }
            else {
                _this.listaDeCorreos = correosEnviados;
                _this.correos.enviados = _this.listaDeCorreos;
                _this.total = _this.listaDeCorreos.length;
                _this.events.publish('total: totalusuarios', _this.total);
                console.log("publishing", _this.total);
            }
        })
            .catch(function (error) { console.log(error); });
    };
    EnviadosPage.prototype.delete = function (correo) {
        var position = this.listaDeCorreos.lastIndexOf(correo);
        this.listaDeCorreos.splice(position, 1);
        console.log(this.listaDeCorreos);
        this.storage.set('correosEnviados', this.listaDeCorreos);
        this.correos.eliminados.push(correo);
        this.storage.set('correosEliminados', this.correos.eliminados);
    };
    EnviadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enviados',template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\pages\enviados\enviados.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title> Mensajes Enviados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let correo of listaDeCorreos" [navPush]="detallePage" [navParams]=correo detail-none (press)="delete(correo)">\n      <ion-avatar item-left>\n        <img src="../../assets/imgs/{{correo.imagen}}" alt="">\n      </ion-avatar>\n      <h2>From: {{correo.nombre}}</h2>\n      <h3>Asunto: {{correo.asunto}}</h3>\n      <p>{{correo.mensaje}}</p>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\flombardi\gmail\src\pages\enviados\enviados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__["a" /* CorreosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], EnviadosPage);
    return EnviadosPage;
}());

//# sourceMappingURL=enviados.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams, correos, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.correos = correos;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.detallePage = __WEBPACK_IMPORTED_MODULE_3__detalle_detalle__["a" /* DetallePage */];
        this.newPage = __WEBPACK_IMPORTED_MODULE_4__new_new__["a" /* NewPage */];
        this.listaCorreos = correos.lista;
    }
    InboxPage.prototype.nuevoCorreo = function (tipo) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__new_new__["a" /* NewPage */], { tipo: tipo, correo: '' });
        modal.present();
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inbox',template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\pages\inbox\inbox.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Inbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list >\n  <button ion-item *ngFor="let correo of listaCorreos" [navPush]="detallePage" [navParams]=correo detail-none> \n    <ion-avatar item-left>\n      <img src="../../assets/imgs/{{correo.imagen}}" alt="">\n    </ion-avatar>\n    <h2>From:{{correo.nombre}}</h2>\n    <h3>Asunto:{{correo.asunto}}</h3>\n    <p>{{correo.mensaje}}</p>\n  </button>\n</ion-list>\n<ion-fab right bottom>\n  <button ion-fab color="secondary" (click)="nuevoCorreo(\'Nuevo Mensaje\')">\n    <ion-icon name="create"></ion-icon>\n  </button>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\flombardi\gmail\src\pages\inbox\inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__["a" /* CorreosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/eliminados/eliminados.module": [
		278,
		3
	],
	"../pages/enviados/enviados.module": [
		279,
		2
	],
	"../pages/inbox/inbox.module": [
		280,
		1
	],
	"../pages/new/new.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Toast = /** @class */ (function () {
    function Toast(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    Toast.prototype.crearMensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    Toast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], Toast);
    return Toast;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_inbox_inbox__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_correos_correos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_new_new__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_toast__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_enviados_enviados__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_eliminados_eliminados__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_enviados_enviados__["a" /* EnviadosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_eliminados_eliminados__["a" /* EliminadosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/eliminados/eliminados.module#EliminadosPageModule', name: 'EliminadosPage', segment: 'eliminados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enviados/enviados.module#EnviadosPageModule', name: 'EnviadosPage', segment: 'enviados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new/new.module#NewPageModule', name: 'NewPage', segment: 'new', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detalle_detalle__["a" /* DetallePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_new_new__["a" /* NewPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_enviados_enviados__["a" /* EnviadosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_eliminados_eliminados__["a" /* EliminadosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_correos_correos__["a" /* CorreosProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_enviados_enviados__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_eliminados_eliminados__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, events) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__["a" /* InboxPage */];
        this.inboxPage = __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__["a" /* InboxPage */];
        this.enviadosPage = __WEBPACK_IMPORTED_MODULE_5__pages_enviados_enviados__["a" /* EnviadosPage */];
        this.eliminadosPage = __WEBPACK_IMPORTED_MODULE_6__pages_eliminados_eliminados__["a" /* EliminadosPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            events.subscribe('total: totalusuarios', function (total) {
                _this.noLeidos = total;
                console.log("subscribing");
            });
        });
    }
    MyApp.prototype.irAPagina = function (pagina) {
        this.menu.setRoot(pagina);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\app\app.html"*/'<ion-menu [content]="nav">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="irAPagina(inboxPage)">\n                <ion-icon name="mail" item-left></ion-icon>\n                Inbox\n                <ion-badge item-right color="dark"></ion-badge>\n            </button>\n            <button ion-item (click)="irAPagina(enviadosPage)">\n                <ion-icon name="send" item-left></ion-icon>\n                Mensajes Enviados\n                <ion-badge item-right color="dark">{{noLeidos}}</ion-badge>\n            </button>\n            <button ion-item (click)="irAPagina(eliminadosPage)">\n                <ion-icon name="trash" item-left></ion-icon>\n                Mensajes Eliminados\n                <ion-badge item-right color="dark"></ion-badge>\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #nav></ion-nav>'/*ion-inline-end:"C:\Users\flombardi\gmail\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CorreosProvider = /** @class */ (function () {
    function CorreosProvider() {
        this.lista = [{
                nombre: 'Barbara Ortega',
                direccion: 'carloso@gmail.com',
                asunto: 'Bienvenido!',
                mensaje: 'Bienvenido es un nombre propio masculino de origen latino en su variante en español. Su significado etimológico es igual a la palabra homónima',
                fecha: 'Lunes, 15 de agosto del 2018',
                imagen: 'b.svg'
            },
            {
                nombre: 'Pablo Flores',
                direccion: 'flowersfelipe@gmail.com',
                asunto: 'Hello?',
                mensaje: 'I have not heard from you for a couple of weeks, i am worried. Please call me',
                fecha: 'Miercoles, 4 de septiembre del 2018',
                imagen: 'pb.png'
            },
            {
                nombre: 'Daniel Alvarez',
                direccion: 'danielsitoa@hotmail.com',
                asunto: 'Invitacion',
                mensaje: 'Tu evento empieza en el momento que mandas las invitaciones. La gente va a decidir ir o no ir según el contenido de tu invitación.',
                fecha: 'Jueves, 16 de octumbre del 2018 ',
                imagen: 'db.png'
            },
            {
                nombre: 'Maria Melean',
                direccion: 'mariameleaan@hotmail.com',
                asunto: 'Renuncia',
                mensaje: ' La renuncia es el acto jurídico unilateral por el cual una persona manifiesta su voluntad de discontinuar permanentemente el goce de un derecho o de extinguir un vínculo jurídico.',
                fecha: 'Viernes, 7 de noviembre del 2018',
                imagen: 'm.svg'
            },
            {
                nombre: 'Roberto Rodriguez',
                direccion: 'robbier@gmail.com',
                asunto: 'Feliz Navidad!',
                mensaje: 'Te deseo una muy feliz navidad y miles de bencidiones. Te quiero mucho y miss you a lot. Besos',
                fecha: 'Domingo, 24 de diciembre del 2018',
                imagen: 'rb.png'
            }];
        this.enviados = [];
        this.eliminados = [];
    }
    CorreosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CorreosProvider);
    return CorreosProvider;
}());

//# sourceMappingURL=correos.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_new__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetallePage = /** @class */ (function () {
    function DetallePage(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.item = navParams.data;
    }
    DetallePage.prototype.mostrarModal = function (tipo) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__new_new__["a" /* NewPage */], { tipo: tipo, item: this.item });
        modal.present();
    };
    DetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\pages\detalle\detalle.html"*/'<ion-header>\n\n\n\n        <ion-navbar>\n\n          <ion-title>Detalles</ion-title>\n\n        </ion-navbar>\n\n      \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Asunto: {{item.asunto}}</h2>\n\n  <hr>\n\n  <ion-item>  \n\n    <ion-avatar item-left >\n\n      <img src="../../assets/imgs/{{item.imagen}}" alt="">\n\n    </ion-avatar>\n\n    <h2>De: {{item.nombre}}</h2>\n\n    <h3>{{item.fecha}}</h3>\n\n  </ion-item>\n\n  <p [innerHTML]="item.mensaje">{{item.mensaje}}</p>\n\n  \n\n  </ion-content>\n\n\n\n<ion-footer>\n\n    <ion-item-divider>\n\n        <ion-row>\n\n            <ion-col>\n\n               <button ion-button clear (click)="mostrarModal(\'Reply\')">\n\n                 <div>\n\n               <ion-icon name="ios-undo-outline"></ion-icon>\n\n               <br>\n\n               <label>Replay</label> \n\n               </div>\n\n              </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button clear (click)="mostrarModal(\'Reply All\')">\n\n                  <div>\n\n                <ion-icon name="ios-undo-outline"></ion-icon>\n\n                <ion-icon name="ios-undo-outline"></ion-icon>\n\n                <br>\n\n                <label>Reply All</label>\n\n                </div>\n\n              </button>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <button ion-button clear (click)="mostrarModal(\'Forward\')">\n\n                    <div>\n\n                      <ion-icon name="ios-redo-outline"></ion-icon>\n\n                      <br>\n\n                     <label> Forward </label>\n\n                     </div>\n\n                  </button>\n\n                </ion-col>\n\n          </ion-row>\n\n  </ion-item-divider>\n\n  </ion-footer>\n\n\n\n    \n\n      '/*ion-inline-end:"C:\Users\flombardi\gmail\src\pages\detalle\detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], DetallePage);
    return DetallePage;
}());

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewPage = /** @class */ (function () {
    function NewPage(navCtrl, navParams, viewCtrl, toastCtrl, correo, events, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.correo = correo;
        this.events = events;
        this.storage = storage;
        this.de = "micorreo@gmail.com";
        this.para = '';
        this.asunto = '';
        this.new = '';
        this.nombre = "Muchacho Mi Correo";
        this.tipo = navParams.get('tipo');
        this.item = navParams.get('item');
        if (this.tipo == 'Reply') {
            this.para = this.item.direccion;
            this.asunto = 'Re:' + this.item.asunto;
        }
        if (this.tipo == 'Reply All') {
            this.para = this.item.direccion;
            this.asunto = 'Re:' + this.item.asunto;
        }
        if (this.tipo == 'Forward') {
            this.asunto = "Re:" + this.item.asunto;
        }
    }
    NewPage.prototype.volver = function () {
        this.viewCtrl.dismiss();
    };
    NewPage.prototype.enviar = function () {
        var correo = {
            nombre: this.nombre,
            de: this.de,
            para: this.para,
            asunto: this.asunto,
            tipo: this.tipo,
            mensaje: this.new,
            fecha: new Date(),
            imagen: 'm.svg'
        };
        console.log("Mensaje Enviado");
        console.log('De:' + correo.nombre + ' ' + correo.de);
        console.log('Para:' + correo.para);
        console.log('Asunto:' + correo.asunto);
        console.log('Mensaje:' + correo.mensaje);
        console.log('Fecha:' + correo.fecha);
        this.correo.enviados.push(correo);
        this.storage.set('correosEnviados', this.correo.enviados)
            .then()
            .catch(function (error) {
            console.log(error);
        });
        this.viewCtrl.dismiss();
        this.toastCtrl.crearMensaje("Mensaje Enviado");
    };
    NewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new',template:/*ion-inline-start:"C:\Users\flombardi\gmail\src\pages\new\new.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{tipo}}</ion-title>\n    <ion-buttons left>\n      <button ion-button (click)="volver()" clear>\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button (click)="enviar()" clear>\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <label>De: {{ de }}</label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Para:</ion-label>\n      <ion-input type="email" [(ngModel)]="para"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Asunto:" type="text" [(ngModel)]="asunto"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-textarea rows="10" placeholder="Componer correo:" type="text" [(ngModel)]="new"></ion-textarea>\n</ion-content>'/*ion-inline-end:"C:\Users\flombardi\gmail\src\pages\new\new.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__["a" /* CorreosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NewPage);
    return NewPage;
}());

//# sourceMappingURL=new.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map