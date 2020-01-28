(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("MyLibrary", [], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateMyLibrary"];
/******/ 	window["webpackHotUpdateMyLibrary"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "43b0a6bf932d0e25b841";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js"); // NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)


var reverseKeywords = {};

for (var key in cssKeywords) {
  if (cssKeywords.hasOwnProperty(key)) {
    reverseKeywords[cssKeywords[key]] = key;
  }
}

var convert = module.exports = {
  rgb: {
    channels: 3,
    labels: 'rgb'
  },
  hsl: {
    channels: 3,
    labels: 'hsl'
  },
  hsv: {
    channels: 3,
    labels: 'hsv'
  },
  hwb: {
    channels: 3,
    labels: 'hwb'
  },
  cmyk: {
    channels: 4,
    labels: 'cmyk'
  },
  xyz: {
    channels: 3,
    labels: 'xyz'
  },
  lab: {
    channels: 3,
    labels: 'lab'
  },
  lch: {
    channels: 3,
    labels: 'lch'
  },
  hex: {
    channels: 1,
    labels: ['hex']
  },
  keyword: {
    channels: 1,
    labels: ['keyword']
  },
  ansi16: {
    channels: 1,
    labels: ['ansi16']
  },
  ansi256: {
    channels: 1,
    labels: ['ansi256']
  },
  hcg: {
    channels: 3,
    labels: ['h', 'c', 'g']
  },
  apple: {
    channels: 3,
    labels: ['r16', 'g16', 'b16']
  },
  gray: {
    channels: 1,
    labels: ['gray']
  }
}; // hide .channels and .labels properties

for (var model in convert) {
  if (convert.hasOwnProperty(model)) {
    if (!('channels' in convert[model])) {
      throw new Error('missing channels property: ' + model);
    }

    if (!('labels' in convert[model])) {
      throw new Error('missing channel labels property: ' + model);
    }

    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model);
    }

    var channels = convert[model].channels;
    var labels = convert[model].labels;
    delete convert[model].channels;
    delete convert[model].labels;
    Object.defineProperty(convert[model], 'channels', {
      value: channels
    });
    Object.defineProperty(convert[model], 'labels', {
      value: labels
    });
  }
}

convert.rgb.hsl = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var min = Math.min(r, g, b);
  var max = Math.max(r, g, b);
  var delta = max - min;
  var h;
  var s;
  var l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
  var rdif;
  var gdif;
  var bdif;
  var h;
  var s;
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var v = Math.max(r, g, b);
  var diff = v - Math.min(r, g, b);

  var diffc = function diffc(c) {
    return (v - c) / 6 / diff + 1 / 2;
  };

  if (diff === 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rdif = diffc(r);
    gdif = diffc(g);
    bdif = diffc(b);

    if (r === v) {
      h = bdif - gdif;
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif;
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif;
    }

    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }

  return [h * 360, s * 100, v * 100];
};

convert.rgb.hwb = function (rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var h = convert.rgb.hsl(rgb)[0];
  var w = 1 / 255 * Math.min(r, Math.min(g, b));
  b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
  return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var c;
  var m;
  var y;
  var k;
  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
};
/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */


function comparativeDistance(x, y) {
  return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
}

convert.rgb.keyword = function (rgb) {
  var reversed = reverseKeywords[rgb];

  if (reversed) {
    return reversed;
  }

  var currentClosestDistance = Infinity;
  var currentClosestKeyword;

  for (var keyword in cssKeywords) {
    if (cssKeywords.hasOwnProperty(keyword)) {
      var value = cssKeywords[keyword]; // Compute comparative distance

      var distance = comparativeDistance(rgb, value); // Check if its less, if so set as closest

      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
  }

  return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
  return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255; // assume sRGB

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
  var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
  var xyz = convert.rgb.xyz(rgb);
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
  var h = hsl[0] / 360;
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var t1;
  var t2;
  var t3;
  var rgb;
  var val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  t1 = 2 * l - t2;
  rgb = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1);

    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  return rgb;
};

convert.hsl.hsv = function (hsl) {
  var h = hsl[0];
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var smin = s;
  var lmin = Math.max(l, 0.01);
  var sv;
  var v;
  l *= 2;
  s *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (l + s) / 2;
  sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
  return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
  var h = hsv[0] / 60;
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var hi = Math.floor(h) % 6;
  var f = h - Math.floor(h);
  var p = 255 * v * (1 - s);
  var q = 255 * v * (1 - s * f);
  var t = 255 * v * (1 - s * (1 - f));
  v *= 255;

  switch (hi) {
    case 0:
      return [v, t, p];

    case 1:
      return [q, v, p];

    case 2:
      return [p, v, t];

    case 3:
      return [p, q, v];

    case 4:
      return [t, p, v];

    case 5:
      return [v, p, q];
  }
};

convert.hsv.hsl = function (hsv) {
  var h = hsv[0];
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var vmin = Math.max(v, 0.01);
  var lmin;
  var sl;
  var l;
  l = (2 - s) * v;
  lmin = (2 - s) * vmin;
  sl = s * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}; // http://dev.w3.org/csswg/css-color/#hwb-to-rgb


convert.hwb.rgb = function (hwb) {
  var h = hwb[0] / 360;
  var wh = hwb[1] / 100;
  var bl = hwb[2] / 100;
  var ratio = wh + bl;
  var i;
  var v;
  var f;
  var n; // wh + bl cant be > 1

  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  n = wh + f * (v - wh); // linear interpolation

  var r;
  var g;
  var b;

  switch (i) {
    default:
    case 6:
    case 0:
      r = v;
      g = n;
      b = wh;
      break;

    case 1:
      r = n;
      g = v;
      b = wh;
      break;

    case 2:
      r = wh;
      g = v;
      b = n;
      break;

    case 3:
      r = wh;
      g = n;
      b = v;
      break;

    case 4:
      r = n;
      g = wh;
      b = v;
      break;

    case 5:
      r = v;
      g = wh;
      b = n;
      break;
  }

  return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
  var c = cmyk[0] / 100;
  var m = cmyk[1] / 100;
  var y = cmyk[2] / 100;
  var k = cmyk[3] / 100;
  var r;
  var g;
  var b;
  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
  var x = xyz[0] / 100;
  var y = xyz[1] / 100;
  var z = xyz[2] / 100;
  var r;
  var g;
  var b;
  r = x * 3.2406 + y * -1.5372 + z * -0.4986;
  g = x * -0.9689 + y * 1.8758 + z * 0.0415;
  b = x * 0.0557 + y * -0.2040 + z * 1.0570; // assume sRGB

  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
  b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);
  return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
  var x = xyz[0];
  var y = xyz[1];
  var z = xyz[2];
  var l;
  var a;
  var b;
  x /= 95.047;
  y /= 100;
  z /= 108.883;
  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
  l = 116 * y - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);
  return [l, a, b];
};

convert.lab.xyz = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var x;
  var y;
  var z;
  y = (l + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;
  var y2 = Math.pow(y, 3);
  var x2 = Math.pow(x, 3);
  var z2 = Math.pow(z, 3);
  y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
  x *= 95.047;
  y *= 100;
  z *= 108.883;
  return [x, y, z];
};

convert.lab.lch = function (lab) {
  var l = lab[0];
  var a = lab[1];
  var b = lab[2];
  var hr;
  var h;
  var c;
  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;

  if (h < 0) {
    h += 360;
  }

  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
};

convert.lch.lab = function (lch) {
  var l = lch[0];
  var c = lch[1];
  var h = lch[2];
  var a;
  var b;
  var hr;
  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2];
  var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

  value = Math.round(value / 50);

  if (value === 0) {
    return 30;
  }

  var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));

  if (value === 2) {
    ansi += 60;
  }

  return ansi;
};

convert.hsv.ansi16 = function (args) {
  // optimization here; we already know the value and don't need to get
  // it converted for us.
  return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
  var r = args[0];
  var g = args[1];
  var b = args[2]; // we use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.

  if (r === g && g === b) {
    if (r < 8) {
      return 16;
    }

    if (r > 248) {
      return 231;
    }

    return Math.round((r - 8) / 247 * 24) + 232;
  }

  var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
  return ansi;
};

convert.ansi16.rgb = function (args) {
  var color = args % 10; // handle greyscale

  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }

    color = color / 10.5 * 255;
    return [color, color, color];
  }

  var mult = (~~(args > 50) + 1) * 0.5;
  var r = (color & 1) * mult * 255;
  var g = (color >> 1 & 1) * mult * 255;
  var b = (color >> 2 & 1) * mult * 255;
  return [r, g, b];
};

convert.ansi256.rgb = function (args) {
  // handle greyscale
  if (args >= 232) {
    var c = (args - 232) * 10 + 8;
    return [c, c, c];
  }

  args -= 16;
  var rem;
  var r = Math.floor(args / 36) / 5 * 255;
  var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
  var b = rem % 6 / 5 * 255;
  return [r, g, b];
};

convert.rgb.hex = function (args) {
  var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);

  if (!match) {
    return [0, 0, 0];
  }

  var colorString = match[0];

  if (match[0].length === 3) {
    colorString = colorString.split('').map(function (char) {
      return char + char;
    }).join('');
  }

  var integer = parseInt(colorString, 16);
  var r = integer >> 16 & 0xFF;
  var g = integer >> 8 & 0xFF;
  var b = integer & 0xFF;
  return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
  var r = rgb[0] / 255;
  var g = rgb[1] / 255;
  var b = rgb[2] / 255;
  var max = Math.max(Math.max(r, g), b);
  var min = Math.min(Math.min(r, g), b);
  var chroma = max - min;
  var grayscale;
  var hue;

  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }

  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / chroma % 6;
  } else if (max === g) {
    hue = 2 + (b - r) / chroma;
  } else {
    hue = 4 + (r - g) / chroma + 4;
  }

  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
  var s = hsl[1] / 100;
  var l = hsl[2] / 100;
  var c = 1;
  var f = 0;

  if (l < 0.5) {
    c = 2.0 * s * l;
  } else {
    c = 2.0 * s * (1.0 - l);
  }

  if (c < 1.0) {
    f = (l - 0.5 * c) / (1.0 - c);
  }

  return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
  var s = hsv[1] / 100;
  var v = hsv[2] / 100;
  var c = s * v;
  var f = 0;

  if (c < 1.0) {
    f = (v - c) / (1 - c);
  }

  return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
  var h = hcg[0] / 360;
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;

  if (c === 0.0) {
    return [g * 255, g * 255, g * 255];
  }

  var pure = [0, 0, 0];
  var hi = h % 1 * 6;
  var v = hi % 1;
  var w = 1 - v;
  var mg = 0;

  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v;
      pure[2] = 0;
      break;

    case 1:
      pure[0] = w;
      pure[1] = 1;
      pure[2] = 0;
      break;

    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v;
      break;

    case 3:
      pure[0] = 0;
      pure[1] = w;
      pure[2] = 1;
      break;

    case 4:
      pure[0] = v;
      pure[1] = 0;
      pure[2] = 1;
      break;

    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w;
  }

  mg = (1.0 - c) * g;
  return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
};

convert.hcg.hsv = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  var f = 0;

  if (v > 0.0) {
    f = c / v;
  }

  return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var l = g * (1.0 - c) + 0.5 * c;
  var s = 0;

  if (l > 0.0 && l < 0.5) {
    s = c / (2 * l);
  } else if (l >= 0.5 && l < 1.0) {
    s = c / (2 * (1 - l));
  }

  return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
  var c = hcg[1] / 100;
  var g = hcg[2] / 100;
  var v = c + g * (1.0 - c);
  return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
  var w = hwb[1] / 100;
  var b = hwb[2] / 100;
  var v = 1 - b;
  var c = v - w;
  var g = 0;

  if (c < 1) {
    g = (v - c) / (1 - c);
  }

  return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};

convert.rgb.apple = function (rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};

convert.gray.rgb = function (args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
  return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
  return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
  return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
  return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
  var val = Math.round(gray[0] / 100 * 255) & 0xFF;
  var integer = (val << 16) + (val << 8) + val;
  var string = integer.toString(16).toUpperCase();
  return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
  var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};

/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};
var models = Object.keys(conversions);

function wrapRaw(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    return fn(args);
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

function wrapRounded(fn) {
  var wrappedFn = function wrappedFn(args) {
    if (args === undefined || args === null) {
      return args;
    }

    if (arguments.length > 1) {
      args = Array.prototype.slice.call(arguments);
    }

    var result = fn(args); // we're assuming the result is an array here.
    // see notice in conversions.js; don't use box types
    // in conversion functions.

    if (_typeof(result) === 'object') {
      for (var len = result.length, i = 0; i < len; i++) {
        result[i] = Math.round(result[i]);
      }
    }

    return result;
  }; // preserve .conversion property if there is one


  if ('conversion' in fn) {
    wrappedFn.conversion = fn.conversion;
  }

  return wrappedFn;
}

models.forEach(function (fromModel) {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], 'channels', {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], 'labels', {
    value: conversions[fromModel].labels
  });
  var routes = route(fromModel);
  var routeModels = Object.keys(routes);
  routeModels.forEach(function (toModel) {
    var fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
module.exports = convert;

/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/


function buildGraph() {
  var graph = {}; // https://jsperf.com/object-keys-vs-for-in-with-closure/3

  var models = Object.keys(conversions);

  for (var len = models.length, i = 0; i < len; i++) {
    graph[models[i]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  }

  return graph;
} // https://en.wikipedia.org/wiki/Breadth-first_search


function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel]; // unshift -> queue -> pop

  graph[fromModel].distance = 0;

  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions[current]);

    for (var len = adjacents.length, i = 0; i < len; i++) {
      var adjacent = adjacents[i];
      var node = graph[adjacent];

      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }

  return graph;
}

function link(from, to) {
  return function (args) {
    return to(from(args));
  };
}

function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;

  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }

  fn.conversion = path;
  return fn;
}

module.exports = function (fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models = Object.keys(graph);

  for (var len = models.length, i = 0; i < len; i++) {
    var toModel = models[i];
    var node = graph[toModel];

    if (node.parent === null) {
      // no possible conversion, or this node is the source model.
      continue;
    }

    conversion[toModel] = wrapConversion(toModel, graph);
  }

  return conversion;
};

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/demo/css/App.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/demo/css/App.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  color: black;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),

/***/ "./node_modules/eventemitter3/index.js":
/*!*********************************************!*\
  !*** ./node_modules/eventemitter3/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */

function Events() {} //
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//


if (Object.create) {
  Events.prototype = Object.create(null); //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //

  if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */


function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */


function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
  return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */


function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */


function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */


EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
      events,
      name;
  if (this._eventsCount === 0) return names;

  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */


EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */


EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */


EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return false;
  var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;

      case 2:
        return listeners.fn.call(listeners.context, a1), true;

      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;

      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;

      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);
          break;

        case 2:
          listeners[i].fn.call(listeners[i].context, a1);
          break;

        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);
          break;

        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);
          break;

        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }
          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return this;

  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    } //
    // Reset the array, or remove it completely if we have no more listeners.
    //


    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
  }

  return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
}; //
// Alias methods names because people roll like that.
//


EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
// Expose the prefix.
//

EventEmitter.prefixed = prefix; //
// Allow `EventEmitter` to be imported as module namespace.
//

EventEmitter.EventEmitter = EventEmitter; //
// Expose the module.
//

if (true) {
  module.exports = EventEmitter;
}

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

/*! https://mths.be/punycode v1.4.1 by @mathias */
;

(function (root) {
  /** Detect free variables */
  var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  var freeModule = ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
  var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  /**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */


  var punycode,

  /** Highest positive signed 32-bit float value */
  maxInt = 2147483647,
      // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      // 0x80
  delimiter = '-',
      // '\x2D'

  /** Regular expressions */
  regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      // unprintable ASCII chars + non-ASCII chars
  regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      // RFC 3490 separators

  /** Error messages */
  errors = {
    'overflow': 'Overflow: input needs wider integers to process',
    'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
    'invalid-input': 'Invalid input'
  },

  /** Convenience shortcuts */
  baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,

  /** Temporary variable */
  key;
  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */

  function error(type) {
    throw new RangeError(errors[type]);
  }
  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */


  function map(array, fn) {
    var length = array.length;
    var result = [];

    while (length--) {
      result[length] = fn(array[length]);
    }

    return result;
  }
  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */


  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';

    if (parts.length > 1) {
      // In email addresses, only the domain name should be punycoded. Leave
      // the local part (i.e. everything up to `@`) intact.
      result = parts[0] + '@';
      string = parts[1];
    } // Avoid `split(regex)` for IE8 compatibility. See #17.


    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */


  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;

    while (counter < length) {
      value = string.charCodeAt(counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // high surrogate, and there is a next character
        extra = string.charCodeAt(counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // low surrogate
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // unmatched surrogate; only append this code unit, in case the next
          // code unit is the high surrogate of a surrogate pair
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }

    return output;
  }
  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */


  function ucs2encode(array) {
    return map(array, function (value) {
      var output = '';

      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }

      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */


  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }

    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }

    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }

    return base;
  }
  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */


  function digitToBasic(digit, flag) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */


  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);

    for (;
    /* no initialization */
    delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }

    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */


  function decode(input) {
    // Don't use UCS-2
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,

    /** Cached calculation results */
    baseMinusT; // Handle the basic code points: let `basic` be the number of input code
    // points before the last delimiter, or `0` if there is none, then copy
    // the first basic code points to the output.

    basic = input.lastIndexOf(delimiter);

    if (basic < 0) {
      basic = 0;
    }

    for (j = 0; j < basic; ++j) {
      // if it's not a basic code point
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }

      output.push(input.charCodeAt(j));
    } // Main decoding loop: start just after the last delimiter if any basic code
    // points were copied; start at the beginning otherwise.


    for (index = basic > 0 ? basic + 1 : 0; index < inputLength;)
    /* no final expression */
    {
      // `index` is the index of the next character to be consumed.
      // Decode a generalized variable-length integer into `delta`,
      // which gets added to `i`. The overflow checking is easier
      // if we increase `i` as we go, then subtract off its starting
      // value at the end to obtain `delta`.
      for (oldi = i, w = 1, k = base;;
      /* no condition */
      k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }

        digit = basicToDigit(input.charCodeAt(index++));

        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }

        i += digit * w;
        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

        if (digit < t) {
          break;
        }

        baseMinusT = base - t;

        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }

        w *= baseMinusT;
      }

      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
      // incrementing `n` each time, so we'll fix that now:

      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }

      n += floor(i / out);
      i %= out; // Insert `n` at position `i` of the output

      output.splice(i++, 0, n);
    }

    return ucs2encode(output);
  }
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */


  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],

    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,

    /** Cached calculation results */
    handledCPCountPlusOne,
        baseMinusT,
        qMinusT; // Convert the input in UCS-2 to Unicode

    input = ucs2decode(input); // Cache the length

    inputLength = input.length; // Initialize the state

    n = initialN;
    delta = 0;
    bias = initialBias; // Handle the basic code points

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }

    handledCPCount = basicLength = output.length; // `handledCPCount` is the number of code points that have been handled;
    // `basicLength` is the number of basic code points.
    // Finish the basic string - if it is not empty - with a delimiter

    if (basicLength) {
      output.push(delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next
      // larger one:
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
      // but guard against overflow


      handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];

        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer
          for (q = delta, k = base;;
          /* no condition */
          k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

            if (q < t) {
              break;
            }

            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }

          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }

      ++delta;
      ++n;
    }

    return output.join('');
  }
  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */


  function toUnicode(input) {
    return mapDomain(input, function (string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */


  function toASCII(input) {
    return mapDomain(input, function (string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  /*--------------------------------------------------------------------------*/

  /** Define the public API */


  punycode = {
    /**
     * A string representing the current Punycode.js version number.
     * @memberOf punycode
     * @type String
     */
    'version': '1.4.1',

    /**
     * An object of methods to convert from JavaScript's internal character
     * representation (UCS-2) to Unicode code points, and back.
     * @see <https://mathiasbynens.be/notes/javascript-encoding>
     * @memberOf punycode
     * @type Object
     */
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  /** Expose `punycode` */
  // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) == 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return punycode;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      // in Node.js, io.js, or RingoJS v0.8.0+
      freeModule.exports = punycode;
    } else {
      // in Narwhal or RingoJS v0.7.0-
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    // in Rhino or a web browser
    root.punycode = punycode;
  }
})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/peerjs-js-binarypack/lib/binarypack.js":
/*!*************************************************************!*\
  !*** ./node_modules/peerjs-js-binarypack/lib/binarypack.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var BufferBuilder = __webpack_require__(/*! ./bufferbuilder */ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js").BufferBuilder;

var binaryFeatures = __webpack_require__(/*! ./bufferbuilder */ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js").binaryFeatures;

var BinaryPack = {
  unpack: function unpack(data) {
    var unpacker = new Unpacker(data);
    return unpacker.unpack();
  },
  pack: function pack(data) {
    var packer = new Packer();
    packer.pack(data);
    var buffer = packer.getBuffer();
    return buffer;
  }
};
module.exports = BinaryPack;

function Unpacker(data) {
  // Data is ArrayBuffer
  this.index = 0;
  this.dataBuffer = data;
  this.dataView = new Uint8Array(this.dataBuffer);
  this.length = this.dataBuffer.byteLength;
}

Unpacker.prototype.unpack = function () {
  var type = this.unpack_uint8();

  if (type < 0x80) {
    return type;
  } else if ((type ^ 0xe0) < 0x20) {
    return (type ^ 0xe0) - 0x20;
  }

  var size;

  if ((size = type ^ 0xa0) <= 0x0f) {
    return this.unpack_raw(size);
  } else if ((size = type ^ 0xb0) <= 0x0f) {
    return this.unpack_string(size);
  } else if ((size = type ^ 0x90) <= 0x0f) {
    return this.unpack_array(size);
  } else if ((size = type ^ 0x80) <= 0x0f) {
    return this.unpack_map(size);
  }

  switch (type) {
    case 0xc0:
      return null;

    case 0xc1:
      return undefined;

    case 0xc2:
      return false;

    case 0xc3:
      return true;

    case 0xca:
      return this.unpack_float();

    case 0xcb:
      return this.unpack_double();

    case 0xcc:
      return this.unpack_uint8();

    case 0xcd:
      return this.unpack_uint16();

    case 0xce:
      return this.unpack_uint32();

    case 0xcf:
      return this.unpack_uint64();

    case 0xd0:
      return this.unpack_int8();

    case 0xd1:
      return this.unpack_int16();

    case 0xd2:
      return this.unpack_int32();

    case 0xd3:
      return this.unpack_int64();

    case 0xd4:
      return undefined;

    case 0xd5:
      return undefined;

    case 0xd6:
      return undefined;

    case 0xd7:
      return undefined;

    case 0xd8:
      size = this.unpack_uint16();
      return this.unpack_string(size);

    case 0xd9:
      size = this.unpack_uint32();
      return this.unpack_string(size);

    case 0xda:
      size = this.unpack_uint16();
      return this.unpack_raw(size);

    case 0xdb:
      size = this.unpack_uint32();
      return this.unpack_raw(size);

    case 0xdc:
      size = this.unpack_uint16();
      return this.unpack_array(size);

    case 0xdd:
      size = this.unpack_uint32();
      return this.unpack_array(size);

    case 0xde:
      size = this.unpack_uint16();
      return this.unpack_map(size);

    case 0xdf:
      size = this.unpack_uint32();
      return this.unpack_map(size);
  }
};

Unpacker.prototype.unpack_uint8 = function () {
  var byte = this.dataView[this.index] & 0xff;
  this.index++;
  return byte;
};

Unpacker.prototype.unpack_uint16 = function () {
  var bytes = this.read(2);
  var uint16 = (bytes[0] & 0xff) * 256 + (bytes[1] & 0xff);
  this.index += 2;
  return uint16;
};

Unpacker.prototype.unpack_uint32 = function () {
  var bytes = this.read(4);
  var uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
  this.index += 4;
  return uint32;
};

Unpacker.prototype.unpack_uint64 = function () {
  var bytes = this.read(8);
  var uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
  this.index += 8;
  return uint64;
};

Unpacker.prototype.unpack_int8 = function () {
  var uint8 = this.unpack_uint8();
  return uint8 < 0x80 ? uint8 : uint8 - (1 << 8);
};

Unpacker.prototype.unpack_int16 = function () {
  var uint16 = this.unpack_uint16();
  return uint16 < 0x8000 ? uint16 : uint16 - (1 << 16);
};

Unpacker.prototype.unpack_int32 = function () {
  var uint32 = this.unpack_uint32();
  return uint32 < Math.pow(2, 31) ? uint32 : uint32 - Math.pow(2, 32);
};

Unpacker.prototype.unpack_int64 = function () {
  var uint64 = this.unpack_uint64();
  return uint64 < Math.pow(2, 63) ? uint64 : uint64 - Math.pow(2, 64);
};

Unpacker.prototype.unpack_raw = function (size) {
  if (this.length < this.index + size) {
    throw new Error('BinaryPackFailure: index is out of range' + ' ' + this.index + ' ' + size + ' ' + this.length);
  }

  var buf = this.dataBuffer.slice(this.index, this.index + size);
  this.index += size; // buf = util.bufferToString(buf);

  return buf;
};

Unpacker.prototype.unpack_string = function (size) {
  var bytes = this.read(size);
  var i = 0;
  var str = '';
  var c;
  var code;

  while (i < size) {
    c = bytes[i];

    if (c < 128) {
      str += String.fromCharCode(c);
      i++;
    } else if ((c ^ 0xc0) < 32) {
      code = (c ^ 0xc0) << 6 | bytes[i + 1] & 63;
      str += String.fromCharCode(code);
      i += 2;
    } else {
      code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
      str += String.fromCharCode(code);
      i += 3;
    }
  }

  this.index += size;
  return str;
};

Unpacker.prototype.unpack_array = function (size) {
  var objects = new Array(size);

  for (var i = 0; i < size; i++) {
    objects[i] = this.unpack();
  }

  return objects;
};

Unpacker.prototype.unpack_map = function (size) {
  var map = {};

  for (var i = 0; i < size; i++) {
    var key = this.unpack();
    var value = this.unpack();
    map[key] = value;
  }

  return map;
};

Unpacker.prototype.unpack_float = function () {
  var uint32 = this.unpack_uint32();
  var sign = uint32 >> 31;
  var exp = (uint32 >> 23 & 0xff) - 127;
  var fraction = uint32 & 0x7fffff | 0x800000;
  return (sign === 0 ? 1 : -1) * fraction * Math.pow(2, exp - 23);
};

Unpacker.prototype.unpack_double = function () {
  var h32 = this.unpack_uint32();
  var l32 = this.unpack_uint32();
  var sign = h32 >> 31;
  var exp = (h32 >> 20 & 0x7ff) - 1023;
  var hfrac = h32 & 0xfffff | 0x100000;
  var frac = hfrac * Math.pow(2, exp - 20) + l32 * Math.pow(2, exp - 52);
  return (sign === 0 ? 1 : -1) * frac;
};

Unpacker.prototype.read = function (length) {
  var j = this.index;

  if (j + length <= this.length) {
    return this.dataView.subarray(j, j + length);
  } else {
    throw new Error('BinaryPackFailure: read index out of range');
  }
};

function Packer() {
  this.bufferBuilder = new BufferBuilder();
}

Packer.prototype.getBuffer = function () {
  return this.bufferBuilder.getBuffer();
};

Packer.prototype.pack = function (value) {
  var type = _typeof(value);

  if (type === 'string') {
    this.pack_string(value);
  } else if (type === 'number') {
    if (Math.floor(value) === value) {
      this.pack_integer(value);
    } else {
      this.pack_double(value);
    }
  } else if (type === 'boolean') {
    if (value === true) {
      this.bufferBuilder.append(0xc3);
    } else if (value === false) {
      this.bufferBuilder.append(0xc2);
    }
  } else if (type === 'undefined') {
    this.bufferBuilder.append(0xc0);
  } else if (type === 'object') {
    if (value === null) {
      this.bufferBuilder.append(0xc0);
    } else {
      var constructor = value.constructor;

      if (constructor == Array) {
        this.pack_array(value);
      } else if (constructor == Blob || constructor == File || value instanceof Blob || value instanceof File) {
        this.pack_bin(value);
      } else if (constructor == ArrayBuffer) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value));
        } else {
          this.pack_bin(value);
        }
      } else if ('BYTES_PER_ELEMENT' in value) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value.buffer));
        } else {
          this.pack_bin(value.buffer);
        }
      } else if (constructor == Object || constructor.toString().startsWith('class')) {
        this.pack_object(value);
      } else if (constructor == Date) {
        this.pack_string(value.toString());
      } else if (typeof value.toBinaryPack === 'function') {
        this.bufferBuilder.append(value.toBinaryPack());
      } else {
        throw new Error('Type "' + constructor.toString() + '" not yet supported');
      }
    }
  } else {
    throw new Error('Type "' + type + '" not yet supported');
  }

  this.bufferBuilder.flush();
};

Packer.prototype.pack_bin = function (blob) {
  var length = blob.length || blob.byteLength || blob.size;

  if (length <= 0x0f) {
    this.pack_uint8(0xa0 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xda);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdb);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }

  this.bufferBuilder.append(blob);
};

Packer.prototype.pack_string = function (str) {
  var length = utf8Length(str);

  if (length <= 0x0f) {
    this.pack_uint8(0xb0 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xd8);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xd9);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }

  this.bufferBuilder.append(str);
};

Packer.prototype.pack_array = function (ary) {
  var length = ary.length;

  if (length <= 0x0f) {
    this.pack_uint8(0x90 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xdc);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdd);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }

  for (var i = 0; i < length; i++) {
    this.pack(ary[i]);
  }
};

Packer.prototype.pack_integer = function (num) {
  if (num >= -0x20 && num <= 0x7f) {
    this.bufferBuilder.append(num & 0xff);
  } else if (num >= 0x00 && num <= 0xff) {
    this.bufferBuilder.append(0xcc);
    this.pack_uint8(num);
  } else if (num >= -0x80 && num <= 0x7f) {
    this.bufferBuilder.append(0xd0);
    this.pack_int8(num);
  } else if (num >= 0x0000 && num <= 0xffff) {
    this.bufferBuilder.append(0xcd);
    this.pack_uint16(num);
  } else if (num >= -0x8000 && num <= 0x7fff) {
    this.bufferBuilder.append(0xd1);
    this.pack_int16(num);
  } else if (num >= 0x00000000 && num <= 0xffffffff) {
    this.bufferBuilder.append(0xce);
    this.pack_uint32(num);
  } else if (num >= -0x80000000 && num <= 0x7fffffff) {
    this.bufferBuilder.append(0xd2);
    this.pack_int32(num);
  } else if (num >= -0x8000000000000000 && num <= 0x7FFFFFFFFFFFFFFF) {
    this.bufferBuilder.append(0xd3);
    this.pack_int64(num);
  } else if (num >= 0x0000000000000000 && num <= 0xFFFFFFFFFFFFFFFF) {
    this.bufferBuilder.append(0xcf);
    this.pack_uint64(num);
  } else {
    throw new Error('Invalid integer');
  }
};

Packer.prototype.pack_double = function (num) {
  var sign = 0;

  if (num < 0) {
    sign = 1;
    num = -num;
  }

  var exp = Math.floor(Math.log(num) / Math.LN2);
  var frac0 = num / Math.pow(2, exp) - 1;
  var frac1 = Math.floor(frac0 * Math.pow(2, 52));
  var b32 = Math.pow(2, 32);
  var h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 0x0fffff;
  var l32 = frac1 % b32;
  this.bufferBuilder.append(0xcb);
  this.pack_int32(h32);
  this.pack_int32(l32);
};

Packer.prototype.pack_object = function (obj) {
  var keys = Object.keys(obj);
  var length = keys.length;

  if (length <= 0x0f) {
    this.pack_uint8(0x80 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xde);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdf);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this.pack(prop);
      this.pack(obj[prop]);
    }
  }
};

Packer.prototype.pack_uint8 = function (num) {
  this.bufferBuilder.append(num);
};

Packer.prototype.pack_uint16 = function (num) {
  this.bufferBuilder.append(num >> 8);
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_uint32 = function (num) {
  var n = num & 0xffffffff;
  this.bufferBuilder.append((n & 0xff000000) >>> 24);
  this.bufferBuilder.append((n & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((n & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(n & 0x000000ff);
};

Packer.prototype.pack_uint64 = function (num) {
  var high = num / Math.pow(2, 32);
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(high & 0x000000ff);
  this.bufferBuilder.append((low & 0xff000000) >>> 24);
  this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(low & 0x000000ff);
};

Packer.prototype.pack_int8 = function (num) {
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_int16 = function (num) {
  this.bufferBuilder.append((num & 0xff00) >> 8);
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_int32 = function (num) {
  this.bufferBuilder.append(num >>> 24 & 0xff);
  this.bufferBuilder.append((num & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((num & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(num & 0x000000ff);
};

Packer.prototype.pack_int64 = function (num) {
  var high = Math.floor(num / Math.pow(2, 32));
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(high & 0x000000ff);
  this.bufferBuilder.append((low & 0xff000000) >>> 24);
  this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
  this.bufferBuilder.append(low & 0x000000ff);
};

function _utf8Replace(m) {
  var code = m.charCodeAt(0);
  if (code <= 0x7ff) return '00';
  if (code <= 0xffff) return '000';
  if (code <= 0x1fffff) return '0000';
  if (code <= 0x3ffffff) return '00000';
  return '000000';
}

function utf8Length(str) {
  if (str.length > 600) {
    // Blob method faster for large strings
    return new Blob([str]).size;
  } else {
    return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
  }
}

/***/ }),

/***/ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js":
/*!****************************************************************!*\
  !*** ./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var binaryFeatures = {};

binaryFeatures.useBlobBuilder = function () {
  try {
    new Blob([]);
    return false;
  } catch (e) {
    return true;
  }
}();

binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && function () {
  try {
    return new Blob([new Uint8Array([])]).size === 0;
  } catch (e) {
    return true;
  }
}();

module.exports.binaryFeatures = binaryFeatures;
var BlobBuilder = module.exports.BlobBuilder;

if (typeof window !== 'undefined') {
  BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
}

function BufferBuilder() {
  this._pieces = [];
  this._parts = [];
}

BufferBuilder.prototype.append = function (data) {
  if (typeof data === 'number') {
    this._pieces.push(data);
  } else {
    this.flush();

    this._parts.push(data);
  }
};

BufferBuilder.prototype.flush = function () {
  if (this._pieces.length > 0) {
    var buf = new Uint8Array(this._pieces);

    if (!binaryFeatures.useArrayBufferView) {
      buf = buf.buffer;
    }

    this._parts.push(buf);

    this._pieces = [];
  }
};

BufferBuilder.prototype.getBuffer = function () {
  this.flush();

  if (binaryFeatures.useBlobBuilder) {
    var builder = new BlobBuilder();

    for (var i = 0, ii = this._parts.length; i < ii; i++) {
      builder.append(this._parts[i]);
    }

    return builder.getBlob();
  } else {
    return new Blob(this._parts);
  }
};

module.exports.BufferBuilder = BufferBuilder;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (_typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (_typeof(obj) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");

/***/ }),

/***/ "./node_modules/react-dev-utils/formatWebpackMessages.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-dev-utils/formatWebpackMessages.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var chalk = __webpack_require__(/*! chalk */ "./node_modules/react-dev-utils/node_modules/chalk/index.js");

var friendlySyntaxErrorLabel = 'Syntax error:';

function isLikelyASyntaxError(message) {
  return message.indexOf(friendlySyntaxErrorLabel) !== -1;
} // Cleans up webpack error messages.


function formatMessage(message) {
  var lines = message.split('\n'); // Strip Webpack-added headers off errors/warnings
  // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js

  lines = lines.filter(function (line) {
    return !/Module [A-z ]+\(from/.test(line);
  }); // Transform parsing error into syntax error
  // TODO: move this to our ESLint formatter?

  lines = lines.map(function (line) {
    var parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);

    if (!parsingError) {
      return line;
    }

    var _parsingError = _slicedToArray(parsingError, 4),
        errorLine = _parsingError[1],
        errorColumn = _parsingError[2],
        errorMessage = _parsingError[3];

    return "".concat(friendlySyntaxErrorLabel, " ").concat(errorMessage, " (").concat(errorLine, ":").concat(errorColumn, ")");
  });
  message = lines.join('\n'); // Smoosh syntax errors (commonly found in CSS)

  message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "".concat(friendlySyntaxErrorLabel, " $3 ($1:$2)\n")); // Clean up export errors

  message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
  message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
  message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
  lines = message.split('\n'); // Remove leading newline

  if (lines.length > 2 && lines[1].trim() === '') {
    lines.splice(1, 1);
  } // Clean up file name


  lines[0] = lines[0].replace(/^(.*) \d+:\d+-\d+$/, '$1'); // Cleans up verbose "module not found" messages for files and packages.

  if (lines[1] && lines[1].indexOf('Module not found: ') === 0) {
    lines = [lines[0], lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:')];
  } // Add helpful message for users trying to use Sass for the first time


  if (lines[1] && lines[1].match(/Cannot find module.+node-sass/)) {
    lines[1] = 'To import Sass files, you first need to install node-sass.\n';
    lines[1] += 'Run `npm install node-sass` or `yarn add node-sass` inside your workspace.';
  }

  lines[0] = chalk.inverse(lines[0]);
  message = lines.join('\n'); // Internal stacks are generally useless so we strip them... with the
  // exception of stacks containing `webpack:` because they're normally
  // from user code generated by Webpack. For more information see
  // https://github.com/facebook/create-react-app/pull/1050

  message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, ''); // at ... ...:x:y

  message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, ''); // at <anonymous>

  lines = message.split('\n'); // Remove duplicated newlines

  lines = lines.filter(function (line, index, arr) {
    return index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim();
  }); // Reassemble the message

  message = lines.join('\n');
  return message.trim();
}

function formatWebpackMessages(json) {
  var formattedErrors = json.errors.map(function (message) {
    return formatMessage(message, true);
  });
  var formattedWarnings = json.warnings.map(function (message) {
    return formatMessage(message, false);
  });
  var result = {
    errors: formattedErrors,
    warnings: formattedWarnings
  };

  if (result.errors.some(isLikelyASyntaxError)) {
    // If there are any syntax errors, show just them.
    result.errors = result.errors.filter(isLikelyASyntaxError);
  }

  return result;
}

module.exports = formatWebpackMessages;

/***/ }),

/***/ "./node_modules/react-dev-utils/launchEditorEndpoint.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-dev-utils/launchEditorEndpoint.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 // TODO: we might want to make this injectable to support DEV-time non-root URLs.

module.exports = '/__open-stack-frame-in-editor';

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/ansi-regex/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/ansi-regex/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (options) {
  options = Object.assign({
    onlyFirst: false
  }, options);
  var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
  return new RegExp(pattern, options.onlyFirst ? undefined : 'g');
};

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/ansi-styles/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/ansi-styles/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var colorConvert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var wrapAnsi16 = function wrapAnsi16(fn, offset) {
  return function () {
    var code = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(code + offset, "m");
  };
};

var wrapAnsi256 = function wrapAnsi256(fn, offset) {
  return function () {
    var code = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(38 + offset, ";5;").concat(code, "m");
  };
};

var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
  return function () {
    var rgb = fn.apply(colorConvert, arguments);
    return "\x1B[".concat(38 + offset, ";2;").concat(rgb[0], ";").concat(rgb[1], ";").concat(rgb[2], "m");
  };
};

function assembleStyles() {
  var codes = new Map();
  var styles = {
    modifier: {
      reset: [0, 0],
      // 21 isn't widely supported and 22 does the same thing
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      // Bright color
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      // Bright color
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  }; // Fix humans

  styles.color.grey = styles.color.gray;

  for (var _i = 0, _Object$keys = Object.keys(styles); _i < _Object$keys.length; _i++) {
    var groupName = _Object$keys[_i];
    var group = styles[groupName];

    for (var _i3 = 0, _Object$keys3 = Object.keys(group); _i3 < _Object$keys3.length; _i3++) {
      var styleName = _Object$keys3[_i3];
      var style = group[styleName];
      styles[styleName] = {
        open: "\x1B[".concat(style[0], "m"),
        close: "\x1B[".concat(style[1], "m")
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }

    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
    Object.defineProperty(styles, 'codes', {
      value: codes,
      enumerable: false
    });
  }

  var ansi2ansi = function ansi2ansi(n) {
    return n;
  };

  var rgb2rgb = function rgb2rgb(r, g, b) {
    return [r, g, b];
  };

  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = {
    ansi: wrapAnsi16(ansi2ansi, 0)
  };
  styles.color.ansi256 = {
    ansi256: wrapAnsi256(ansi2ansi, 0)
  };
  styles.color.ansi16m = {
    rgb: wrapAnsi16m(rgb2rgb, 0)
  };
  styles.bgColor.ansi = {
    ansi: wrapAnsi16(ansi2ansi, 10)
  };
  styles.bgColor.ansi256 = {
    ansi256: wrapAnsi256(ansi2ansi, 10)
  };
  styles.bgColor.ansi16m = {
    rgb: wrapAnsi16m(rgb2rgb, 10)
  };

  for (var _i2 = 0, _Object$keys2 = Object.keys(colorConvert); _i2 < _Object$keys2.length; _i2++) {
    var key = _Object$keys2[_i2];

    if (_typeof(colorConvert[key]) !== 'object') {
      continue;
    }

    var suite = colorConvert[key];

    if (key === 'ansi16') {
      key = 'ansi';
    }

    if ('ansi16' in suite) {
      styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
      styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
    }

    if ('ansi256' in suite) {
      styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
      styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
    }

    if ('rgb' in suite) {
      styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
      styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
    }
  }

  return styles;
} // Make the export immutable


Object.defineProperty(module, 'exports', {
  enumerable: true,
  get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/chalk/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/chalk/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var escapeStringRegexp = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js");

var ansiStyles = __webpack_require__(/*! ansi-styles */ "./node_modules/react-dev-utils/node_modules/ansi-styles/index.js");

var stdoutColor = __webpack_require__(/*! supports-color */ "./node_modules/react-dev-utils/node_modules/supports-color/browser.js").stdout;

var template = __webpack_require__(/*! ./templates.js */ "./node_modules/react-dev-utils/node_modules/chalk/templates.js");

var isSimpleWindowsTerm = process.platform === 'win32' && !(Object({"NODE_ENV":"production","PUBLIC_URL":""}).TERM || '').toLowerCase().startsWith('xterm'); // `supportsColor.level` → `ansiStyles.color[name]` mapping

var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m']; // `color-convert` models to exclude from the Chalk API due to conflicts and such

var skipModels = new Set(['gray']);
var styles = Object.create(null);

function applyOptions(obj, options) {
  options = options || {}; // Detect level if not set manually

  var scLevel = stdoutColor ? stdoutColor.level : 0;
  obj.level = options.level === undefined ? scLevel : options.level;
  obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
}

function Chalk(options) {
  // We check for this.template here since calling `chalk.constructor()`
  // by itself will have a `this` of a previously constructed chalk object
  if (!this || !(this instanceof Chalk) || this.template) {
    var chalk = {};
    applyOptions(chalk, options);

    chalk.template = function () {
      var args = [].slice.call(arguments);
      return chalkTag.apply(null, [chalk.template].concat(args));
    };

    Object.setPrototypeOf(chalk, Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = Chalk;
    return chalk.template;
  }

  applyOptions(this, options);
} // Use bright blue on Windows as the normal blue color is illegible


if (isSimpleWindowsTerm) {
  ansiStyles.blue.open = "\x1B[94m";
}

var _loop = function _loop() {
  var key = _Object$keys[_i];
  ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
  styles[key] = {
    get: function get() {
      var codes = ansiStyles[key];
      return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
    }
  };
};

for (var _i = 0, _Object$keys = Object.keys(ansiStyles); _i < _Object$keys.length; _i++) {
  _loop();
}

styles.visible = {
  get: function get() {
    return build.call(this, this._styles || [], true, 'visible');
  }
};
ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');

var _loop2 = function _loop2() {
  var model = _Object$keys2[_i2];

  if (skipModels.has(model)) {
    return "continue";
  }

  styles[model] = {
    get: function get() {
      var level = this.level;
      return function () {
        var open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
        var codes = {
          open: open,
          close: ansiStyles.color.close,
          closeRe: ansiStyles.color.closeRe
        };
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
      };
    }
  };
};

for (var _i2 = 0, _Object$keys2 = Object.keys(ansiStyles.color.ansi); _i2 < _Object$keys2.length; _i2++) {
  var _ret = _loop2();

  if (_ret === "continue") continue;
}

ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');

var _loop3 = function _loop3() {
  var model = _Object$keys3[_i3];

  if (skipModels.has(model)) {
    return "continue";
  }

  var bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
  styles[bgModel] = {
    get: function get() {
      var level = this.level;
      return function () {
        var open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
        var codes = {
          open: open,
          close: ansiStyles.bgColor.close,
          closeRe: ansiStyles.bgColor.closeRe
        };
        return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
      };
    }
  };
};

for (var _i3 = 0, _Object$keys3 = Object.keys(ansiStyles.bgColor.ansi); _i3 < _Object$keys3.length; _i3++) {
  var _ret2 = _loop3();

  if (_ret2 === "continue") continue;
}

var proto = Object.defineProperties(function () {}, styles);

function build(_styles, _empty, key) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };

  builder._styles = _styles;
  builder._empty = _empty;
  var self = this;
  Object.defineProperty(builder, 'level', {
    enumerable: true,
    get: function get() {
      return self.level;
    },
    set: function set(level) {
      self.level = level;
    }
  });
  Object.defineProperty(builder, 'enabled', {
    enumerable: true,
    get: function get() {
      return self.enabled;
    },
    set: function set(enabled) {
      self.enabled = enabled;
    }
  }); // See below for fix regarding invisible grey/dim combination on Windows

  builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey'; // `__proto__` is used because we must return a function, but there is
  // no way to create a function with a different prototype

  builder.__proto__ = proto; // eslint-disable-line no-proto

  return builder;
}

function applyStyle() {
  // Support varags, but simply cast to string in case there's only one arg
  var args = arguments;
  var argsLen = args.length;
  var str = String(arguments[0]);

  if (argsLen === 0) {
    return '';
  }

  if (argsLen > 1) {
    // Don't slice `arguments`, it prevents V8 optimizations
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!this.enabled || this.level <= 0 || !str) {
    return this._empty ? '' : str;
  } // Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
  // see https://github.com/chalk/chalk/issues/58
  // If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.


  var originalDim = ansiStyles.dim.open;

  if (isSimpleWindowsTerm && this.hasGrey) {
    ansiStyles.dim.open = '';
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = this._styles.slice().reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var code = _step.value;
      // Replace any instances already present with a re-opening code
      // otherwise only the part of the string until said closing code
      // will be colored, and the rest will simply be 'plain'.
      str = code.open + str.replace(code.closeRe, code.open) + code.close; // Close the styling before a linebreak and reopen
      // after next line to fix a bleed issue on macOS
      // https://github.com/chalk/chalk/pull/92

      str = str.replace(/\r?\n/g, "".concat(code.close, "$&").concat(code.open));
    } // Reset the original `dim` if we changed it to work around the Windows dimmed gray issue

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ansiStyles.dim.open = originalDim;
  return str;
}

function chalkTag(chalk, strings) {
  if (!Array.isArray(strings)) {
    // If chalk() was called by itself or with a string,
    // return the string itself as a string.
    return [].slice.call(arguments, 1).join(' ');
  }

  var args = [].slice.call(arguments, 2);
  var parts = [strings.raw[0]];

  for (var i = 1; i < strings.length; i++) {
    parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
    parts.push(String(strings.raw[i]));
  }

  return template(chalk, parts.join(''));
}

Object.defineProperties(Chalk.prototype, styles);
module.exports = Chalk(); // eslint-disable-line new-cap

module.exports.supportsColor = stdoutColor;
module.exports.default = module.exports; // For TypeScript
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/chalk/templates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/chalk/templates.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
var ESCAPES = new Map([['n', '\n'], ['r', '\r'], ['t', '\t'], ['b', '\b'], ['f', '\f'], ['v', '\v'], ['0', '\0'], ['\\', '\\'], ['e', "\x1B"], ['a', "\x07"]]);

function unescape(c) {
  if (c[0] === 'u' && c.length === 5 || c[0] === 'x' && c.length === 3) {
    return String.fromCharCode(parseInt(c.slice(1), 16));
  }

  return ESCAPES.get(c) || c;
}

function parseArguments(name, args) {
  var results = [];
  var chunks = args.trim().split(/\s*,\s*/g);
  var matches;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = chunks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var chunk = _step.value;

      if (!isNaN(chunk)) {
        results.push(Number(chunk));
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, function (m, escape, chr) {
          return escape ? unescape(escape) : chr;
        }));
      } else {
        throw new Error("Invalid Chalk template style argument: ".concat(chunk, " (in style '").concat(name, "')"));
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return results;
}

function parseStyle(style) {
  STYLE_REGEX.lastIndex = 0;
  var results = [];
  var matches;

  while ((matches = STYLE_REGEX.exec(style)) !== null) {
    var name = matches[1];

    if (matches[2]) {
      var args = parseArguments(name, matches[2]);
      results.push([name].concat(args));
    } else {
      results.push([name]);
    }
  }

  return results;
}

function buildStyle(chalk, styles) {
  var enabled = {};
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = styles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var layer = _step2.value;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = layer.styles[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var style = _step3.value;
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var current = chalk;

  for (var _i = 0, _Object$keys = Object.keys(enabled); _i < _Object$keys.length; _i++) {
    var styleName = _Object$keys[_i];

    if (Array.isArray(enabled[styleName])) {
      if (!(styleName in current)) {
        throw new Error("Unknown Chalk style: ".concat(styleName));
      }

      if (enabled[styleName].length > 0) {
        current = current[styleName].apply(current, enabled[styleName]);
      } else {
        current = current[styleName];
      }
    }
  }

  return current;
}

module.exports = function (chalk, tmp) {
  var styles = [];
  var chunks = [];
  var chunk = []; // eslint-disable-next-line max-params

  tmp.replace(TEMPLATE_REGEX, function (m, escapeChar, inverse, style, close, chr) {
    if (escapeChar) {
      chunk.push(unescape(escapeChar));
    } else if (style) {
      var str = chunk.join('');
      chunk = [];
      chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
      styles.push({
        inverse: inverse,
        styles: parseStyle(style)
      });
    } else if (close) {
      if (styles.length === 0) {
        throw new Error('Found extraneous } in Chalk template literal');
      }

      chunks.push(buildStyle(chalk, styles)(chunk.join('')));
      chunk = [];
      styles.pop();
    } else {
      chunk.push(chr);
    }
  });
  chunks.push(chunk.join(''));

  if (styles.length > 0) {
    var errMsg = "Chalk template literal is missing ".concat(styles.length, " closing bracket").concat(styles.length === 1 ? '' : 's', " (`}`)");
    throw new Error(errMsg);
  }

  return chunks.join('');
};

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/strip-ansi/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/strip-ansi/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/react-dev-utils/node_modules/ansi-regex/index.js");

var stripAnsi = function stripAnsi(string) {
  return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
};

module.exports = stripAnsi;
module.exports.default = stripAnsi;

/***/ }),

/***/ "./node_modules/react-dev-utils/node_modules/supports-color/browser.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-dev-utils/node_modules/supports-color/browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  stdout: false,
  stderr: false
};

/***/ }),

/***/ "./node_modules/react-dev-utils/webpackHotDevClient.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-dev-utils/webpackHotDevClient.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 // This alternative WebpackDevServer combines the functionality of:
// https://github.com/webpack/webpack-dev-server/blob/webpack-1/client/index.js
// https://github.com/webpack/webpack/blob/webpack-1/hot/dev-server.js
// It only supports their simplest configuration (hot updates on same server).
// It makes some opinionated choices on top, like adding a syntax error overlay
// that looks similar to our console output. The error overlay is inspired by:
// https://github.com/glenjamin/webpack-hot-middleware

var stripAnsi = __webpack_require__(/*! strip-ansi */ "./node_modules/react-dev-utils/node_modules/strip-ansi/index.js");

var url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var launchEditorEndpoint = __webpack_require__(/*! ./launchEditorEndpoint */ "./node_modules/react-dev-utils/launchEditorEndpoint.js");

var formatWebpackMessages = __webpack_require__(/*! ./formatWebpackMessages */ "./node_modules/react-dev-utils/formatWebpackMessages.js");

var ErrorOverlay = __webpack_require__(/*! react-error-overlay */ "./node_modules/react-error-overlay/lib/index.js");

ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
  // Keep this sync with errorOverlayMiddleware.js
  fetch(launchEditorEndpoint + '?fileName=' + window.encodeURIComponent(errorLocation.fileName) + '&lineNumber=' + window.encodeURIComponent(errorLocation.lineNumber || 1) + '&colNumber=' + window.encodeURIComponent(errorLocation.colNumber || 1));
}); // We need to keep track of if there has been a runtime error.
// Essentially, we cannot guarantee application state was not corrupted by the
// runtime error. To prevent confusing behavior, we forcibly reload the entire
// application. This is handled below when we are notified of a compile (code
// change).
// See https://github.com/facebook/create-react-app/issues/3096

var hadRuntimeError = false;
ErrorOverlay.startReportingRuntimeErrors({
  onError: function onError() {
    hadRuntimeError = true;
  },
  filename: '/static/js/bundle.js'
});

if ( true && typeof module.hot.dispose === 'function') {
  module.hot.dispose(function () {
    // TODO: why do we need this?
    ErrorOverlay.stopReportingRuntimeErrors();
  });
} // Connect to WebpackDevServer via a socket.


var connection = new WebSocket(url.format({
  protocol: 'ws',
  hostname: window.location.hostname,
  port: window.location.port,
  // Hardcoded in WebpackDevServer
  pathname: '/sockjs-node'
})); // Unlike WebpackDevServer client, we won't try to reconnect
// to avoid spamming the console. Disconnect usually happens
// when developer stops the server.

connection.onclose = function () {
  if (typeof console !== 'undefined' && typeof console.info === 'function') {
    console.info('The development server has disconnected.\nRefresh the page if necessary.');
  }
}; // Remember some state related to hot module replacement.


var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;

function clearOutdatedErrors() {
  // Clean up outdated compile errors, if any.
  if (typeof console !== 'undefined' && typeof console.clear === 'function') {
    if (hasCompileErrors) {
      console.clear();
    }
  }
} // Successful compilation.


function handleSuccess() {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false; // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onHotUpdateSuccess() {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      tryDismissErrorOverlay();
    });
  }
} // Compilation with warnings (e.g. ESLint).


function handleWarnings(warnings) {
  clearOutdatedErrors();
  var isHotUpdate = !isFirstCompilation;
  isFirstCompilation = false;
  hasCompileErrors = false;

  function printWarnings() {
    // Print warnings to the console.
    var formatted = formatWebpackMessages({
      warnings: warnings,
      errors: []
    });

    if (typeof console !== 'undefined' && typeof console.warn === 'function') {
      for (var i = 0; i < formatted.warnings.length; i++) {
        if (i === 5) {
          console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
          break;
        }

        console.warn(stripAnsi(formatted.warnings[i]));
      }
    }
  }

  printWarnings(); // Attempt to apply hot updates or reload.

  if (isHotUpdate) {
    tryApplyUpdates(function onSuccessfulHotUpdate() {
      // Only dismiss it when we're sure it's a hot update.
      // Otherwise it would flicker right before the reload.
      tryDismissErrorOverlay();
    });
  }
} // Compilation with errors (e.g. syntax error or missing modules).


function handleErrors(errors) {
  clearOutdatedErrors();
  isFirstCompilation = false;
  hasCompileErrors = true; // "Massage" webpack messages.

  var formatted = formatWebpackMessages({
    errors: errors,
    warnings: []
  }); // Only show the first error.

  ErrorOverlay.reportBuildError(formatted.errors[0]); // Also log them to the console.

  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    for (var i = 0; i < formatted.errors.length; i++) {
      console.error(stripAnsi(formatted.errors[i]));
    }
  } // Do not attempt to reload now.
  // We will reload on next success instead.

}

function tryDismissErrorOverlay() {
  if (!hasCompileErrors) {
    ErrorOverlay.dismissBuildError();
  }
} // There is a newer version of the code available.


function handleAvailableHash(hash) {
  // Update last known compilation hash.
  mostRecentCompilationHash = hash;
} // Handle messages from the server.


connection.onmessage = function (e) {
  var message = JSON.parse(e.data);

  switch (message.type) {
    case 'hash':
      handleAvailableHash(message.data);
      break;

    case 'still-ok':
    case 'ok':
      handleSuccess();
      break;

    case 'content-changed':
      // Triggered when a file from `contentBase` changed.
      window.location.reload();
      break;

    case 'warnings':
      handleWarnings(message.data);
      break;

    case 'errors':
      handleErrors(message.data);
      break;

    default: // Do nothing.

  }
}; // Is there a newer version of this code available?


function isUpdateAvailable() {
  /* globals __webpack_hash__ */
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.
  return mostRecentCompilationHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // Attempt to update code on the fly, fall back to a hard reload.


function tryApplyUpdates(onHotUpdateSuccess) {
  if (false) {}

  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  function handleApplyUpdates(err, updatedModules) {
    if (err || !updatedModules || hadRuntimeError) {
      window.location.reload();
      return;
    }

    if (typeof onHotUpdateSuccess === 'function') {
      // Maybe we want to do something.
      onHotUpdateSuccess();
    }

    if (isUpdateAvailable()) {
      // While we were updating, there was a new update! Do it again.
      tryApplyUpdates();
    }
  } // https://webpack.github.io/docs/hot-module-replacement.html#check


  var result = module.hot.check(
  /* autoApply */
  true, handleApplyUpdates); // // Webpack 2 returns a Promise instead of invoking a callback

  if (result && result.then) {
    result.then(function (updatedModules) {
      handleApplyUpdates(null, updatedModules);
    }, function (err) {
      handleApplyUpdates(err, null);
    });
  }
}

/***/ }),

/***/ "./node_modules/react-error-overlay/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-error-overlay/lib/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var u = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var u in e) {
        n.d(r, u, function (t) {
          return e[t];
        }.bind(null, u));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 16);
  }([function (e, t, n) {
    e.exports = n(9);
  }, function (e, t) {
    t.getArg = function (e, t, n) {
      if (t in e) return e[t];
      if (3 === arguments.length) return n;
      throw new Error('"' + t + '" is a required argument.');
    };

    var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
        r = /^data:.+\,.+$/;

    function u(e) {
      var t = e.match(n);
      return t ? {
        scheme: t[1],
        auth: t[2],
        host: t[3],
        port: t[4],
        path: t[5]
      } : null;
    }

    function o(e) {
      var t = "";
      return e.scheme && (t += e.scheme + ":"), t += "//", e.auth && (t += e.auth + "@"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += e.path), t;
    }

    function i(e) {
      var n = e,
          r = u(e);

      if (r) {
        if (!r.path) return e;
        n = r.path;
      }

      for (var i, a = t.isAbsolute(n), l = n.split(/\/+/), c = 0, s = l.length - 1; s >= 0; s--) {
        "." === (i = l[s]) ? l.splice(s, 1) : ".." === i ? c++ : c > 0 && ("" === i ? (l.splice(s + 1, c), c = 0) : (l.splice(s, 2), c--));
      }

      return "" === (n = l.join("/")) && (n = a ? "/" : "."), r ? (r.path = n, o(r)) : n;
    }

    t.urlParse = u, t.urlGenerate = o, t.normalize = i, t.join = function (e, t) {
      "" === e && (e = "."), "" === t && (t = ".");
      var n = u(t),
          a = u(e);
      if (a && (e = a.path || "/"), n && !n.scheme) return a && (n.scheme = a.scheme), o(n);
      if (n || t.match(r)) return t;
      if (a && !a.host && !a.path) return a.host = t, o(a);
      var l = "/" === t.charAt(0) ? t : i(e.replace(/\/+$/, "") + "/" + t);
      return a ? (a.path = l, o(a)) : l;
    }, t.isAbsolute = function (e) {
      return "/" === e.charAt(0) || !!e.match(n);
    }, t.relative = function (e, t) {
      "" === e && (e = "."), e = e.replace(/\/$/, "");

      for (var n = 0; 0 !== t.indexOf(e + "/");) {
        var r = e.lastIndexOf("/");
        if (r < 0) return t;
        if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) return t;
        ++n;
      }

      return Array(n + 1).join("../") + t.substr(e.length + 1);
    };
    var a = !("__proto__" in Object.create(null));

    function l(e) {
      return e;
    }

    function c(e) {
      if (!e) return !1;
      var t = e.length;
      if (t < 9) return !1;
      if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;

      for (var n = t - 10; n >= 0; n--) {
        if (36 !== e.charCodeAt(n)) return !1;
      }

      return !0;
    }

    function s(e, t) {
      return e === t ? 0 : e > t ? 1 : -1;
    }

    t.toSetString = a ? l : function (e) {
      return c(e) ? "$" + e : e;
    }, t.fromSetString = a ? l : function (e) {
      return c(e) ? e.slice(1) : e;
    }, t.compareByOriginalPositions = function (e, t, n) {
      var r = e.source - t.source;
      return 0 !== r ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) || n ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) ? r : 0 !== (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name;
    }, t.compareByGeneratedPositionsDeflated = function (e, t, n) {
      var r = e.generatedLine - t.generatedLine;
      return 0 !== r ? r : 0 !== (r = e.generatedColumn - t.generatedColumn) || n ? r : 0 !== (r = e.source - t.source) ? r : 0 !== (r = e.originalLine - t.originalLine) ? r : 0 !== (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name;
    }, t.compareByGeneratedPositionsInflated = function (e, t) {
      var n = e.generatedLine - t.generatedLine;
      return 0 !== n ? n : 0 !== (n = e.generatedColumn - t.generatedColumn) ? n : 0 !== (n = s(e.source, t.source)) ? n : 0 !== (n = e.originalLine - t.originalLine) ? n : 0 !== (n = e.originalColumn - t.originalColumn) ? n : s(e.name, t.name);
    };
  }, function (e, t) {
    function n(e, t) {
      for (var n = 0, r = e.length - 1; r >= 0; r--) {
        var u = e[r];
        "." === u ? e.splice(r, 1) : ".." === u ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
      }

      if (t) for (; n--; n) {
        e.unshift("..");
      }
      return e;
    }

    function r(e, t) {
      if (e.filter) return e.filter(t);

      for (var n = [], r = 0; r < e.length; r++) {
        t(e[r], r, e) && n.push(e[r]);
      }

      return n;
    }

    t.resolve = function () {
      for (var e = "", t = !1, u = arguments.length - 1; u >= -1 && !t; u--) {
        var o = u >= 0 ? arguments[u] : process.cwd();
        if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
        o && (e = o + "/" + e, t = "/" === o.charAt(0));
      }

      return (t ? "/" : "") + (e = n(r(e.split("/"), function (e) {
        return !!e;
      }), !t).join("/")) || ".";
    }, t.normalize = function (e) {
      var o = t.isAbsolute(e),
          i = "/" === u(e, -1);
      return (e = n(r(e.split("/"), function (e) {
        return !!e;
      }), !o).join("/")) || o || (e = "."), e && i && (e += "/"), (o ? "/" : "") + e;
    }, t.isAbsolute = function (e) {
      return "/" === e.charAt(0);
    }, t.join = function () {
      var e = Array.prototype.slice.call(arguments, 0);
      return t.normalize(r(e, function (e, t) {
        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
        return e;
      }).join("/"));
    }, t.relative = function (e, n) {
      function r(e) {
        for (var t = 0; t < e.length && "" === e[t]; t++) {
          ;
        }

        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) {
          ;
        }

        return t > n ? [] : e.slice(t, n - t + 1);
      }

      e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);

      for (var u = r(e.split("/")), o = r(n.split("/")), i = Math.min(u.length, o.length), a = i, l = 0; l < i; l++) {
        if (u[l] !== o[l]) {
          a = l;
          break;
        }
      }

      var c = [];

      for (l = a; l < u.length; l++) {
        c.push("..");
      }

      return (c = c.concat(o.slice(a))).join("/");
    }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) {
      if ("string" != typeof e && (e += ""), 0 === e.length) return ".";

      for (var t = e.charCodeAt(0), n = 47 === t, r = -1, u = !0, o = e.length - 1; o >= 1; --o) {
        if (47 === (t = e.charCodeAt(o))) {
          if (!u) {
            r = o;
            break;
          }
        } else u = !1;
      }

      return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
    }, t.basename = function (e, t) {
      var n = function (e) {
        "string" != typeof e && (e += "");
        var t,
            n = 0,
            r = -1,
            u = !0;

        for (t = e.length - 1; t >= 0; --t) {
          if (47 === e.charCodeAt(t)) {
            if (!u) {
              n = t + 1;
              break;
            }
          } else -1 === r && (u = !1, r = t + 1);
        }

        return -1 === r ? "" : e.slice(n, r);
      }(e);

      return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
    }, t.extname = function (e) {
      "string" != typeof e && (e += "");

      for (var t = -1, n = 0, r = -1, u = !0, o = 0, i = e.length - 1; i >= 0; --i) {
        var a = e.charCodeAt(i);
        if (47 !== a) -1 === r && (u = !1, r = i + 1), 46 === a ? -1 === t ? t = i : 1 !== o && (o = 1) : -1 !== t && (o = -1);else if (!u) {
          n = i + 1;
          break;
        }
      }

      return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
    };
    var u = "b" === "ab".substr(-1) ? function (e, t, n) {
      return e.substr(t, n);
    } : function (e, t, n) {
      return t < 0 && (t = e.length + t), e.substr(t, n);
    };
  }, function (e, t, n) {
    t.SourceMapGenerator = n(4).SourceMapGenerator, t.SourceMapConsumer = n(12).SourceMapConsumer, t.SourceNode = n(15).SourceNode;
  }, function (e, t, n) {
    var r = n(5),
        u = n(1),
        o = n(6).ArraySet,
        i = n(11).MappingList;

    function a(e) {
      e || (e = {}), this._file = u.getArg(e, "file", null), this._sourceRoot = u.getArg(e, "sourceRoot", null), this._skipValidation = u.getArg(e, "skipValidation", !1), this._sources = new o(), this._names = new o(), this._mappings = new i(), this._sourcesContents = null;
    }

    a.prototype._version = 3, a.fromSourceMap = function (e) {
      var t = e.sourceRoot,
          n = new a({
        file: e.file,
        sourceRoot: t
      });
      return e.eachMapping(function (e) {
        var r = {
          generated: {
            line: e.generatedLine,
            column: e.generatedColumn
          }
        };
        null != e.source && (r.source = e.source, null != t && (r.source = u.relative(t, r.source)), r.original = {
          line: e.originalLine,
          column: e.originalColumn
        }, null != e.name && (r.name = e.name)), n.addMapping(r);
      }), e.sources.forEach(function (t) {
        var r = e.sourceContentFor(t);
        null != r && n.setSourceContent(t, r);
      }), n;
    }, a.prototype.addMapping = function (e) {
      var t = u.getArg(e, "generated"),
          n = u.getArg(e, "original", null),
          r = u.getArg(e, "source", null),
          o = u.getArg(e, "name", null);
      this._skipValidation || this._validateMapping(t, n, r, o), null != r && (r = String(r), this._sources.has(r) || this._sources.add(r)), null != o && (o = String(o), this._names.has(o) || this._names.add(o)), this._mappings.add({
        generatedLine: t.line,
        generatedColumn: t.column,
        originalLine: null != n && n.line,
        originalColumn: null != n && n.column,
        source: r,
        name: o
      });
    }, a.prototype.setSourceContent = function (e, t) {
      var n = e;
      null != this._sourceRoot && (n = u.relative(this._sourceRoot, n)), null != t ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[u.toSetString(n)] = t) : this._sourcesContents && (delete this._sourcesContents[u.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
    }, a.prototype.applySourceMap = function (e, t, n) {
      var r = t;

      if (null == t) {
        if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
        r = e.file;
      }

      var i = this._sourceRoot;
      null != i && (r = u.relative(i, r));
      var a = new o(),
          l = new o();
      this._mappings.unsortedForEach(function (t) {
        if (t.source === r && null != t.originalLine) {
          var o = e.originalPositionFor({
            line: t.originalLine,
            column: t.originalColumn
          });
          null != o.source && (t.source = o.source, null != n && (t.source = u.join(n, t.source)), null != i && (t.source = u.relative(i, t.source)), t.originalLine = o.line, t.originalColumn = o.column, null != o.name && (t.name = o.name));
        }

        var c = t.source;
        null == c || a.has(c) || a.add(c);
        var s = t.name;
        null == s || l.has(s) || l.add(s);
      }, this), this._sources = a, this._names = l, e.sources.forEach(function (t) {
        var r = e.sourceContentFor(t);
        null != r && (null != n && (t = u.join(n, t)), null != i && (t = u.relative(i, t)), this.setSourceContent(t, r));
      }, this);
    }, a.prototype._validateMapping = function (e, t, n, r) {
      if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) throw new Error("Invalid mapping: " + JSON.stringify({
        generated: e,
        source: n,
        original: t,
        name: r
      }));
    }, a.prototype._serializeMappings = function () {
      for (var e, t, n, o, i = 0, a = 1, l = 0, c = 0, s = 0, f = 0, p = "", d = this._mappings.toArray(), h = 0, g = d.length; h < g; h++) {
        if (e = "", (t = d[h]).generatedLine !== a) for (i = 0; t.generatedLine !== a;) {
          e += ";", a++;
        } else if (h > 0) {
          if (!u.compareByGeneratedPositionsInflated(t, d[h - 1])) continue;
          e += ",";
        }
        e += r.encode(t.generatedColumn - i), i = t.generatedColumn, null != t.source && (o = this._sources.indexOf(t.source), e += r.encode(o - f), f = o, e += r.encode(t.originalLine - 1 - c), c = t.originalLine - 1, e += r.encode(t.originalColumn - l), l = t.originalColumn, null != t.name && (n = this._names.indexOf(t.name), e += r.encode(n - s), s = n)), p += e;
      }

      return p;
    }, a.prototype._generateSourcesContent = function (e, t) {
      return e.map(function (e) {
        if (!this._sourcesContents) return null;
        null != t && (e = u.relative(t, e));
        var n = u.toSetString(e);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
      }, this);
    }, a.prototype.toJSON = function () {
      var e = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
    }, a.prototype.toString = function () {
      return JSON.stringify(this.toJSON());
    }, t.SourceMapGenerator = a;
  }, function (e, t, n) {
    var r = n(10);
    t.encode = function (e) {
      var t,
          n = "",
          u = function (e) {
        return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
      }(e);

      do {
        t = 31 & u, (u >>>= 5) > 0 && (t |= 32), n += r.encode(t);
      } while (u > 0);

      return n;
    }, t.decode = function (e, t, n) {
      var u,
          o,
          i,
          a,
          l = e.length,
          c = 0,
          s = 0;

      do {
        if (t >= l) throw new Error("Expected more digits in base 64 VLQ value.");
        if (-1 === (o = r.decode(e.charCodeAt(t++)))) throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
        u = !!(32 & o), c += (o &= 31) << s, s += 5;
      } while (u);

      n.value = (a = (i = c) >> 1, 1 == (1 & i) ? -a : a), n.rest = t;
    };
  }, function (e, t, n) {
    var r = n(1),
        u = Object.prototype.hasOwnProperty;

    function o() {
      this._array = [], this._set = Object.create(null);
    }

    o.fromArray = function (e, t) {
      for (var n = new o(), r = 0, u = e.length; r < u; r++) {
        n.add(e[r], t);
      }

      return n;
    }, o.prototype.size = function () {
      return Object.getOwnPropertyNames(this._set).length;
    }, o.prototype.add = function (e, t) {
      var n = r.toSetString(e),
          o = u.call(this._set, n),
          i = this._array.length;
      o && !t || this._array.push(e), o || (this._set[n] = i);
    }, o.prototype.has = function (e) {
      var t = r.toSetString(e);
      return u.call(this._set, t);
    }, o.prototype.indexOf = function (e) {
      var t = r.toSetString(e);
      if (u.call(this._set, t)) return this._set[t];
      throw new Error('"' + e + '" is not in the set.');
    }, o.prototype.at = function (e) {
      if (e >= 0 && e < this._array.length) return this._array[e];
      throw new Error("No element indexed by " + e);
    }, o.prototype.toArray = function () {
      return this._array.slice();
    }, t.ArraySet = o;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return Array.isArray(e) || (e = [e]), Promise.all(e.map(function (e) {
        return e.then(function (e) {
          return {
            isFulfilled: !0,
            isRejected: !1,
            value: e
          };
        }).catch(function (e) {
          return {
            isFulfilled: !1,
            isRejected: !0,
            reason: e
          };
        });
      }));
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.settle = r, t.default = r;
  }, function (e, t) {
    e.exports = "!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=205)}([function(e,t,n){\"use strict\";e.exports=n(181)},function(e,t,n){var r=n(8),u=n(36).f,o=n(17),i=n(21),a=n(39),l=n(56),c=n(60);e.exports=function(e,t){var n,s,f,d,p,h=e.target,m=e.global,g=e.stat;if(n=m?r:g?r[h]||a(h,{}):(r[h]||{}).prototype)for(s in t){if(d=t[s],f=e.noTargetGet?(p=u(n,s))&&p.value:n[s],!c(m?s:h+(g?\".\":\"#\")+s,e.forced)&&void 0!==f){if(typeof d===typeof f)continue;l(d,f)}(e.sham||f&&f.sham)&&o(d,\"sham\",!0),i(n,s,d,e)}}},function(e,t,n){var r=n(11);e.exports=function(e){if(!r(e))throw TypeError(String(e)+\" is not an object\");return e}},function(e,t){e.exports=!1},function(e,t,n){var r=n(2),u=n(62),o=n(27),i=n(7),a=n(43),l=n(65),c=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,n,s,f){var d,p,h,m,g,v,D,y=i(t,n,s?2:1);if(f)d=e;else{if(\"function\"!=typeof(p=a(e)))throw TypeError(\"Target is not iterable\");if(u(p)){for(h=0,m=o(e.length);m>h;h++)if((g=s?y(r(D=e[h])[0],D[1]):y(e[h]))&&g instanceof c)return g;return new c(!1)}d=p.call(e)}for(v=d.next;!(D=v.call(d)).done;)if(\"object\"==typeof(g=l(d,y,D.value,s))&&g&&g instanceof c)return g;return new c(!1)}).stop=function(e){return new c(!0,e)}},function(e,t){e.exports=function(e){if(\"function\"!=typeof e)throw TypeError(String(e)+\" is not a function\");return e}},function(e,t,n){var r=n(8),u=n(24),o=n(32),i=n(63),a=r.Symbol,l=u(\"wks\");e.exports=function(e){return l[e]||(l[e]=i&&a[e]||(i?a:o)(\"Symbol.\"+e))}},function(e,t,n){var r=n(5);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,u){return e.call(t,n,r,u)}}return function(){return e.apply(t,arguments)}}},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n(\"object\"==typeof globalThis&&globalThis)||n(\"object\"==typeof window&&window)||n(\"object\"==typeof self&&self)||n(\"object\"==typeof t&&t)||Function(\"return this\")()}).call(this,n(35))},function(e,t,n){var r=n(57),u=n(12),o=n(78),i=n(14).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});u(t,e)||i(t,e,{value:o.f(e)})}},function(e,t,n){var r=n(57),u=n(8),o=function(e){return\"function\"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(u[e]):r[e]&&r[e][t]||u[e]&&u[e][t]}},function(e,t){e.exports=function(e){return\"object\"===typeof e?null!==e:\"function\"===typeof e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(16),u=n(53),o=n(2),i=n(30),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=i(t,!0),o(n),u)try{return a(e,t,n)}catch(e){}if(\"get\"in n||\"set\"in n)throw TypeError(\"Accessors not supported\");return\"value\"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(3),u=n(45);e.exports=r?u:function(e){return Map.prototype.entries.call(e)}},function(e,t,n){var r=n(13);e.exports=!r((function(){return 7!=Object.defineProperty({},\"a\",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(16),u=n(14),o=n(23);e.exports=r?function(e,t,n){return u.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(2),u=n(5),o=n(6)(\"species\");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[o])?t:u(n)}},function(e,t,n){var r=n(3),u=n(45);e.exports=r?u:function(e){return Set.prototype.values.call(e)}},function(e,t,n){var r=n(52),u=n(38);e.exports=function(e){return r(u(e))}},function(e,t,n){var r=n(8),u=n(24),o=n(17),i=n(12),a=n(39),l=n(55),c=n(25),s=c.get,f=c.enforce,d=String(l).split(\"toString\");u(\"inspectSource\",(function(e){return l.call(e)})),(e.exports=function(e,t,n,u){var l=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,s=!!u&&!!u.noTargetGet;\"function\"==typeof n&&(\"string\"!=typeof t||i(n,\"name\")||o(n,\"name\",t),f(n).source=d.join(\"string\"==typeof t?t:\"\")),e!==r?(l?!s&&e[t]&&(c=!0):delete e[t],c?e[t]=n:o(e,t,n)):c?e[t]=n:a(t,n)})(Function.prototype,\"toString\",(function(){return\"function\"==typeof this&&s(this).source||l.call(this)}))},function(e,t,n){var r=n(14).f,u=n(12),o=n(6)(\"toStringTag\");e.exports=function(e,t,n){e&&!u(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(3),u=n(90);(e.exports=function(e,t){return u[e]||(u[e]=void 0!==t?t:{})})(\"versions\",[]).push({version:\"3.4.0\",mode:r?\"pure\":\"global\",copyright:\"\xA9 2019 Denis Pushkarev (zloirock.ru)\"})},function(e,t,n){var r,u,o,i=n(91),a=n(8),l=n(11),c=n(17),s=n(12),f=n(31),d=n(26),p=a.WeakMap;if(i){var h=new p,m=h.get,g=h.has,v=h.set;r=function(e,t){return v.call(h,e,t),t},u=function(e){return m.call(h,e)||{}},o=function(e){return g.call(h,e)}}else{var D=f(\"state\");d[D]=!0,r=function(e,t){return c(e,D,t),t},u=function(e){return s(e,D)?e[D]:{}},o=function(e){return s(e,D)}}e.exports={set:r,get:u,has:o,enforce:function(e){return o(e)?u(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=u(t)).type!==e)throw TypeError(\"Incompatible receiver, \"+e+\" required\");return n}}}},function(e,t){e.exports={}},function(e,t,n){var r=n(41),u=Math.min;e.exports=function(e){return e>0?u(r(e),9007199254740991):0}},function(e,t){e.exports={}},function(e,t,n){var r=n(38);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(11);e.exports=function(e,t){if(!r(e))return e;var n,u;if(t&&\"function\"==typeof(n=e.toString)&&!r(u=n.call(e)))return u;if(\"function\"==typeof(n=e.valueOf)&&!r(u=n.call(e)))return u;if(!t&&\"function\"==typeof(n=e.toString)&&!r(u=n.call(e)))return u;throw TypeError(\"Can't convert object to primitive value\")}},function(e,t,n){var r=n(24),u=n(32),o=r(\"keys\");e.exports=function(e){return o[e]||(o[e]=u(e))}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return\"Symbol(\"+String(void 0===e?\"\":e)+\")_\"+(++n+r).toString(36)}},function(e,t,n){var r=n(2),u=n(98),o=n(42),i=n(26),a=n(99),l=n(54),c=n(31)(\"IE_PROTO\"),s=function(){},f=function(){var e,t=l(\"iframe\"),n=o.length;for(t.style.display=\"none\",a.appendChild(t),t.src=String(\"javascript:\"),(e=t.contentWindow.document).open(),e.write(\"<script>document.F=Object<\\/script>\"),e.close(),f=e.F;n--;)delete f.prototype[o[n]];return f()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[c]=e):n=f(),void 0===t?n:u(n,t)},i[c]=!0},function(e,t,n){\"use strict\";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=[[{color:\"0, 0, 0\",class:\"ansi-black\"},{color:\"187, 0, 0\",class:\"ansi-red\"},{color:\"0, 187, 0\",class:\"ansi-green\"},{color:\"187, 187, 0\",class:\"ansi-yellow\"},{color:\"0, 0, 187\",class:\"ansi-blue\"},{color:\"187, 0, 187\",class:\"ansi-magenta\"},{color:\"0, 187, 187\",class:\"ansi-cyan\"},{color:\"255,255,255\",class:\"ansi-white\"}],[{color:\"85, 85, 85\",class:\"ansi-bright-black\"},{color:\"255, 85, 85\",class:\"ansi-bright-red\"},{color:\"0, 255, 0\",class:\"ansi-bright-green\"},{color:\"255, 255, 85\",class:\"ansi-bright-yellow\"},{color:\"85, 85, 255\",class:\"ansi-bright-blue\"},{color:\"255, 85, 255\",class:\"ansi-bright-magenta\"},{color:\"85, 255, 255\",class:\"ansi-bright-cyan\"},{color:\"255, 255, 255\",class:\"ansi-bright-white\"}]],o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.fg=this.bg=this.fg_truecolor=this.bg_truecolor=null,this.bright=0}return r(e,null,[{key:\"escapeForHtml\",value:function(t){return(new e).escapeForHtml(t)}},{key:\"linkify\",value:function(t){return(new e).linkify(t)}},{key:\"ansiToHtml\",value:function(t,n){return(new e).ansiToHtml(t,n)}},{key:\"ansiToJson\",value:function(t,n){return(new e).ansiToJson(t,n)}},{key:\"ansiToText\",value:function(t){return(new e).ansiToText(t)}}]),r(e,[{key:\"setupPalette\",value:function(){this.PALETTE_COLORS=[];for(var e=0;e<2;++e)for(var t=0;t<8;++t)this.PALETTE_COLORS.push(u[e][t].color);for(var n=[0,95,135,175,215,255],r=function(e,t,r){return n[e]+\", \"+n[t]+\", \"+n[r]},o=0;o<6;++o)for(var i=0;i<6;++i)for(var a=0;a<6;++a)this.PALETTE_COLORS.push(r(o,i,a));for(var l=8,c=0;c<24;++c,l+=10)this.PALETTE_COLORS.push(r(l,l,l))}},{key:\"escapeForHtml\",value:function(e){return e.replace(/[&<>]/gm,(function(e){return\"&\"==e?\"&amp;\":\"<\"==e?\"&lt;\":\">\"==e?\"&gt;\":\"\"}))}},{key:\"linkify\",value:function(e){return e.replace(/(https?:\\/\\/[^\\s]+)/gm,(function(e){return'<a href=\"'+e+'\">'+e+\"</a>\"}))}},{key:\"ansiToHtml\",value:function(e,t){return this.process(e,t,!0)}},{key:\"ansiToJson\",value:function(e,t){return(t=t||{}).json=!0,t.clearLine=!1,this.process(e,t,!0)}},{key:\"ansiToText\",value:function(e){return this.process(e,{},!1)}},{key:\"process\",value:function(e,t,n){var r=this,u=e.split(/\\033\\[/),o=u.shift();void 0!==t&&null!==t||(t={}),t.clearLine=/\\r/.test(e);var i=u.map((function(e){return r.processChunk(e,t,n)}));if(t&&t.json){var a=this.processChunkJson(\"\");return a.content=o,a.clearLine=t.clearLine,i.unshift(a),t.remove_empty&&(i=i.filter((function(e){return!e.isEmpty()}))),i}return i.unshift(o),i.join(\"\")}},{key:\"processChunkJson\",value:function(e,t,n){var r=(t=\"undefined\"==typeof t?{}:t).use_classes=\"undefined\"!=typeof t.use_classes&&t.use_classes,o=t.key=r?\"class\":\"color\",i={content:e,fg:null,bg:null,fg_truecolor:null,bg_truecolor:null,clearLine:t.clearLine,decoration:null,was_processed:!1,isEmpty:function(){return!i.content}},a=e.match(/^([!\\x3c-\\x3f]*)([\\d;]*)([\\x20-\\x2c]*[\\x40-\\x7e])([\\s\\S]*)/m);if(!a)return i;i.content=a[4];var l=a[2].split(\";\");if(\"\"!==a[1]||\"m\"!==a[3])return i;if(!n)return i;for(this.decoration=null;l.length>0;){var c=l.shift(),s=parseInt(c);if(isNaN(s)||0===s)this.fg=this.bg=this.decoration=null;else if(1===s)this.decoration=\"bold\";else if(2===s)this.decoration=\"dim\";else if(3==s)this.decoration=\"italic\";else if(4==s)this.decoration=\"underline\";else if(5==s)this.decoration=\"blink\";else if(7===s)this.decoration=\"reverse\";else if(8===s)this.decoration=\"hidden\";else if(9===s)this.decoration=\"strikethrough\";else if(39==s)this.fg=null;else if(49==s)this.bg=null;else if(s>=30&&s<38)this.fg=u[0][s%10][o];else if(s>=90&&s<98)this.fg=u[1][s%10][o];else if(s>=40&&s<48)this.bg=u[0][s%10][o];else if(s>=100&&s<108)this.bg=u[1][s%10][o];else if(38===s||48===s){var f=38===s;if(l.length>=1){var d=l.shift();if(\"5\"===d&&l.length>=1){var p=parseInt(l.shift());if(p>=0&&p<=255)if(r){var h=p>=16?\"ansi-palette-\"+p:u[p>7?1:0][p%8].class;f?this.fg=h:this.bg=h}else this.PALETTE_COLORS||this.setupPalette(),f?this.fg=this.PALETTE_COLORS[p]:this.bg=this.PALETTE_COLORS[p]}else if(\"2\"===d&&l.length>=3){var m=parseInt(l.shift()),g=parseInt(l.shift()),v=parseInt(l.shift());if(m>=0&&m<=255&&g>=0&&g<=255&&v>=0&&v<=255){var D=m+\", \"+g+\", \"+v;r?f?(this.fg=\"ansi-truecolor\",this.fg_truecolor=D):(this.bg=\"ansi-truecolor\",this.bg_truecolor=D):f?this.fg=D:this.bg=D}}}}}if(null===this.fg&&null===this.bg&&null===this.decoration)return i;return i.fg=this.fg,i.bg=this.bg,i.fg_truecolor=this.fg_truecolor,i.bg_truecolor=this.bg_truecolor,i.decoration=this.decoration,i.was_processed=!0,i}},{key:\"processChunk\",value:function(e,t,n){var r=this;t=t||{};var u=this.processChunkJson(e,t,n);if(t.json)return u;if(u.isEmpty())return\"\";if(!u.was_processed)return u.content;var o=t.use_classes,i=[],a=[],l={},c=function(e){var t=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&t.push(\"data-\"+n+'=\"'+r.escapeForHtml(e[n])+'\"');return t.length>0?\" \"+t.join(\" \"):\"\"};return u.fg&&(o?(a.push(u.fg+\"-fg\"),null!==u.fg_truecolor&&(l[\"ansi-truecolor-fg\"]=u.fg_truecolor,u.fg_truecolor=null)):i.push(\"color:rgb(\"+u.fg+\")\")),u.bg&&(o?(a.push(u.bg+\"-bg\"),null!==u.bg_truecolor&&(l[\"ansi-truecolor-bg\"]=u.bg_truecolor,u.bg_truecolor=null)):i.push(\"background-color:rgb(\"+u.bg+\")\")),u.decoration&&(o?a.push(\"ansi-\"+u.decoration):\"bold\"===u.decoration?i.push(\"font-weight:bold\"):\"dim\"===u.decoration?i.push(\"opacity:0.5\"):\"italic\"===u.decoration?i.push(\"font-style:italic\"):\"reverse\"===u.decoration?i.push(\"filter:invert(100%)\"):\"hidden\"===u.decoration?i.push(\"visibility:hidden\"):\"strikethrough\"===u.decoration?i.push(\"text-decoration:line-through\"):i.push(\"text-decoration:\"+u.decoration)),o?'<span class=\"'+a.join(\" \")+'\"'+c(l)+\">\"+u.content+\"</span>\":'<span style=\"'+i.join(\";\")+'\"'+c(l)+\">\"+u.content+\"</span>\"}}]),e}();e.exports=o},function(e,t){var n;n=function(){return this}();try{n=n||new Function(\"return this\")()}catch(e){\"object\"===typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(16),u=n(51),o=n(23),i=n(20),a=n(30),l=n(12),c=n(53),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=i(e),t=a(t,!0),c)try{return s(e,t)}catch(e){}if(l(e,t))return o(!u.f.call(e,t),e[t])}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError(\"Can't call method on \"+e);return e}},function(e,t,n){var r=n(8),u=n(17);e.exports=function(e,t){try{u(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(58),u=n(42).concat(\"length\",\"prototype\");t.f=Object.getOwnPropertyNames||function(e){return r(e,u)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=[\"constructor\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"toLocaleString\",\"toString\",\"valueOf\"]},function(e,t,n){var r=n(64),u=n(28),o=n(6)(\"iterator\");e.exports=function(e){if(void 0!=e)return e[o]||e[\"@@iterator\"]||u[r(e)]}},function(e,t,n){\"use strict\";var r=n(1),u=n(101),o=n(72),i=n(68),a=n(22),l=n(17),c=n(21),s=n(6),f=n(3),d=n(28),p=n(71),h=p.IteratorPrototype,m=p.BUGGY_SAFARI_ITERATORS,g=s(\"iterator\"),v=function(){return this};e.exports=function(e,t,n,s,p,D,y){u(n,t,s);var b,E,C,A=function(e){if(e===p&&k)return k;if(!m&&e in x)return x[e];switch(e){case\"keys\":case\"values\":case\"entries\":return function(){return new n(this,e)}}return function(){return new n(this)}},F=t+\" Iterator\",w=!1,x=e.prototype,B=x[g]||x[\"@@iterator\"]||p&&x[p],k=!m&&B||A(p),S=\"Array\"==t&&x.entries||B;if(S&&(b=o(S.call(new e)),h!==Object.prototype&&b.next&&(f||o(b)===h||(i?i(b,h):\"function\"!=typeof b[g]&&l(b,g,v)),a(b,F,!0,!0),f&&(d[F]=v))),\"values\"==p&&B&&\"values\"!==B.name&&(w=!0,k=function(){return B.call(this)}),f&&!y||x[g]===k||l(x,g,k),d[t]=k,p)if(E={values:A(\"values\"),keys:D?k:A(\"keys\"),entries:A(\"entries\")},y)for(C in E)!m&&!w&&C in x||c(x,C,E[C]);else r({target:t,proto:!0,forced:m||w},E);return E}},function(e,t,n){var r=n(2),u=n(43);e.exports=function(e){var t=u(e);if(\"function\"!=typeof t)throw TypeError(String(e)+\" is not iterable\");return r(t.call(e))}},function(e,t,n){var r=n(37);e.exports=Array.isArray||function(e){return\"Array\"==r(e)}},function(e,t,n){\"use strict\";var r=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError(\"Object.assign cannot be called with null or undefined\");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String(\"abc\");if(e[5]=\"de\",\"5\"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t[\"_\"+String.fromCharCode(n)]=n;if(\"0123456789\"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(\"\"))return!1;var r={};return\"abcdefghijklmnopqrst\".split(\"\").forEach((function(e){r[e]=e})),\"abcdefghijklmnopqrst\"===Object.keys(Object.assign({},r)).join(\"\")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))u.call(n,s)&&(l[s]=n[s]);if(r){a=r(n);for(var f=0;f<a.length;f++)o.call(n,a[f])&&(l[a[f]]=n[a[f]])}}return l}},function(e,t){var n,r,u=e.exports={};function o(){throw new Error(\"setTimeout has not been defined\")}function i(){throw new Error(\"clearTimeout has not been defined\")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n=\"function\"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r=\"function\"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,c=[],s=!1,f=-1;function d(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&p())}function p(){if(!s){var e=a(d);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||s||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},u.title=\"browser\",u.browser=!0,u.env={},u.argv=[],u.version=\"\",u.versions={},u.on=m,u.addListener=m,u.once=m,u.off=m,u.removeListener=m,u.removeAllListeners=m,u.emit=m,u.prependListener=m,u.prependOnceListener=m,u.listeners=function(e){return[]},u.binding=function(e){throw new Error(\"process.binding is not supported\")},u.cwd=function(){return\"/\"},u.chdir=function(e){throw new Error(\"process.chdir is not supported\")},u.umask=function(){return 0}},function(e,t,n){\"use strict\";!function e(){if(\"undefined\"!==typeof{}&&\"function\"===typeof{}.checkDCE){0;try{({}).checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(182)},function(e,t,n){\"use strict\";var r=n(1),u=n(8),o=n(60),i=n(21),a=n(61),l=n(4),c=n(66),s=n(11),f=n(13),d=n(67),p=n(22),h=n(96);e.exports=function(e,t,n,m,g){var v=u[e],D=v&&v.prototype,y=v,b=m?\"set\":\"add\",E={},C=function(e){var t=D[e];i(D,e,\"add\"==e?function(e){return t.call(this,0===e?0:e),this}:\"delete\"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:\"get\"==e?function(e){return g&&!s(e)?void 0:t.call(this,0===e?0:e)}:\"has\"==e?function(e){return!(g&&!s(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(o(e,\"function\"!=typeof v||!(g||D.forEach&&!f((function(){(new v).entries().next()})))))y=n.getConstructor(t,e,m,b),a.REQUIRED=!0;else if(o(e,!0)){var A=new y,F=A[b](g?{}:-0,1)!=A,w=f((function(){A.has(1)})),x=d((function(e){new v(e)})),B=!g&&f((function(){for(var e=new v,t=5;t--;)e[b](t,t);return!e.has(-0)}));x||((y=t((function(t,n){c(t,y,e);var r=h(new v,t,y);return void 0!=n&&l(n,r[b],r,m),r}))).prototype=D,D.constructor=y),(w||B)&&(C(\"delete\"),C(\"has\"),m&&C(\"get\")),(B||F)&&C(b),g&&D.clear&&delete D.clear}return E[e]=y,r({global:!0,forced:y!=v},E),p(y,e),g||n.setStrong(y,e,m),y}},function(e,t,n){\"use strict\";var r={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,o=u&&!r.call({1:2},1);t.f=o?function(e){var t=u(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(13),u=n(37),o=\"\".split;e.exports=r((function(){return!Object(\"z\").propertyIsEnumerable(0)}))?function(e){return\"String\"==u(e)?o.call(e,\"\"):Object(e)}:Object},function(e,t,n){var r=n(16),u=n(13),o=n(54);e.exports=!r&&!u((function(){return 7!=Object.defineProperty(o(\"div\"),\"a\",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(8),u=n(11),o=r.document,i=u(o)&&u(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var r=n(24);e.exports=r(\"native-function-to-string\",Function.toString)},function(e,t,n){var r=n(12),u=n(92),o=n(36),i=n(14);e.exports=function(e,t){for(var n=u(t),a=i.f,l=o.f,c=0;c<n.length;c++){var s=n[c];r(e,s)||a(e,s,l(t,s))}}},function(e,t,n){e.exports=n(8)},function(e,t,n){var r=n(12),u=n(20),o=n(93).indexOf,i=n(26);e.exports=function(e,t){var n,a=u(e),l=0,c=[];for(n in a)!r(i,n)&&r(a,n)&&c.push(n);for(;t.length>l;)r(a,n=t[l++])&&(~o(c,n)||c.push(n));return c}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(13),u=/#|\\.prototype\\./,o=function(e,t){var n=a[i(e)];return n==c||n!=l&&(\"function\"==typeof t?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(u,\".\").toLowerCase()},a=o.data={},l=o.NATIVE=\"N\",c=o.POLYFILL=\"P\";e.exports=o},function(e,t,n){var r=n(26),u=n(11),o=n(12),i=n(14).f,a=n(32),l=n(95),c=a(\"meta\"),s=0,f=Object.isExtensible||function(){return!0},d=function(e){i(e,c,{value:{objectID:\"O\"+ ++s,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!u(e))return\"symbol\"==typeof e?e:(\"string\"==typeof e?\"S\":\"P\")+e;if(!o(e,c)){if(!f(e))return\"F\";if(!t)return\"E\";d(e)}return e[c].objectID},getWeakData:function(e,t){if(!o(e,c)){if(!f(e))return!0;if(!t)return!1;d(e)}return e[c].weakData},onFreeze:function(e){return l&&p.REQUIRED&&f(e)&&!o(e,c)&&d(e),e}};r[c]=!0},function(e,t,n){var r=n(6),u=n(28),o=r(\"iterator\"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(u.Array===e||i[o]===e)}},function(e,t,n){var r=n(13);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(e,t,n){var r=n(37),u=n(6)(\"toStringTag\"),o=\"Arguments\"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?\"Undefined\":null===e?\"Null\":\"string\"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),u))?n:o?r(t):\"Object\"==(i=r(t))&&\"function\"==typeof t.callee?\"Arguments\":i}},function(e,t,n){var r=n(2);e.exports=function(e,t,n,u){try{return u?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError(\"Incorrect \"+(n?n+\" \":\"\")+\"invocation\");return e}},function(e,t,n){var r=n(6)(\"iterator\"),u=!1;try{var o=0,i={next:function(){return{done:!!o++}},return:function(){u=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!u)return!1;var n=!1;try{var o={};o[r]=function(){return{next:function(){return{done:n=!0}}}},e(o)}catch(e){}return n}},function(e,t,n){var r=n(2),u=n(97);e.exports=Object.setPrototypeOf||(\"__proto__\"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,\"__proto__\").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,o){return r(n),u(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},function(e,t,n){\"use strict\";var r=n(14).f,u=n(33),o=n(100),i=n(7),a=n(66),l=n(4),c=n(44),s=n(103),f=n(16),d=n(61).fastKey,p=n(25),h=p.set,m=p.getterFor;e.exports={getConstructor:function(e,t,n,c){var s=e((function(e,r){a(e,s,t),h(e,{type:t,index:u(null),first:void 0,last:void 0,size:0}),f||(e.size=0),void 0!=r&&l(r,e[c],e,n)})),p=m(t),g=function(e,t,n){var r,u,o=p(e),i=v(e,t);return i?i.value=n:(o.last=i={index:u=d(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=i),r&&(r.next=i),f?o.size++:e.size++,\"F\"!==u&&(o.index[u]=i)),e},v=function(e,t){var n,r=p(e),u=d(t);if(\"F\"!==u)return r.index[u];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(s.prototype,{clear:function(){for(var e=p(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,f?e.size=0:this.size=0},delete:function(e){var t=p(this),n=v(this,e);if(n){var r=n.next,u=n.previous;delete t.index[n.index],n.removed=!0,u&&(u.next=r),r&&(r.previous=u),t.first==n&&(t.first=r),t.last==n&&(t.last=u),f?t.size--:this.size--}return!!n},forEach:function(e){for(var t,n=p(this),r=i(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!v(this,e)}}),o(s.prototype,n?{get:function(e){var t=v(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),f&&r(s.prototype,\"size\",{get:function(){return p(this).size}}),s},setStrong:function(e,t,n){var r=t+\" Iterator\",u=m(t),o=m(r);c(e,t,(function(e,t){h(this,{type:r,target:e,state:u(e),kind:t,last:void 0})}),(function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?\"keys\"==t?{value:n.key,done:!1}:\"values\"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?\"entries\":\"values\",!n,!0),s(t)}}},function(e,t,n){var r=n(58),u=n(42);e.exports=Object.keys||function(e){return r(e,u)}},function(e,t,n){\"use strict\";var r,u,o,i=n(72),a=n(17),l=n(12),c=n(6),s=n(3),f=c(\"iterator\"),d=!1;[].keys&&(\"next\"in(o=[].keys())?(u=i(i(o)))!==Object.prototype&&(r=u):d=!0),void 0==r&&(r={}),s||l(r,f)||a(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(e,t,n){var r=n(12),u=n(29),o=n(31),i=n(102),a=o(\"IE_PROTO\"),l=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=u(e),r(e,a)?e[a]:\"function\"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?l:null}},function(e,t,n){var r=n(21),u=n(104),o=Object.prototype;u!==o.toString&&r(o,\"toString\",u,{unsafe:!0})},function(e,t,n){\"use strict\";var r=n(106).charAt,u=n(25),o=n(44),i=u.set,a=u.getterFor(\"String Iterator\");o(String,\"String\",(function(e){i(this,{type:\"String Iterator\",string:String(e),index:0})}),(function(){var e,t=a(this),n=t.string,u=t.index;return u>=n.length?{value:void 0,done:!0}:(e=r(n,u),t.index+=e.length,{value:e,done:!1})}))},function(e,t,n){\"use strict\";var r=n(2),u=n(5);e.exports=function(){for(var e,t=r(this),n=u(t.delete),o=!0,i=0,a=arguments.length;i<a;i++)e=n.call(t,arguments[i]),o=o&&e;return!!o}},function(e,t,n){\"use strict\";var r=n(5),u=n(7),o=n(4);e.exports=function(e){var t,n,i,a,l=arguments.length,c=l>1?arguments[1]:void 0;return r(this),(t=void 0!==c)&&r(c),void 0==e?new this:(n=[],t?(i=0,a=u(c,l>2?arguments[2]:void 0,2),o(e,(function(e){n.push(a(e,i++))}))):o(e,n.push,n),new this(n))}},function(e,t,n){\"use strict\";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},function(e,t,n){t.f=n(6)},function(e,t,n){var r=n(11),u=n(46),o=n(6)(\"species\");e.exports=function(e,t){var n;return u(e)&&(\"function\"!=typeof(n=e.constructor)||n!==Array&&!u(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},function(e,t,n){\"use strict\";var r=n(30),u=n(14),o=n(23);e.exports=function(e,t,n){var i=r(t);i in e?u.f(e,i,o(0,n)):e[i]=n}},function(e,t,n){var r,u,o=n(8),i=n(167),a=o.process,l=a&&a.versions,c=l&&l.v8;c?u=(r=c.split(\".\"))[0]+r[1]:i&&(!(r=i.match(/Edge\\/(\\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\\/(\\d+)/))&&(u=r[1]),e.exports=u&&+u},function(e,t,n){\"use strict\";var r=n(176);function u(){}var o=null,i={};function a(e){if(\"object\"!==typeof this)throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!==typeof e)throw new TypeError(\"Promise constructor's argument is not a function\");this._h=0,this._i=0,this._j=null,this._k=null,e!==u&&p(e,this)}function l(e,t){for(;3===e._i;)e=e._j;if(a._l&&a._l(e),0===e._i)return 0===e._h?(e._h=1,void(e._k=t)):1===e._h?(e._h=2,void(e._k=[e._k,t])):void e._k.push(t);!function(e,t){r((function(){var n=1===e._i?t.onFulfilled:t.onRejected;if(null!==n){var r=function(e,t){try{return e(t)}catch(e){return o=e,i}}(n,e._j);r===i?s(t.promise,o):c(t.promise,r)}else 1===e._i?c(t.promise,e._j):s(t.promise,e._j)}))}(e,t)}function c(e,t){if(t===e)return s(e,new TypeError(\"A promise cannot be resolved with itself.\"));if(t&&(\"object\"===typeof t||\"function\"===typeof t)){var n=function(e){try{return e.then}catch(e){return o=e,i}}(t);if(n===i)return s(e,o);if(n===e.then&&t instanceof a)return e._i=3,e._j=t,void f(e);if(\"function\"===typeof n)return void p(n.bind(t),e)}e._i=1,e._j=t,f(e)}function s(e,t){e._i=2,e._j=t,a._m&&a._m(e,t),f(e)}function f(e){if(1===e._h&&(l(e,e._k),e._k=null),2===e._h){for(var t=0;t<e._k.length;t++)l(e,e._k[t]);e._k=null}}function d(e,t,n){this.onFulfilled=\"function\"===typeof e?e:null,this.onRejected=\"function\"===typeof t?t:null,this.promise=n}function p(e,t){var n=!1,r=function(e,t,n){try{e(t,n)}catch(e){return o=e,i}}(e,(function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,s(t,e))}));n||r!==i||(n=!0,s(t,o))}e.exports=a,a._l=null,a._m=null,a._n=u,a.prototype.then=function(e,t){if(this.constructor!==a)return function(e,t,n){return new e.constructor((function(r,o){var i=new a(u);i.then(r,o),l(e,new d(t,n,i))}))}(this,e,t);var n=new a(u);return l(this,new d(e,t,n)),n}},function(e,t){var n=[[\"Aacute\",[193]],[\"aacute\",[225]],[\"Abreve\",[258]],[\"abreve\",[259]],[\"ac\",[8766]],[\"acd\",[8767]],[\"acE\",[8766,819]],[\"Acirc\",[194]],[\"acirc\",[226]],[\"acute\",[180]],[\"Acy\",[1040]],[\"acy\",[1072]],[\"AElig\",[198]],[\"aelig\",[230]],[\"af\",[8289]],[\"Afr\",[120068]],[\"afr\",[120094]],[\"Agrave\",[192]],[\"agrave\",[224]],[\"alefsym\",[8501]],[\"aleph\",[8501]],[\"Alpha\",[913]],[\"alpha\",[945]],[\"Amacr\",[256]],[\"amacr\",[257]],[\"amalg\",[10815]],[\"amp\",[38]],[\"AMP\",[38]],[\"andand\",[10837]],[\"And\",[10835]],[\"and\",[8743]],[\"andd\",[10844]],[\"andslope\",[10840]],[\"andv\",[10842]],[\"ang\",[8736]],[\"ange\",[10660]],[\"angle\",[8736]],[\"angmsdaa\",[10664]],[\"angmsdab\",[10665]],[\"angmsdac\",[10666]],[\"angmsdad\",[10667]],[\"angmsdae\",[10668]],[\"angmsdaf\",[10669]],[\"angmsdag\",[10670]],[\"angmsdah\",[10671]],[\"angmsd\",[8737]],[\"angrt\",[8735]],[\"angrtvb\",[8894]],[\"angrtvbd\",[10653]],[\"angsph\",[8738]],[\"angst\",[197]],[\"angzarr\",[9084]],[\"Aogon\",[260]],[\"aogon\",[261]],[\"Aopf\",[120120]],[\"aopf\",[120146]],[\"apacir\",[10863]],[\"ap\",[8776]],[\"apE\",[10864]],[\"ape\",[8778]],[\"apid\",[8779]],[\"apos\",[39]],[\"ApplyFunction\",[8289]],[\"approx\",[8776]],[\"approxeq\",[8778]],[\"Aring\",[197]],[\"aring\",[229]],[\"Ascr\",[119964]],[\"ascr\",[119990]],[\"Assign\",[8788]],[\"ast\",[42]],[\"asymp\",[8776]],[\"asympeq\",[8781]],[\"Atilde\",[195]],[\"atilde\",[227]],[\"Auml\",[196]],[\"auml\",[228]],[\"awconint\",[8755]],[\"awint\",[10769]],[\"backcong\",[8780]],[\"backepsilon\",[1014]],[\"backprime\",[8245]],[\"backsim\",[8765]],[\"backsimeq\",[8909]],[\"Backslash\",[8726]],[\"Barv\",[10983]],[\"barvee\",[8893]],[\"barwed\",[8965]],[\"Barwed\",[8966]],[\"barwedge\",[8965]],[\"bbrk\",[9141]],[\"bbrktbrk\",[9142]],[\"bcong\",[8780]],[\"Bcy\",[1041]],[\"bcy\",[1073]],[\"bdquo\",[8222]],[\"becaus\",[8757]],[\"because\",[8757]],[\"Because\",[8757]],[\"bemptyv\",[10672]],[\"bepsi\",[1014]],[\"bernou\",[8492]],[\"Bernoullis\",[8492]],[\"Beta\",[914]],[\"beta\",[946]],[\"beth\",[8502]],[\"between\",[8812]],[\"Bfr\",[120069]],[\"bfr\",[120095]],[\"bigcap\",[8898]],[\"bigcirc\",[9711]],[\"bigcup\",[8899]],[\"bigodot\",[10752]],[\"bigoplus\",[10753]],[\"bigotimes\",[10754]],[\"bigsqcup\",[10758]],[\"bigstar\",[9733]],[\"bigtriangledown\",[9661]],[\"bigtriangleup\",[9651]],[\"biguplus\",[10756]],[\"bigvee\",[8897]],[\"bigwedge\",[8896]],[\"bkarow\",[10509]],[\"blacklozenge\",[10731]],[\"blacksquare\",[9642]],[\"blacktriangle\",[9652]],[\"blacktriangledown\",[9662]],[\"blacktriangleleft\",[9666]],[\"blacktriangleright\",[9656]],[\"blank\",[9251]],[\"blk12\",[9618]],[\"blk14\",[9617]],[\"blk34\",[9619]],[\"block\",[9608]],[\"bne\",[61,8421]],[\"bnequiv\",[8801,8421]],[\"bNot\",[10989]],[\"bnot\",[8976]],[\"Bopf\",[120121]],[\"bopf\",[120147]],[\"bot\",[8869]],[\"bottom\",[8869]],[\"bowtie\",[8904]],[\"boxbox\",[10697]],[\"boxdl\",[9488]],[\"boxdL\",[9557]],[\"boxDl\",[9558]],[\"boxDL\",[9559]],[\"boxdr\",[9484]],[\"boxdR\",[9554]],[\"boxDr\",[9555]],[\"boxDR\",[9556]],[\"boxh\",[9472]],[\"boxH\",[9552]],[\"boxhd\",[9516]],[\"boxHd\",[9572]],[\"boxhD\",[9573]],[\"boxHD\",[9574]],[\"boxhu\",[9524]],[\"boxHu\",[9575]],[\"boxhU\",[9576]],[\"boxHU\",[9577]],[\"boxminus\",[8863]],[\"boxplus\",[8862]],[\"boxtimes\",[8864]],[\"boxul\",[9496]],[\"boxuL\",[9563]],[\"boxUl\",[9564]],[\"boxUL\",[9565]],[\"boxur\",[9492]],[\"boxuR\",[9560]],[\"boxUr\",[9561]],[\"boxUR\",[9562]],[\"boxv\",[9474]],[\"boxV\",[9553]],[\"boxvh\",[9532]],[\"boxvH\",[9578]],[\"boxVh\",[9579]],[\"boxVH\",[9580]],[\"boxvl\",[9508]],[\"boxvL\",[9569]],[\"boxVl\",[9570]],[\"boxVL\",[9571]],[\"boxvr\",[9500]],[\"boxvR\",[9566]],[\"boxVr\",[9567]],[\"boxVR\",[9568]],[\"bprime\",[8245]],[\"breve\",[728]],[\"Breve\",[728]],[\"brvbar\",[166]],[\"bscr\",[119991]],[\"Bscr\",[8492]],[\"bsemi\",[8271]],[\"bsim\",[8765]],[\"bsime\",[8909]],[\"bsolb\",[10693]],[\"bsol\",[92]],[\"bsolhsub\",[10184]],[\"bull\",[8226]],[\"bullet\",[8226]],[\"bump\",[8782]],[\"bumpE\",[10926]],[\"bumpe\",[8783]],[\"Bumpeq\",[8782]],[\"bumpeq\",[8783]],[\"Cacute\",[262]],[\"cacute\",[263]],[\"capand\",[10820]],[\"capbrcup\",[10825]],[\"capcap\",[10827]],[\"cap\",[8745]],[\"Cap\",[8914]],[\"capcup\",[10823]],[\"capdot\",[10816]],[\"CapitalDifferentialD\",[8517]],[\"caps\",[8745,65024]],[\"caret\",[8257]],[\"caron\",[711]],[\"Cayleys\",[8493]],[\"ccaps\",[10829]],[\"Ccaron\",[268]],[\"ccaron\",[269]],[\"Ccedil\",[199]],[\"ccedil\",[231]],[\"Ccirc\",[264]],[\"ccirc\",[265]],[\"Cconint\",[8752]],[\"ccups\",[10828]],[\"ccupssm\",[10832]],[\"Cdot\",[266]],[\"cdot\",[267]],[\"cedil\",[184]],[\"Cedilla\",[184]],[\"cemptyv\",[10674]],[\"cent\",[162]],[\"centerdot\",[183]],[\"CenterDot\",[183]],[\"cfr\",[120096]],[\"Cfr\",[8493]],[\"CHcy\",[1063]],[\"chcy\",[1095]],[\"check\",[10003]],[\"checkmark\",[10003]],[\"Chi\",[935]],[\"chi\",[967]],[\"circ\",[710]],[\"circeq\",[8791]],[\"circlearrowleft\",[8634]],[\"circlearrowright\",[8635]],[\"circledast\",[8859]],[\"circledcirc\",[8858]],[\"circleddash\",[8861]],[\"CircleDot\",[8857]],[\"circledR\",[174]],[\"circledS\",[9416]],[\"CircleMinus\",[8854]],[\"CirclePlus\",[8853]],[\"CircleTimes\",[8855]],[\"cir\",[9675]],[\"cirE\",[10691]],[\"cire\",[8791]],[\"cirfnint\",[10768]],[\"cirmid\",[10991]],[\"cirscir\",[10690]],[\"ClockwiseContourIntegral\",[8754]],[\"clubs\",[9827]],[\"clubsuit\",[9827]],[\"colon\",[58]],[\"Colon\",[8759]],[\"Colone\",[10868]],[\"colone\",[8788]],[\"coloneq\",[8788]],[\"comma\",[44]],[\"commat\",[64]],[\"comp\",[8705]],[\"compfn\",[8728]],[\"complement\",[8705]],[\"complexes\",[8450]],[\"cong\",[8773]],[\"congdot\",[10861]],[\"Congruent\",[8801]],[\"conint\",[8750]],[\"Conint\",[8751]],[\"ContourIntegral\",[8750]],[\"copf\",[120148]],[\"Copf\",[8450]],[\"coprod\",[8720]],[\"Coproduct\",[8720]],[\"copy\",[169]],[\"COPY\",[169]],[\"copysr\",[8471]],[\"CounterClockwiseContourIntegral\",[8755]],[\"crarr\",[8629]],[\"cross\",[10007]],[\"Cross\",[10799]],[\"Cscr\",[119966]],[\"cscr\",[119992]],[\"csub\",[10959]],[\"csube\",[10961]],[\"csup\",[10960]],[\"csupe\",[10962]],[\"ctdot\",[8943]],[\"cudarrl\",[10552]],[\"cudarrr\",[10549]],[\"cuepr\",[8926]],[\"cuesc\",[8927]],[\"cularr\",[8630]],[\"cularrp\",[10557]],[\"cupbrcap\",[10824]],[\"cupcap\",[10822]],[\"CupCap\",[8781]],[\"cup\",[8746]],[\"Cup\",[8915]],[\"cupcup\",[10826]],[\"cupdot\",[8845]],[\"cupor\",[10821]],[\"cups\",[8746,65024]],[\"curarr\",[8631]],[\"curarrm\",[10556]],[\"curlyeqprec\",[8926]],[\"curlyeqsucc\",[8927]],[\"curlyvee\",[8910]],[\"curlywedge\",[8911]],[\"curren\",[164]],[\"curvearrowleft\",[8630]],[\"curvearrowright\",[8631]],[\"cuvee\",[8910]],[\"cuwed\",[8911]],[\"cwconint\",[8754]],[\"cwint\",[8753]],[\"cylcty\",[9005]],[\"dagger\",[8224]],[\"Dagger\",[8225]],[\"daleth\",[8504]],[\"darr\",[8595]],[\"Darr\",[8609]],[\"dArr\",[8659]],[\"dash\",[8208]],[\"Dashv\",[10980]],[\"dashv\",[8867]],[\"dbkarow\",[10511]],[\"dblac\",[733]],[\"Dcaron\",[270]],[\"dcaron\",[271]],[\"Dcy\",[1044]],[\"dcy\",[1076]],[\"ddagger\",[8225]],[\"ddarr\",[8650]],[\"DD\",[8517]],[\"dd\",[8518]],[\"DDotrahd\",[10513]],[\"ddotseq\",[10871]],[\"deg\",[176]],[\"Del\",[8711]],[\"Delta\",[916]],[\"delta\",[948]],[\"demptyv\",[10673]],[\"dfisht\",[10623]],[\"Dfr\",[120071]],[\"dfr\",[120097]],[\"dHar\",[10597]],[\"dharl\",[8643]],[\"dharr\",[8642]],[\"DiacriticalAcute\",[180]],[\"DiacriticalDot\",[729]],[\"DiacriticalDoubleAcute\",[733]],[\"DiacriticalGrave\",[96]],[\"DiacriticalTilde\",[732]],[\"diam\",[8900]],[\"diamond\",[8900]],[\"Diamond\",[8900]],[\"diamondsuit\",[9830]],[\"diams\",[9830]],[\"die\",[168]],[\"DifferentialD\",[8518]],[\"digamma\",[989]],[\"disin\",[8946]],[\"div\",[247]],[\"divide\",[247]],[\"divideontimes\",[8903]],[\"divonx\",[8903]],[\"DJcy\",[1026]],[\"djcy\",[1106]],[\"dlcorn\",[8990]],[\"dlcrop\",[8973]],[\"dollar\",[36]],[\"Dopf\",[120123]],[\"dopf\",[120149]],[\"Dot\",[168]],[\"dot\",[729]],[\"DotDot\",[8412]],[\"doteq\",[8784]],[\"doteqdot\",[8785]],[\"DotEqual\",[8784]],[\"dotminus\",[8760]],[\"dotplus\",[8724]],[\"dotsquare\",[8865]],[\"doublebarwedge\",[8966]],[\"DoubleContourIntegral\",[8751]],[\"DoubleDot\",[168]],[\"DoubleDownArrow\",[8659]],[\"DoubleLeftArrow\",[8656]],[\"DoubleLeftRightArrow\",[8660]],[\"DoubleLeftTee\",[10980]],[\"DoubleLongLeftArrow\",[10232]],[\"DoubleLongLeftRightArrow\",[10234]],[\"DoubleLongRightArrow\",[10233]],[\"DoubleRightArrow\",[8658]],[\"DoubleRightTee\",[8872]],[\"DoubleUpArrow\",[8657]],[\"DoubleUpDownArrow\",[8661]],[\"DoubleVerticalBar\",[8741]],[\"DownArrowBar\",[10515]],[\"downarrow\",[8595]],[\"DownArrow\",[8595]],[\"Downarrow\",[8659]],[\"DownArrowUpArrow\",[8693]],[\"DownBreve\",[785]],[\"downdownarrows\",[8650]],[\"downharpoonleft\",[8643]],[\"downharpoonright\",[8642]],[\"DownLeftRightVector\",[10576]],[\"DownLeftTeeVector\",[10590]],[\"DownLeftVectorBar\",[10582]],[\"DownLeftVector\",[8637]],[\"DownRightTeeVector\",[10591]],[\"DownRightVectorBar\",[10583]],[\"DownRightVector\",[8641]],[\"DownTeeArrow\",[8615]],[\"DownTee\",[8868]],[\"drbkarow\",[10512]],[\"drcorn\",[8991]],[\"drcrop\",[8972]],[\"Dscr\",[119967]],[\"dscr\",[119993]],[\"DScy\",[1029]],[\"dscy\",[1109]],[\"dsol\",[10742]],[\"Dstrok\",[272]],[\"dstrok\",[273]],[\"dtdot\",[8945]],[\"dtri\",[9663]],[\"dtrif\",[9662]],[\"duarr\",[8693]],[\"duhar\",[10607]],[\"dwangle\",[10662]],[\"DZcy\",[1039]],[\"dzcy\",[1119]],[\"dzigrarr\",[10239]],[\"Eacute\",[201]],[\"eacute\",[233]],[\"easter\",[10862]],[\"Ecaron\",[282]],[\"ecaron\",[283]],[\"Ecirc\",[202]],[\"ecirc\",[234]],[\"ecir\",[8790]],[\"ecolon\",[8789]],[\"Ecy\",[1069]],[\"ecy\",[1101]],[\"eDDot\",[10871]],[\"Edot\",[278]],[\"edot\",[279]],[\"eDot\",[8785]],[\"ee\",[8519]],[\"efDot\",[8786]],[\"Efr\",[120072]],[\"efr\",[120098]],[\"eg\",[10906]],[\"Egrave\",[200]],[\"egrave\",[232]],[\"egs\",[10902]],[\"egsdot\",[10904]],[\"el\",[10905]],[\"Element\",[8712]],[\"elinters\",[9191]],[\"ell\",[8467]],[\"els\",[10901]],[\"elsdot\",[10903]],[\"Emacr\",[274]],[\"emacr\",[275]],[\"empty\",[8709]],[\"emptyset\",[8709]],[\"EmptySmallSquare\",[9723]],[\"emptyv\",[8709]],[\"EmptyVerySmallSquare\",[9643]],[\"emsp13\",[8196]],[\"emsp14\",[8197]],[\"emsp\",[8195]],[\"ENG\",[330]],[\"eng\",[331]],[\"ensp\",[8194]],[\"Eogon\",[280]],[\"eogon\",[281]],[\"Eopf\",[120124]],[\"eopf\",[120150]],[\"epar\",[8917]],[\"eparsl\",[10723]],[\"eplus\",[10865]],[\"epsi\",[949]],[\"Epsilon\",[917]],[\"epsilon\",[949]],[\"epsiv\",[1013]],[\"eqcirc\",[8790]],[\"eqcolon\",[8789]],[\"eqsim\",[8770]],[\"eqslantgtr\",[10902]],[\"eqslantless\",[10901]],[\"Equal\",[10869]],[\"equals\",[61]],[\"EqualTilde\",[8770]],[\"equest\",[8799]],[\"Equilibrium\",[8652]],[\"equiv\",[8801]],[\"equivDD\",[10872]],[\"eqvparsl\",[10725]],[\"erarr\",[10609]],[\"erDot\",[8787]],[\"escr\",[8495]],[\"Escr\",[8496]],[\"esdot\",[8784]],[\"Esim\",[10867]],[\"esim\",[8770]],[\"Eta\",[919]],[\"eta\",[951]],[\"ETH\",[208]],[\"eth\",[240]],[\"Euml\",[203]],[\"euml\",[235]],[\"euro\",[8364]],[\"excl\",[33]],[\"exist\",[8707]],[\"Exists\",[8707]],[\"expectation\",[8496]],[\"exponentiale\",[8519]],[\"ExponentialE\",[8519]],[\"fallingdotseq\",[8786]],[\"Fcy\",[1060]],[\"fcy\",[1092]],[\"female\",[9792]],[\"ffilig\",[64259]],[\"fflig\",[64256]],[\"ffllig\",[64260]],[\"Ffr\",[120073]],[\"ffr\",[120099]],[\"filig\",[64257]],[\"FilledSmallSquare\",[9724]],[\"FilledVerySmallSquare\",[9642]],[\"fjlig\",[102,106]],[\"flat\",[9837]],[\"fllig\",[64258]],[\"fltns\",[9649]],[\"fnof\",[402]],[\"Fopf\",[120125]],[\"fopf\",[120151]],[\"forall\",[8704]],[\"ForAll\",[8704]],[\"fork\",[8916]],[\"forkv\",[10969]],[\"Fouriertrf\",[8497]],[\"fpartint\",[10765]],[\"frac12\",[189]],[\"frac13\",[8531]],[\"frac14\",[188]],[\"frac15\",[8533]],[\"frac16\",[8537]],[\"frac18\",[8539]],[\"frac23\",[8532]],[\"frac25\",[8534]],[\"frac34\",[190]],[\"frac35\",[8535]],[\"frac38\",[8540]],[\"frac45\",[8536]],[\"frac56\",[8538]],[\"frac58\",[8541]],[\"frac78\",[8542]],[\"frasl\",[8260]],[\"frown\",[8994]],[\"fscr\",[119995]],[\"Fscr\",[8497]],[\"gacute\",[501]],[\"Gamma\",[915]],[\"gamma\",[947]],[\"Gammad\",[988]],[\"gammad\",[989]],[\"gap\",[10886]],[\"Gbreve\",[286]],[\"gbreve\",[287]],[\"Gcedil\",[290]],[\"Gcirc\",[284]],[\"gcirc\",[285]],[\"Gcy\",[1043]],[\"gcy\",[1075]],[\"Gdot\",[288]],[\"gdot\",[289]],[\"ge\",[8805]],[\"gE\",[8807]],[\"gEl\",[10892]],[\"gel\",[8923]],[\"geq\",[8805]],[\"geqq\",[8807]],[\"geqslant\",[10878]],[\"gescc\",[10921]],[\"ges\",[10878]],[\"gesdot\",[10880]],[\"gesdoto\",[10882]],[\"gesdotol\",[10884]],[\"gesl\",[8923,65024]],[\"gesles\",[10900]],[\"Gfr\",[120074]],[\"gfr\",[120100]],[\"gg\",[8811]],[\"Gg\",[8921]],[\"ggg\",[8921]],[\"gimel\",[8503]],[\"GJcy\",[1027]],[\"gjcy\",[1107]],[\"gla\",[10917]],[\"gl\",[8823]],[\"glE\",[10898]],[\"glj\",[10916]],[\"gnap\",[10890]],[\"gnapprox\",[10890]],[\"gne\",[10888]],[\"gnE\",[8809]],[\"gneq\",[10888]],[\"gneqq\",[8809]],[\"gnsim\",[8935]],[\"Gopf\",[120126]],[\"gopf\",[120152]],[\"grave\",[96]],[\"GreaterEqual\",[8805]],[\"GreaterEqualLess\",[8923]],[\"GreaterFullEqual\",[8807]],[\"GreaterGreater\",[10914]],[\"GreaterLess\",[8823]],[\"GreaterSlantEqual\",[10878]],[\"GreaterTilde\",[8819]],[\"Gscr\",[119970]],[\"gscr\",[8458]],[\"gsim\",[8819]],[\"gsime\",[10894]],[\"gsiml\",[10896]],[\"gtcc\",[10919]],[\"gtcir\",[10874]],[\"gt\",[62]],[\"GT\",[62]],[\"Gt\",[8811]],[\"gtdot\",[8919]],[\"gtlPar\",[10645]],[\"gtquest\",[10876]],[\"gtrapprox\",[10886]],[\"gtrarr\",[10616]],[\"gtrdot\",[8919]],[\"gtreqless\",[8923]],[\"gtreqqless\",[10892]],[\"gtrless\",[8823]],[\"gtrsim\",[8819]],[\"gvertneqq\",[8809,65024]],[\"gvnE\",[8809,65024]],[\"Hacek\",[711]],[\"hairsp\",[8202]],[\"half\",[189]],[\"hamilt\",[8459]],[\"HARDcy\",[1066]],[\"hardcy\",[1098]],[\"harrcir\",[10568]],[\"harr\",[8596]],[\"hArr\",[8660]],[\"harrw\",[8621]],[\"Hat\",[94]],[\"hbar\",[8463]],[\"Hcirc\",[292]],[\"hcirc\",[293]],[\"hearts\",[9829]],[\"heartsuit\",[9829]],[\"hellip\",[8230]],[\"hercon\",[8889]],[\"hfr\",[120101]],[\"Hfr\",[8460]],[\"HilbertSpace\",[8459]],[\"hksearow\",[10533]],[\"hkswarow\",[10534]],[\"hoarr\",[8703]],[\"homtht\",[8763]],[\"hookleftarrow\",[8617]],[\"hookrightarrow\",[8618]],[\"hopf\",[120153]],[\"Hopf\",[8461]],[\"horbar\",[8213]],[\"HorizontalLine\",[9472]],[\"hscr\",[119997]],[\"Hscr\",[8459]],[\"hslash\",[8463]],[\"Hstrok\",[294]],[\"hstrok\",[295]],[\"HumpDownHump\",[8782]],[\"HumpEqual\",[8783]],[\"hybull\",[8259]],[\"hyphen\",[8208]],[\"Iacute\",[205]],[\"iacute\",[237]],[\"ic\",[8291]],[\"Icirc\",[206]],[\"icirc\",[238]],[\"Icy\",[1048]],[\"icy\",[1080]],[\"Idot\",[304]],[\"IEcy\",[1045]],[\"iecy\",[1077]],[\"iexcl\",[161]],[\"iff\",[8660]],[\"ifr\",[120102]],[\"Ifr\",[8465]],[\"Igrave\",[204]],[\"igrave\",[236]],[\"ii\",[8520]],[\"iiiint\",[10764]],[\"iiint\",[8749]],[\"iinfin\",[10716]],[\"iiota\",[8489]],[\"IJlig\",[306]],[\"ijlig\",[307]],[\"Imacr\",[298]],[\"imacr\",[299]],[\"image\",[8465]],[\"ImaginaryI\",[8520]],[\"imagline\",[8464]],[\"imagpart\",[8465]],[\"imath\",[305]],[\"Im\",[8465]],[\"imof\",[8887]],[\"imped\",[437]],[\"Implies\",[8658]],[\"incare\",[8453]],[\"in\",[8712]],[\"infin\",[8734]],[\"infintie\",[10717]],[\"inodot\",[305]],[\"intcal\",[8890]],[\"int\",[8747]],[\"Int\",[8748]],[\"integers\",[8484]],[\"Integral\",[8747]],[\"intercal\",[8890]],[\"Intersection\",[8898]],[\"intlarhk\",[10775]],[\"intprod\",[10812]],[\"InvisibleComma\",[8291]],[\"InvisibleTimes\",[8290]],[\"IOcy\",[1025]],[\"iocy\",[1105]],[\"Iogon\",[302]],[\"iogon\",[303]],[\"Iopf\",[120128]],[\"iopf\",[120154]],[\"Iota\",[921]],[\"iota\",[953]],[\"iprod\",[10812]],[\"iquest\",[191]],[\"iscr\",[119998]],[\"Iscr\",[8464]],[\"isin\",[8712]],[\"isindot\",[8949]],[\"isinE\",[8953]],[\"isins\",[8948]],[\"isinsv\",[8947]],[\"isinv\",[8712]],[\"it\",[8290]],[\"Itilde\",[296]],[\"itilde\",[297]],[\"Iukcy\",[1030]],[\"iukcy\",[1110]],[\"Iuml\",[207]],[\"iuml\",[239]],[\"Jcirc\",[308]],[\"jcirc\",[309]],[\"Jcy\",[1049]],[\"jcy\",[1081]],[\"Jfr\",[120077]],[\"jfr\",[120103]],[\"jmath\",[567]],[\"Jopf\",[120129]],[\"jopf\",[120155]],[\"Jscr\",[119973]],[\"jscr\",[119999]],[\"Jsercy\",[1032]],[\"jsercy\",[1112]],[\"Jukcy\",[1028]],[\"jukcy\",[1108]],[\"Kappa\",[922]],[\"kappa\",[954]],[\"kappav\",[1008]],[\"Kcedil\",[310]],[\"kcedil\",[311]],[\"Kcy\",[1050]],[\"kcy\",[1082]],[\"Kfr\",[120078]],[\"kfr\",[120104]],[\"kgreen\",[312]],[\"KHcy\",[1061]],[\"khcy\",[1093]],[\"KJcy\",[1036]],[\"kjcy\",[1116]],[\"Kopf\",[120130]],[\"kopf\",[120156]],[\"Kscr\",[119974]],[\"kscr\",[12e4]],[\"lAarr\",[8666]],[\"Lacute\",[313]],[\"lacute\",[314]],[\"laemptyv\",[10676]],[\"lagran\",[8466]],[\"Lambda\",[923]],[\"lambda\",[955]],[\"lang\",[10216]],[\"Lang\",[10218]],[\"langd\",[10641]],[\"langle\",[10216]],[\"lap\",[10885]],[\"Laplacetrf\",[8466]],[\"laquo\",[171]],[\"larrb\",[8676]],[\"larrbfs\",[10527]],[\"larr\",[8592]],[\"Larr\",[8606]],[\"lArr\",[8656]],[\"larrfs\",[10525]],[\"larrhk\",[8617]],[\"larrlp\",[8619]],[\"larrpl\",[10553]],[\"larrsim\",[10611]],[\"larrtl\",[8610]],[\"latail\",[10521]],[\"lAtail\",[10523]],[\"lat\",[10923]],[\"late\",[10925]],[\"lates\",[10925,65024]],[\"lbarr\",[10508]],[\"lBarr\",[10510]],[\"lbbrk\",[10098]],[\"lbrace\",[123]],[\"lbrack\",[91]],[\"lbrke\",[10635]],[\"lbrksld\",[10639]],[\"lbrkslu\",[10637]],[\"Lcaron\",[317]],[\"lcaron\",[318]],[\"Lcedil\",[315]],[\"lcedil\",[316]],[\"lceil\",[8968]],[\"lcub\",[123]],[\"Lcy\",[1051]],[\"lcy\",[1083]],[\"ldca\",[10550]],[\"ldquo\",[8220]],[\"ldquor\",[8222]],[\"ldrdhar\",[10599]],[\"ldrushar\",[10571]],[\"ldsh\",[8626]],[\"le\",[8804]],[\"lE\",[8806]],[\"LeftAngleBracket\",[10216]],[\"LeftArrowBar\",[8676]],[\"leftarrow\",[8592]],[\"LeftArrow\",[8592]],[\"Leftarrow\",[8656]],[\"LeftArrowRightArrow\",[8646]],[\"leftarrowtail\",[8610]],[\"LeftCeiling\",[8968]],[\"LeftDoubleBracket\",[10214]],[\"LeftDownTeeVector\",[10593]],[\"LeftDownVectorBar\",[10585]],[\"LeftDownVector\",[8643]],[\"LeftFloor\",[8970]],[\"leftharpoondown\",[8637]],[\"leftharpoonup\",[8636]],[\"leftleftarrows\",[8647]],[\"leftrightarrow\",[8596]],[\"LeftRightArrow\",[8596]],[\"Leftrightarrow\",[8660]],[\"leftrightarrows\",[8646]],[\"leftrightharpoons\",[8651]],[\"leftrightsquigarrow\",[8621]],[\"LeftRightVector\",[10574]],[\"LeftTeeArrow\",[8612]],[\"LeftTee\",[8867]],[\"LeftTeeVector\",[10586]],[\"leftthreetimes\",[8907]],[\"LeftTriangleBar\",[10703]],[\"LeftTriangle\",[8882]],[\"LeftTriangleEqual\",[8884]],[\"LeftUpDownVector\",[10577]],[\"LeftUpTeeVector\",[10592]],[\"LeftUpVectorBar\",[10584]],[\"LeftUpVector\",[8639]],[\"LeftVectorBar\",[10578]],[\"LeftVector\",[8636]],[\"lEg\",[10891]],[\"leg\",[8922]],[\"leq\",[8804]],[\"leqq\",[8806]],[\"leqslant\",[10877]],[\"lescc\",[10920]],[\"les\",[10877]],[\"lesdot\",[10879]],[\"lesdoto\",[10881]],[\"lesdotor\",[10883]],[\"lesg\",[8922,65024]],[\"lesges\",[10899]],[\"lessapprox\",[10885]],[\"lessdot\",[8918]],[\"lesseqgtr\",[8922]],[\"lesseqqgtr\",[10891]],[\"LessEqualGreater\",[8922]],[\"LessFullEqual\",[8806]],[\"LessGreater\",[8822]],[\"lessgtr\",[8822]],[\"LessLess\",[10913]],[\"lesssim\",[8818]],[\"LessSlantEqual\",[10877]],[\"LessTilde\",[8818]],[\"lfisht\",[10620]],[\"lfloor\",[8970]],[\"Lfr\",[120079]],[\"lfr\",[120105]],[\"lg\",[8822]],[\"lgE\",[10897]],[\"lHar\",[10594]],[\"lhard\",[8637]],[\"lharu\",[8636]],[\"lharul\",[10602]],[\"lhblk\",[9604]],[\"LJcy\",[1033]],[\"ljcy\",[1113]],[\"llarr\",[8647]],[\"ll\",[8810]],[\"Ll\",[8920]],[\"llcorner\",[8990]],[\"Lleftarrow\",[8666]],[\"llhard\",[10603]],[\"lltri\",[9722]],[\"Lmidot\",[319]],[\"lmidot\",[320]],[\"lmoustache\",[9136]],[\"lmoust\",[9136]],[\"lnap\",[10889]],[\"lnapprox\",[10889]],[\"lne\",[10887]],[\"lnE\",[8808]],[\"lneq\",[10887]],[\"lneqq\",[8808]],[\"lnsim\",[8934]],[\"loang\",[10220]],[\"loarr\",[8701]],[\"lobrk\",[10214]],[\"longleftarrow\",[10229]],[\"LongLeftArrow\",[10229]],[\"Longleftarrow\",[10232]],[\"longleftrightarrow\",[10231]],[\"LongLeftRightArrow\",[10231]],[\"Longleftrightarrow\",[10234]],[\"longmapsto\",[10236]],[\"longrightarrow\",[10230]],[\"LongRightArrow\",[10230]],[\"Longrightarrow\",[10233]],[\"looparrowleft\",[8619]],[\"looparrowright\",[8620]],[\"lopar\",[10629]],[\"Lopf\",[120131]],[\"lopf\",[120157]],[\"loplus\",[10797]],[\"lotimes\",[10804]],[\"lowast\",[8727]],[\"lowbar\",[95]],[\"LowerLeftArrow\",[8601]],[\"LowerRightArrow\",[8600]],[\"loz\",[9674]],[\"lozenge\",[9674]],[\"lozf\",[10731]],[\"lpar\",[40]],[\"lparlt\",[10643]],[\"lrarr\",[8646]],[\"lrcorner\",[8991]],[\"lrhar\",[8651]],[\"lrhard\",[10605]],[\"lrm\",[8206]],[\"lrtri\",[8895]],[\"lsaquo\",[8249]],[\"lscr\",[120001]],[\"Lscr\",[8466]],[\"lsh\",[8624]],[\"Lsh\",[8624]],[\"lsim\",[8818]],[\"lsime\",[10893]],[\"lsimg\",[10895]],[\"lsqb\",[91]],[\"lsquo\",[8216]],[\"lsquor\",[8218]],[\"Lstrok\",[321]],[\"lstrok\",[322]],[\"ltcc\",[10918]],[\"ltcir\",[10873]],[\"lt\",[60]],[\"LT\",[60]],[\"Lt\",[8810]],[\"ltdot\",[8918]],[\"lthree\",[8907]],[\"ltimes\",[8905]],[\"ltlarr\",[10614]],[\"ltquest\",[10875]],[\"ltri\",[9667]],[\"ltrie\",[8884]],[\"ltrif\",[9666]],[\"ltrPar\",[10646]],[\"lurdshar\",[10570]],[\"luruhar\",[10598]],[\"lvertneqq\",[8808,65024]],[\"lvnE\",[8808,65024]],[\"macr\",[175]],[\"male\",[9794]],[\"malt\",[10016]],[\"maltese\",[10016]],[\"Map\",[10501]],[\"map\",[8614]],[\"mapsto\",[8614]],[\"mapstodown\",[8615]],[\"mapstoleft\",[8612]],[\"mapstoup\",[8613]],[\"marker\",[9646]],[\"mcomma\",[10793]],[\"Mcy\",[1052]],[\"mcy\",[1084]],[\"mdash\",[8212]],[\"mDDot\",[8762]],[\"measuredangle\",[8737]],[\"MediumSpace\",[8287]],[\"Mellintrf\",[8499]],[\"Mfr\",[120080]],[\"mfr\",[120106]],[\"mho\",[8487]],[\"micro\",[181]],[\"midast\",[42]],[\"midcir\",[10992]],[\"mid\",[8739]],[\"middot\",[183]],[\"minusb\",[8863]],[\"minus\",[8722]],[\"minusd\",[8760]],[\"minusdu\",[10794]],[\"MinusPlus\",[8723]],[\"mlcp\",[10971]],[\"mldr\",[8230]],[\"mnplus\",[8723]],[\"models\",[8871]],[\"Mopf\",[120132]],[\"mopf\",[120158]],[\"mp\",[8723]],[\"mscr\",[120002]],[\"Mscr\",[8499]],[\"mstpos\",[8766]],[\"Mu\",[924]],[\"mu\",[956]],[\"multimap\",[8888]],[\"mumap\",[8888]],[\"nabla\",[8711]],[\"Nacute\",[323]],[\"nacute\",[324]],[\"nang\",[8736,8402]],[\"nap\",[8777]],[\"napE\",[10864,824]],[\"napid\",[8779,824]],[\"napos\",[329]],[\"napprox\",[8777]],[\"natural\",[9838]],[\"naturals\",[8469]],[\"natur\",[9838]],[\"nbsp\",[160]],[\"nbump\",[8782,824]],[\"nbumpe\",[8783,824]],[\"ncap\",[10819]],[\"Ncaron\",[327]],[\"ncaron\",[328]],[\"Ncedil\",[325]],[\"ncedil\",[326]],[\"ncong\",[8775]],[\"ncongdot\",[10861,824]],[\"ncup\",[10818]],[\"Ncy\",[1053]],[\"ncy\",[1085]],[\"ndash\",[8211]],[\"nearhk\",[10532]],[\"nearr\",[8599]],[\"neArr\",[8663]],[\"nearrow\",[8599]],[\"ne\",[8800]],[\"nedot\",[8784,824]],[\"NegativeMediumSpace\",[8203]],[\"NegativeThickSpace\",[8203]],[\"NegativeThinSpace\",[8203]],[\"NegativeVeryThinSpace\",[8203]],[\"nequiv\",[8802]],[\"nesear\",[10536]],[\"nesim\",[8770,824]],[\"NestedGreaterGreater\",[8811]],[\"NestedLessLess\",[8810]],[\"nexist\",[8708]],[\"nexists\",[8708]],[\"Nfr\",[120081]],[\"nfr\",[120107]],[\"ngE\",[8807,824]],[\"nge\",[8817]],[\"ngeq\",[8817]],[\"ngeqq\",[8807,824]],[\"ngeqslant\",[10878,824]],[\"nges\",[10878,824]],[\"nGg\",[8921,824]],[\"ngsim\",[8821]],[\"nGt\",[8811,8402]],[\"ngt\",[8815]],[\"ngtr\",[8815]],[\"nGtv\",[8811,824]],[\"nharr\",[8622]],[\"nhArr\",[8654]],[\"nhpar\",[10994]],[\"ni\",[8715]],[\"nis\",[8956]],[\"nisd\",[8954]],[\"niv\",[8715]],[\"NJcy\",[1034]],[\"njcy\",[1114]],[\"nlarr\",[8602]],[\"nlArr\",[8653]],[\"nldr\",[8229]],[\"nlE\",[8806,824]],[\"nle\",[8816]],[\"nleftarrow\",[8602]],[\"nLeftarrow\",[8653]],[\"nleftrightarrow\",[8622]],[\"nLeftrightarrow\",[8654]],[\"nleq\",[8816]],[\"nleqq\",[8806,824]],[\"nleqslant\",[10877,824]],[\"nles\",[10877,824]],[\"nless\",[8814]],[\"nLl\",[8920,824]],[\"nlsim\",[8820]],[\"nLt\",[8810,8402]],[\"nlt\",[8814]],[\"nltri\",[8938]],[\"nltrie\",[8940]],[\"nLtv\",[8810,824]],[\"nmid\",[8740]],[\"NoBreak\",[8288]],[\"NonBreakingSpace\",[160]],[\"nopf\",[120159]],[\"Nopf\",[8469]],[\"Not\",[10988]],[\"not\",[172]],[\"NotCongruent\",[8802]],[\"NotCupCap\",[8813]],[\"NotDoubleVerticalBar\",[8742]],[\"NotElement\",[8713]],[\"NotEqual\",[8800]],[\"NotEqualTilde\",[8770,824]],[\"NotExists\",[8708]],[\"NotGreater\",[8815]],[\"NotGreaterEqual\",[8817]],[\"NotGreaterFullEqual\",[8807,824]],[\"NotGreaterGreater\",[8811,824]],[\"NotGreaterLess\",[8825]],[\"NotGreaterSlantEqual\",[10878,824]],[\"NotGreaterTilde\",[8821]],[\"NotHumpDownHump\",[8782,824]],[\"NotHumpEqual\",[8783,824]],[\"notin\",[8713]],[\"notindot\",[8949,824]],[\"notinE\",[8953,824]],[\"notinva\",[8713]],[\"notinvb\",[8951]],[\"notinvc\",[8950]],[\"NotLeftTriangleBar\",[10703,824]],[\"NotLeftTriangle\",[8938]],[\"NotLeftTriangleEqual\",[8940]],[\"NotLess\",[8814]],[\"NotLessEqual\",[8816]],[\"NotLessGreater\",[8824]],[\"NotLessLess\",[8810,824]],[\"NotLessSlantEqual\",[10877,824]],[\"NotLessTilde\",[8820]],[\"NotNestedGreaterGreater\",[10914,824]],[\"NotNestedLessLess\",[10913,824]],[\"notni\",[8716]],[\"notniva\",[8716]],[\"notnivb\",[8958]],[\"notnivc\",[8957]],[\"NotPrecedes\",[8832]],[\"NotPrecedesEqual\",[10927,824]],[\"NotPrecedesSlantEqual\",[8928]],[\"NotReverseElement\",[8716]],[\"NotRightTriangleBar\",[10704,824]],[\"NotRightTriangle\",[8939]],[\"NotRightTriangleEqual\",[8941]],[\"NotSquareSubset\",[8847,824]],[\"NotSquareSubsetEqual\",[8930]],[\"NotSquareSuperset\",[8848,824]],[\"NotSquareSupersetEqual\",[8931]],[\"NotSubset\",[8834,8402]],[\"NotSubsetEqual\",[8840]],[\"NotSucceeds\",[8833]],[\"NotSucceedsEqual\",[10928,824]],[\"NotSucceedsSlantEqual\",[8929]],[\"NotSucceedsTilde\",[8831,824]],[\"NotSuperset\",[8835,8402]],[\"NotSupersetEqual\",[8841]],[\"NotTilde\",[8769]],[\"NotTildeEqual\",[8772]],[\"NotTildeFullEqual\",[8775]],[\"NotTildeTilde\",[8777]],[\"NotVerticalBar\",[8740]],[\"nparallel\",[8742]],[\"npar\",[8742]],[\"nparsl\",[11005,8421]],[\"npart\",[8706,824]],[\"npolint\",[10772]],[\"npr\",[8832]],[\"nprcue\",[8928]],[\"nprec\",[8832]],[\"npreceq\",[10927,824]],[\"npre\",[10927,824]],[\"nrarrc\",[10547,824]],[\"nrarr\",[8603]],[\"nrArr\",[8655]],[\"nrarrw\",[8605,824]],[\"nrightarrow\",[8603]],[\"nRightarrow\",[8655]],[\"nrtri\",[8939]],[\"nrtrie\",[8941]],[\"nsc\",[8833]],[\"nsccue\",[8929]],[\"nsce\",[10928,824]],[\"Nscr\",[119977]],[\"nscr\",[120003]],[\"nshortmid\",[8740]],[\"nshortparallel\",[8742]],[\"nsim\",[8769]],[\"nsime\",[8772]],[\"nsimeq\",[8772]],[\"nsmid\",[8740]],[\"nspar\",[8742]],[\"nsqsube\",[8930]],[\"nsqsupe\",[8931]],[\"nsub\",[8836]],[\"nsubE\",[10949,824]],[\"nsube\",[8840]],[\"nsubset\",[8834,8402]],[\"nsubseteq\",[8840]],[\"nsubseteqq\",[10949,824]],[\"nsucc\",[8833]],[\"nsucceq\",[10928,824]],[\"nsup\",[8837]],[\"nsupE\",[10950,824]],[\"nsupe\",[8841]],[\"nsupset\",[8835,8402]],[\"nsupseteq\",[8841]],[\"nsupseteqq\",[10950,824]],[\"ntgl\",[8825]],[\"Ntilde\",[209]],[\"ntilde\",[241]],[\"ntlg\",[8824]],[\"ntriangleleft\",[8938]],[\"ntrianglelefteq\",[8940]],[\"ntriangleright\",[8939]],[\"ntrianglerighteq\",[8941]],[\"Nu\",[925]],[\"nu\",[957]],[\"num\",[35]],[\"numero\",[8470]],[\"numsp\",[8199]],[\"nvap\",[8781,8402]],[\"nvdash\",[8876]],[\"nvDash\",[8877]],[\"nVdash\",[8878]],[\"nVDash\",[8879]],[\"nvge\",[8805,8402]],[\"nvgt\",[62,8402]],[\"nvHarr\",[10500]],[\"nvinfin\",[10718]],[\"nvlArr\",[10498]],[\"nvle\",[8804,8402]],[\"nvlt\",[60,8402]],[\"nvltrie\",[8884,8402]],[\"nvrArr\",[10499]],[\"nvrtrie\",[8885,8402]],[\"nvsim\",[8764,8402]],[\"nwarhk\",[10531]],[\"nwarr\",[8598]],[\"nwArr\",[8662]],[\"nwarrow\",[8598]],[\"nwnear\",[10535]],[\"Oacute\",[211]],[\"oacute\",[243]],[\"oast\",[8859]],[\"Ocirc\",[212]],[\"ocirc\",[244]],[\"ocir\",[8858]],[\"Ocy\",[1054]],[\"ocy\",[1086]],[\"odash\",[8861]],[\"Odblac\",[336]],[\"odblac\",[337]],[\"odiv\",[10808]],[\"odot\",[8857]],[\"odsold\",[10684]],[\"OElig\",[338]],[\"oelig\",[339]],[\"ofcir\",[10687]],[\"Ofr\",[120082]],[\"ofr\",[120108]],[\"ogon\",[731]],[\"Ograve\",[210]],[\"ograve\",[242]],[\"ogt\",[10689]],[\"ohbar\",[10677]],[\"ohm\",[937]],[\"oint\",[8750]],[\"olarr\",[8634]],[\"olcir\",[10686]],[\"olcross\",[10683]],[\"oline\",[8254]],[\"olt\",[10688]],[\"Omacr\",[332]],[\"omacr\",[333]],[\"Omega\",[937]],[\"omega\",[969]],[\"Omicron\",[927]],[\"omicron\",[959]],[\"omid\",[10678]],[\"ominus\",[8854]],[\"Oopf\",[120134]],[\"oopf\",[120160]],[\"opar\",[10679]],[\"OpenCurlyDoubleQuote\",[8220]],[\"OpenCurlyQuote\",[8216]],[\"operp\",[10681]],[\"oplus\",[8853]],[\"orarr\",[8635]],[\"Or\",[10836]],[\"or\",[8744]],[\"ord\",[10845]],[\"order\",[8500]],[\"orderof\",[8500]],[\"ordf\",[170]],[\"ordm\",[186]],[\"origof\",[8886]],[\"oror\",[10838]],[\"orslope\",[10839]],[\"orv\",[10843]],[\"oS\",[9416]],[\"Oscr\",[119978]],[\"oscr\",[8500]],[\"Oslash\",[216]],[\"oslash\",[248]],[\"osol\",[8856]],[\"Otilde\",[213]],[\"otilde\",[245]],[\"otimesas\",[10806]],[\"Otimes\",[10807]],[\"otimes\",[8855]],[\"Ouml\",[214]],[\"ouml\",[246]],[\"ovbar\",[9021]],[\"OverBar\",[8254]],[\"OverBrace\",[9182]],[\"OverBracket\",[9140]],[\"OverParenthesis\",[9180]],[\"para\",[182]],[\"parallel\",[8741]],[\"par\",[8741]],[\"parsim\",[10995]],[\"parsl\",[11005]],[\"part\",[8706]],[\"PartialD\",[8706]],[\"Pcy\",[1055]],[\"pcy\",[1087]],[\"percnt\",[37]],[\"period\",[46]],[\"permil\",[8240]],[\"perp\",[8869]],[\"pertenk\",[8241]],[\"Pfr\",[120083]],[\"pfr\",[120109]],[\"Phi\",[934]],[\"phi\",[966]],[\"phiv\",[981]],[\"phmmat\",[8499]],[\"phone\",[9742]],[\"Pi\",[928]],[\"pi\",[960]],[\"pitchfork\",[8916]],[\"piv\",[982]],[\"planck\",[8463]],[\"planckh\",[8462]],[\"plankv\",[8463]],[\"plusacir\",[10787]],[\"plusb\",[8862]],[\"pluscir\",[10786]],[\"plus\",[43]],[\"plusdo\",[8724]],[\"plusdu\",[10789]],[\"pluse\",[10866]],[\"PlusMinus\",[177]],[\"plusmn\",[177]],[\"plussim\",[10790]],[\"plustwo\",[10791]],[\"pm\",[177]],[\"Poincareplane\",[8460]],[\"pointint\",[10773]],[\"popf\",[120161]],[\"Popf\",[8473]],[\"pound\",[163]],[\"prap\",[10935]],[\"Pr\",[10939]],[\"pr\",[8826]],[\"prcue\",[8828]],[\"precapprox\",[10935]],[\"prec\",[8826]],[\"preccurlyeq\",[8828]],[\"Precedes\",[8826]],[\"PrecedesEqual\",[10927]],[\"PrecedesSlantEqual\",[8828]],[\"PrecedesTilde\",[8830]],[\"preceq\",[10927]],[\"precnapprox\",[10937]],[\"precneqq\",[10933]],[\"precnsim\",[8936]],[\"pre\",[10927]],[\"prE\",[10931]],[\"precsim\",[8830]],[\"prime\",[8242]],[\"Prime\",[8243]],[\"primes\",[8473]],[\"prnap\",[10937]],[\"prnE\",[10933]],[\"prnsim\",[8936]],[\"prod\",[8719]],[\"Product\",[8719]],[\"profalar\",[9006]],[\"profline\",[8978]],[\"profsurf\",[8979]],[\"prop\",[8733]],[\"Proportional\",[8733]],[\"Proportion\",[8759]],[\"propto\",[8733]],[\"prsim\",[8830]],[\"prurel\",[8880]],[\"Pscr\",[119979]],[\"pscr\",[120005]],[\"Psi\",[936]],[\"psi\",[968]],[\"puncsp\",[8200]],[\"Qfr\",[120084]],[\"qfr\",[120110]],[\"qint\",[10764]],[\"qopf\",[120162]],[\"Qopf\",[8474]],[\"qprime\",[8279]],[\"Qscr\",[119980]],[\"qscr\",[120006]],[\"quaternions\",[8461]],[\"quatint\",[10774]],[\"quest\",[63]],[\"questeq\",[8799]],[\"quot\",[34]],[\"QUOT\",[34]],[\"rAarr\",[8667]],[\"race\",[8765,817]],[\"Racute\",[340]],[\"racute\",[341]],[\"radic\",[8730]],[\"raemptyv\",[10675]],[\"rang\",[10217]],[\"Rang\",[10219]],[\"rangd\",[10642]],[\"range\",[10661]],[\"rangle\",[10217]],[\"raquo\",[187]],[\"rarrap\",[10613]],[\"rarrb\",[8677]],[\"rarrbfs\",[10528]],[\"rarrc\",[10547]],[\"rarr\",[8594]],[\"Rarr\",[8608]],[\"rArr\",[8658]],[\"rarrfs\",[10526]],[\"rarrhk\",[8618]],[\"rarrlp\",[8620]],[\"rarrpl\",[10565]],[\"rarrsim\",[10612]],[\"Rarrtl\",[10518]],[\"rarrtl\",[8611]],[\"rarrw\",[8605]],[\"ratail\",[10522]],[\"rAtail\",[10524]],[\"ratio\",[8758]],[\"rationals\",[8474]],[\"rbarr\",[10509]],[\"rBarr\",[10511]],[\"RBarr\",[10512]],[\"rbbrk\",[10099]],[\"rbrace\",[125]],[\"rbrack\",[93]],[\"rbrke\",[10636]],[\"rbrksld\",[10638]],[\"rbrkslu\",[10640]],[\"Rcaron\",[344]],[\"rcaron\",[345]],[\"Rcedil\",[342]],[\"rcedil\",[343]],[\"rceil\",[8969]],[\"rcub\",[125]],[\"Rcy\",[1056]],[\"rcy\",[1088]],[\"rdca\",[10551]],[\"rdldhar\",[10601]],[\"rdquo\",[8221]],[\"rdquor\",[8221]],[\"CloseCurlyDoubleQuote\",[8221]],[\"rdsh\",[8627]],[\"real\",[8476]],[\"realine\",[8475]],[\"realpart\",[8476]],[\"reals\",[8477]],[\"Re\",[8476]],[\"rect\",[9645]],[\"reg\",[174]],[\"REG\",[174]],[\"ReverseElement\",[8715]],[\"ReverseEquilibrium\",[8651]],[\"ReverseUpEquilibrium\",[10607]],[\"rfisht\",[10621]],[\"rfloor\",[8971]],[\"rfr\",[120111]],[\"Rfr\",[8476]],[\"rHar\",[10596]],[\"rhard\",[8641]],[\"rharu\",[8640]],[\"rharul\",[10604]],[\"Rho\",[929]],[\"rho\",[961]],[\"rhov\",[1009]],[\"RightAngleBracket\",[10217]],[\"RightArrowBar\",[8677]],[\"rightarrow\",[8594]],[\"RightArrow\",[8594]],[\"Rightarrow\",[8658]],[\"RightArrowLeftArrow\",[8644]],[\"rightarrowtail\",[8611]],[\"RightCeiling\",[8969]],[\"RightDoubleBracket\",[10215]],[\"RightDownTeeVector\",[10589]],[\"RightDownVectorBar\",[10581]],[\"RightDownVector\",[8642]],[\"RightFloor\",[8971]],[\"rightharpoondown\",[8641]],[\"rightharpoonup\",[8640]],[\"rightleftarrows\",[8644]],[\"rightleftharpoons\",[8652]],[\"rightrightarrows\",[8649]],[\"rightsquigarrow\",[8605]],[\"RightTeeArrow\",[8614]],[\"RightTee\",[8866]],[\"RightTeeVector\",[10587]],[\"rightthreetimes\",[8908]],[\"RightTriangleBar\",[10704]],[\"RightTriangle\",[8883]],[\"RightTriangleEqual\",[8885]],[\"RightUpDownVector\",[10575]],[\"RightUpTeeVector\",[10588]],[\"RightUpVectorBar\",[10580]],[\"RightUpVector\",[8638]],[\"RightVectorBar\",[10579]],[\"RightVector\",[8640]],[\"ring\",[730]],[\"risingdotseq\",[8787]],[\"rlarr\",[8644]],[\"rlhar\",[8652]],[\"rlm\",[8207]],[\"rmoustache\",[9137]],[\"rmoust\",[9137]],[\"rnmid\",[10990]],[\"roang\",[10221]],[\"roarr\",[8702]],[\"robrk\",[10215]],[\"ropar\",[10630]],[\"ropf\",[120163]],[\"Ropf\",[8477]],[\"roplus\",[10798]],[\"rotimes\",[10805]],[\"RoundImplies\",[10608]],[\"rpar\",[41]],[\"rpargt\",[10644]],[\"rppolint\",[10770]],[\"rrarr\",[8649]],[\"Rrightarrow\",[8667]],[\"rsaquo\",[8250]],[\"rscr\",[120007]],[\"Rscr\",[8475]],[\"rsh\",[8625]],[\"Rsh\",[8625]],[\"rsqb\",[93]],[\"rsquo\",[8217]],[\"rsquor\",[8217]],[\"CloseCurlyQuote\",[8217]],[\"rthree\",[8908]],[\"rtimes\",[8906]],[\"rtri\",[9657]],[\"rtrie\",[8885]],[\"rtrif\",[9656]],[\"rtriltri\",[10702]],[\"RuleDelayed\",[10740]],[\"ruluhar\",[10600]],[\"rx\",[8478]],[\"Sacute\",[346]],[\"sacute\",[347]],[\"sbquo\",[8218]],[\"scap\",[10936]],[\"Scaron\",[352]],[\"scaron\",[353]],[\"Sc\",[10940]],[\"sc\",[8827]],[\"sccue\",[8829]],[\"sce\",[10928]],[\"scE\",[10932]],[\"Scedil\",[350]],[\"scedil\",[351]],[\"Scirc\",[348]],[\"scirc\",[349]],[\"scnap\",[10938]],[\"scnE\",[10934]],[\"scnsim\",[8937]],[\"scpolint\",[10771]],[\"scsim\",[8831]],[\"Scy\",[1057]],[\"scy\",[1089]],[\"sdotb\",[8865]],[\"sdot\",[8901]],[\"sdote\",[10854]],[\"searhk\",[10533]],[\"searr\",[8600]],[\"seArr\",[8664]],[\"searrow\",[8600]],[\"sect\",[167]],[\"semi\",[59]],[\"seswar\",[10537]],[\"setminus\",[8726]],[\"setmn\",[8726]],[\"sext\",[10038]],[\"Sfr\",[120086]],[\"sfr\",[120112]],[\"sfrown\",[8994]],[\"sharp\",[9839]],[\"SHCHcy\",[1065]],[\"shchcy\",[1097]],[\"SHcy\",[1064]],[\"shcy\",[1096]],[\"ShortDownArrow\",[8595]],[\"ShortLeftArrow\",[8592]],[\"shortmid\",[8739]],[\"shortparallel\",[8741]],[\"ShortRightArrow\",[8594]],[\"ShortUpArrow\",[8593]],[\"shy\",[173]],[\"Sigma\",[931]],[\"sigma\",[963]],[\"sigmaf\",[962]],[\"sigmav\",[962]],[\"sim\",[8764]],[\"simdot\",[10858]],[\"sime\",[8771]],[\"simeq\",[8771]],[\"simg\",[10910]],[\"simgE\",[10912]],[\"siml\",[10909]],[\"simlE\",[10911]],[\"simne\",[8774]],[\"simplus\",[10788]],[\"simrarr\",[10610]],[\"slarr\",[8592]],[\"SmallCircle\",[8728]],[\"smallsetminus\",[8726]],[\"smashp\",[10803]],[\"smeparsl\",[10724]],[\"smid\",[8739]],[\"smile\",[8995]],[\"smt\",[10922]],[\"smte\",[10924]],[\"smtes\",[10924,65024]],[\"SOFTcy\",[1068]],[\"softcy\",[1100]],[\"solbar\",[9023]],[\"solb\",[10692]],[\"sol\",[47]],[\"Sopf\",[120138]],[\"sopf\",[120164]],[\"spades\",[9824]],[\"spadesuit\",[9824]],[\"spar\",[8741]],[\"sqcap\",[8851]],[\"sqcaps\",[8851,65024]],[\"sqcup\",[8852]],[\"sqcups\",[8852,65024]],[\"Sqrt\",[8730]],[\"sqsub\",[8847]],[\"sqsube\",[8849]],[\"sqsubset\",[8847]],[\"sqsubseteq\",[8849]],[\"sqsup\",[8848]],[\"sqsupe\",[8850]],[\"sqsupset\",[8848]],[\"sqsupseteq\",[8850]],[\"square\",[9633]],[\"Square\",[9633]],[\"SquareIntersection\",[8851]],[\"SquareSubset\",[8847]],[\"SquareSubsetEqual\",[8849]],[\"SquareSuperset\",[8848]],[\"SquareSupersetEqual\",[8850]],[\"SquareUnion\",[8852]],[\"squarf\",[9642]],[\"squ\",[9633]],[\"squf\",[9642]],[\"srarr\",[8594]],[\"Sscr\",[119982]],[\"sscr\",[120008]],[\"ssetmn\",[8726]],[\"ssmile\",[8995]],[\"sstarf\",[8902]],[\"Star\",[8902]],[\"star\",[9734]],[\"starf\",[9733]],[\"straightepsilon\",[1013]],[\"straightphi\",[981]],[\"strns\",[175]],[\"sub\",[8834]],[\"Sub\",[8912]],[\"subdot\",[10941]],[\"subE\",[10949]],[\"sube\",[8838]],[\"subedot\",[10947]],[\"submult\",[10945]],[\"subnE\",[10955]],[\"subne\",[8842]],[\"subplus\",[10943]],[\"subrarr\",[10617]],[\"subset\",[8834]],[\"Subset\",[8912]],[\"subseteq\",[8838]],[\"subseteqq\",[10949]],[\"SubsetEqual\",[8838]],[\"subsetneq\",[8842]],[\"subsetneqq\",[10955]],[\"subsim\",[10951]],[\"subsub\",[10965]],[\"subsup\",[10963]],[\"succapprox\",[10936]],[\"succ\",[8827]],[\"succcurlyeq\",[8829]],[\"Succeeds\",[8827]],[\"SucceedsEqual\",[10928]],[\"SucceedsSlantEqual\",[8829]],[\"SucceedsTilde\",[8831]],[\"succeq\",[10928]],[\"succnapprox\",[10938]],[\"succneqq\",[10934]],[\"succnsim\",[8937]],[\"succsim\",[8831]],[\"SuchThat\",[8715]],[\"sum\",[8721]],[\"Sum\",[8721]],[\"sung\",[9834]],[\"sup1\",[185]],[\"sup2\",[178]],[\"sup3\",[179]],[\"sup\",[8835]],[\"Sup\",[8913]],[\"supdot\",[10942]],[\"supdsub\",[10968]],[\"supE\",[10950]],[\"supe\",[8839]],[\"supedot\",[10948]],[\"Superset\",[8835]],[\"SupersetEqual\",[8839]],[\"suphsol\",[10185]],[\"suphsub\",[10967]],[\"suplarr\",[10619]],[\"supmult\",[10946]],[\"supnE\",[10956]],[\"supne\",[8843]],[\"supplus\",[10944]],[\"supset\",[8835]],[\"Supset\",[8913]],[\"supseteq\",[8839]],[\"supseteqq\",[10950]],[\"supsetneq\",[8843]],[\"supsetneqq\",[10956]],[\"supsim\",[10952]],[\"supsub\",[10964]],[\"supsup\",[10966]],[\"swarhk\",[10534]],[\"swarr\",[8601]],[\"swArr\",[8665]],[\"swarrow\",[8601]],[\"swnwar\",[10538]],[\"szlig\",[223]],[\"Tab\",[9]],[\"target\",[8982]],[\"Tau\",[932]],[\"tau\",[964]],[\"tbrk\",[9140]],[\"Tcaron\",[356]],[\"tcaron\",[357]],[\"Tcedil\",[354]],[\"tcedil\",[355]],[\"Tcy\",[1058]],[\"tcy\",[1090]],[\"tdot\",[8411]],[\"telrec\",[8981]],[\"Tfr\",[120087]],[\"tfr\",[120113]],[\"there4\",[8756]],[\"therefore\",[8756]],[\"Therefore\",[8756]],[\"Theta\",[920]],[\"theta\",[952]],[\"thetasym\",[977]],[\"thetav\",[977]],[\"thickapprox\",[8776]],[\"thicksim\",[8764]],[\"ThickSpace\",[8287,8202]],[\"ThinSpace\",[8201]],[\"thinsp\",[8201]],[\"thkap\",[8776]],[\"thksim\",[8764]],[\"THORN\",[222]],[\"thorn\",[254]],[\"tilde\",[732]],[\"Tilde\",[8764]],[\"TildeEqual\",[8771]],[\"TildeFullEqual\",[8773]],[\"TildeTilde\",[8776]],[\"timesbar\",[10801]],[\"timesb\",[8864]],[\"times\",[215]],[\"timesd\",[10800]],[\"tint\",[8749]],[\"toea\",[10536]],[\"topbot\",[9014]],[\"topcir\",[10993]],[\"top\",[8868]],[\"Topf\",[120139]],[\"topf\",[120165]],[\"topfork\",[10970]],[\"tosa\",[10537]],[\"tprime\",[8244]],[\"trade\",[8482]],[\"TRADE\",[8482]],[\"triangle\",[9653]],[\"triangledown\",[9663]],[\"triangleleft\",[9667]],[\"trianglelefteq\",[8884]],[\"triangleq\",[8796]],[\"triangleright\",[9657]],[\"trianglerighteq\",[8885]],[\"tridot\",[9708]],[\"trie\",[8796]],[\"triminus\",[10810]],[\"TripleDot\",[8411]],[\"triplus\",[10809]],[\"trisb\",[10701]],[\"tritime\",[10811]],[\"trpezium\",[9186]],[\"Tscr\",[119983]],[\"tscr\",[120009]],[\"TScy\",[1062]],[\"tscy\",[1094]],[\"TSHcy\",[1035]],[\"tshcy\",[1115]],[\"Tstrok\",[358]],[\"tstrok\",[359]],[\"twixt\",[8812]],[\"twoheadleftarrow\",[8606]],[\"twoheadrightarrow\",[8608]],[\"Uacute\",[218]],[\"uacute\",[250]],[\"uarr\",[8593]],[\"Uarr\",[8607]],[\"uArr\",[8657]],[\"Uarrocir\",[10569]],[\"Ubrcy\",[1038]],[\"ubrcy\",[1118]],[\"Ubreve\",[364]],[\"ubreve\",[365]],[\"Ucirc\",[219]],[\"ucirc\",[251]],[\"Ucy\",[1059]],[\"ucy\",[1091]],[\"udarr\",[8645]],[\"Udblac\",[368]],[\"udblac\",[369]],[\"udhar\",[10606]],[\"ufisht\",[10622]],[\"Ufr\",[120088]],[\"ufr\",[120114]],[\"Ugrave\",[217]],[\"ugrave\",[249]],[\"uHar\",[10595]],[\"uharl\",[8639]],[\"uharr\",[8638]],[\"uhblk\",[9600]],[\"ulcorn\",[8988]],[\"ulcorner\",[8988]],[\"ulcrop\",[8975]],[\"ultri\",[9720]],[\"Umacr\",[362]],[\"umacr\",[363]],[\"uml\",[168]],[\"UnderBar\",[95]],[\"UnderBrace\",[9183]],[\"UnderBracket\",[9141]],[\"UnderParenthesis\",[9181]],[\"Union\",[8899]],[\"UnionPlus\",[8846]],[\"Uogon\",[370]],[\"uogon\",[371]],[\"Uopf\",[120140]],[\"uopf\",[120166]],[\"UpArrowBar\",[10514]],[\"uparrow\",[8593]],[\"UpArrow\",[8593]],[\"Uparrow\",[8657]],[\"UpArrowDownArrow\",[8645]],[\"updownarrow\",[8597]],[\"UpDownArrow\",[8597]],[\"Updownarrow\",[8661]],[\"UpEquilibrium\",[10606]],[\"upharpoonleft\",[8639]],[\"upharpoonright\",[8638]],[\"uplus\",[8846]],[\"UpperLeftArrow\",[8598]],[\"UpperRightArrow\",[8599]],[\"upsi\",[965]],[\"Upsi\",[978]],[\"upsih\",[978]],[\"Upsilon\",[933]],[\"upsilon\",[965]],[\"UpTeeArrow\",[8613]],[\"UpTee\",[8869]],[\"upuparrows\",[8648]],[\"urcorn\",[8989]],[\"urcorner\",[8989]],[\"urcrop\",[8974]],[\"Uring\",[366]],[\"uring\",[367]],[\"urtri\",[9721]],[\"Uscr\",[119984]],[\"uscr\",[120010]],[\"utdot\",[8944]],[\"Utilde\",[360]],[\"utilde\",[361]],[\"utri\",[9653]],[\"utrif\",[9652]],[\"uuarr\",[8648]],[\"Uuml\",[220]],[\"uuml\",[252]],[\"uwangle\",[10663]],[\"vangrt\",[10652]],[\"varepsilon\",[1013]],[\"varkappa\",[1008]],[\"varnothing\",[8709]],[\"varphi\",[981]],[\"varpi\",[982]],[\"varpropto\",[8733]],[\"varr\",[8597]],[\"vArr\",[8661]],[\"varrho\",[1009]],[\"varsigma\",[962]],[\"varsubsetneq\",[8842,65024]],[\"varsubsetneqq\",[10955,65024]],[\"varsupsetneq\",[8843,65024]],[\"varsupsetneqq\",[10956,65024]],[\"vartheta\",[977]],[\"vartriangleleft\",[8882]],[\"vartriangleright\",[8883]],[\"vBar\",[10984]],[\"Vbar\",[10987]],[\"vBarv\",[10985]],[\"Vcy\",[1042]],[\"vcy\",[1074]],[\"vdash\",[8866]],[\"vDash\",[8872]],[\"Vdash\",[8873]],[\"VDash\",[8875]],[\"Vdashl\",[10982]],[\"veebar\",[8891]],[\"vee\",[8744]],[\"Vee\",[8897]],[\"veeeq\",[8794]],[\"vellip\",[8942]],[\"verbar\",[124]],[\"Verbar\",[8214]],[\"vert\",[124]],[\"Vert\",[8214]],[\"VerticalBar\",[8739]],[\"VerticalLine\",[124]],[\"VerticalSeparator\",[10072]],[\"VerticalTilde\",[8768]],[\"VeryThinSpace\",[8202]],[\"Vfr\",[120089]],[\"vfr\",[120115]],[\"vltri\",[8882]],[\"vnsub\",[8834,8402]],[\"vnsup\",[8835,8402]],[\"Vopf\",[120141]],[\"vopf\",[120167]],[\"vprop\",[8733]],[\"vrtri\",[8883]],[\"Vscr\",[119985]],[\"vscr\",[120011]],[\"vsubnE\",[10955,65024]],[\"vsubne\",[8842,65024]],[\"vsupnE\",[10956,65024]],[\"vsupne\",[8843,65024]],[\"Vvdash\",[8874]],[\"vzigzag\",[10650]],[\"Wcirc\",[372]],[\"wcirc\",[373]],[\"wedbar\",[10847]],[\"wedge\",[8743]],[\"Wedge\",[8896]],[\"wedgeq\",[8793]],[\"weierp\",[8472]],[\"Wfr\",[120090]],[\"wfr\",[120116]],[\"Wopf\",[120142]],[\"wopf\",[120168]],[\"wp\",[8472]],[\"wr\",[8768]],[\"wreath\",[8768]],[\"Wscr\",[119986]],[\"wscr\",[120012]],[\"xcap\",[8898]],[\"xcirc\",[9711]],[\"xcup\",[8899]],[\"xdtri\",[9661]],[\"Xfr\",[120091]],[\"xfr\",[120117]],[\"xharr\",[10231]],[\"xhArr\",[10234]],[\"Xi\",[926]],[\"xi\",[958]],[\"xlarr\",[10229]],[\"xlArr\",[10232]],[\"xmap\",[10236]],[\"xnis\",[8955]],[\"xodot\",[10752]],[\"Xopf\",[120143]],[\"xopf\",[120169]],[\"xoplus\",[10753]],[\"xotime\",[10754]],[\"xrarr\",[10230]],[\"xrArr\",[10233]],[\"Xscr\",[119987]],[\"xscr\",[120013]],[\"xsqcup\",[10758]],[\"xuplus\",[10756]],[\"xutri\",[9651]],[\"xvee\",[8897]],[\"xwedge\",[8896]],[\"Yacute\",[221]],[\"yacute\",[253]],[\"YAcy\",[1071]],[\"yacy\",[1103]],[\"Ycirc\",[374]],[\"ycirc\",[375]],[\"Ycy\",[1067]],[\"ycy\",[1099]],[\"yen\",[165]],[\"Yfr\",[120092]],[\"yfr\",[120118]],[\"YIcy\",[1031]],[\"yicy\",[1111]],[\"Yopf\",[120144]],[\"yopf\",[120170]],[\"Yscr\",[119988]],[\"yscr\",[120014]],[\"YUcy\",[1070]],[\"yucy\",[1102]],[\"yuml\",[255]],[\"Yuml\",[376]],[\"Zacute\",[377]],[\"zacute\",[378]],[\"Zcaron\",[381]],[\"zcaron\",[382]],[\"Zcy\",[1047]],[\"zcy\",[1079]],[\"Zdot\",[379]],[\"zdot\",[380]],[\"zeetrf\",[8488]],[\"ZeroWidthSpace\",[8203]],[\"Zeta\",[918]],[\"zeta\",[950]],[\"zfr\",[120119]],[\"Zfr\",[8488]],[\"ZHcy\",[1046]],[\"zhcy\",[1078]],[\"zigrarr\",[8669]],[\"zopf\",[120171]],[\"Zopf\",[8484]],[\"Zscr\",[119989]],[\"zscr\",[120015]],[\"zwj\",[8205]],[\"zwnj\",[8204]]],r={},u={};function o(){}!function(e,t){var r=n.length,u=[];for(;r--;){var o,i=n[r],a=i[0],l=i[1],c=l[0],s=c<32||c>126||62===c||60===c||38===c||34===c||39===c;if(s&&(o=t[c]=t[c]||{}),l[1]){var f=l[1];e[a]=String.fromCharCode(c)+String.fromCharCode(f),u.push(s&&(o[f]=a))}else e[a]=String.fromCharCode(c),u.push(s&&(o[\"\"]=a))}}(r,u),o.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var n;if(\"#\"===t.charAt(0)){var u=\"x\"===t.charAt(1)?parseInt(t.substr(2).toLowerCase(),16):parseInt(t.substr(1));isNaN(u)||u<-32768||u>65535||(n=String.fromCharCode(u))}else n=r[t];return n||e})):\"\"},o.decode=function(e){return(new o).decode(e)},o.prototype.encode=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var o=u[e.charCodeAt(r)];if(o){var i=o[e.charCodeAt(r+1)];if(i?r++:i=o[\"\"],i){n+=\"&\"+i+\";\",r++;continue}}n+=e.charAt(r),r++}return n},o.encode=function(e){return(new o).encode(e)},o.prototype.encodeNonUTF=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var o=e.charCodeAt(r),i=u[o];if(i){var a=i[e.charCodeAt(r+1)];if(a?r++:a=i[\"\"],a){n+=\"&\"+a+\";\",r++;continue}}n+=o<32||o>126?\"&#\"+o+\";\":e.charAt(r),r++}return n},o.encodeNonUTF=function(e){return(new o).encodeNonUTF(e)},o.prototype.encodeNonASCII=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var u=e.charCodeAt(r);u<=255?n+=e[r++]:(n+=\"&#\"+u+\";\",r++)}return n},o.encodeNonASCII=function(e){return(new o).encodeNonASCII(e)},e.exports=o},function(e,t){!function(){\"use strict\";var t,n,r,u,o,i;function a(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(Math.floor((e-65536)/1024)+55296)+String.fromCharCode((e-65536)%1024+56320)}for(n={NonAsciiIdentifierStart:/[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B4\\u08B6-\\u08BD\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u1884\\u1887-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C88\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]/,NonAsciiIdentifierPart:/[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B4\\u08B6-\\u08BD\\u08D4-\\u08E1\\u08E3-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0AF9\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C80-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D54-\\u0D57\\u0D5F-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1C80-\\u1C88\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFB-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C5\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA8FD\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]/},t={NonAsciiIdentifierStart:/[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B4\\u08B6-\\u08BD\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0AF9\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58-\\u0C5A\\u0C60\\u0C61\\u0C80\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D54-\\u0D56\\u0D5F-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1C80-\\u1C88\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2118-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309B-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA8FD\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDF00-\\uDF1F\\uDF30-\\uDF4A\\uDF50-\\uDF75\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00\\uDE10-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE4\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2]|\\uD804[\\uDC03-\\uDC37\\uDC83-\\uDCAF\\uDCD0-\\uDCE8\\uDD03-\\uDD26\\uDD50-\\uDD72\\uDD76\\uDD83-\\uDDB2\\uDDC1-\\uDDC4\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE2B\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEDE\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3D\\uDF50\\uDF5D-\\uDF61]|\\uD805[\\uDC00-\\uDC34\\uDC47-\\uDC4A\\uDC80-\\uDCAF\\uDCC4\\uDCC5\\uDCC7\\uDD80-\\uDDAE\\uDDD8-\\uDDDB\\uDE00-\\uDE2F\\uDE44\\uDE80-\\uDEAA\\uDF00-\\uDF19]|\\uD806[\\uDCA0-\\uDCDF\\uDCFF\\uDEC0-\\uDEF8]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC2E\\uDC40\\uDC72-\\uDC8F]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|[\\uD80C\\uD81C-\\uD820\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2E]|\\uD811[\\uDC00-\\uDE46]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDED0-\\uDEED\\uDF00-\\uDF2F\\uDF40-\\uDF43\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDF00-\\uDF44\\uDF50\\uDF93-\\uDF9F\\uDFE0]|\\uD821[\\uDC00-\\uDFEC]|\\uD822[\\uDC00-\\uDEF2]|\\uD82C[\\uDC00\\uDC01]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB]|\\uD83A[\\uDC00-\\uDCC4\\uDD00-\\uDD43]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]/,NonAsciiIdentifierPart:/[\\xAA\\xB5\\xB7\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B4\\u08B6-\\u08BD\\u08D4-\\u08E1\\u08E3-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0AF9\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58-\\u0C5A\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C80-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D54-\\u0D57\\u0D5F-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1369-\\u1371\\u1380-\\u138F\\u13A0-\\u13F5\\u13F8-\\u13FD\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19DA\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1C80-\\u1C88\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFB-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2118-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FD5\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA7AE\\uA7B0-\\uA7B7\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C5\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA8FD\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB65\\uAB70-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]|\\uD800[\\uDC00-\\uDC0B\\uDC0D-\\uDC26\\uDC28-\\uDC3A\\uDC3C\\uDC3D\\uDC3F-\\uDC4D\\uDC50-\\uDC5D\\uDC80-\\uDCFA\\uDD40-\\uDD74\\uDDFD\\uDE80-\\uDE9C\\uDEA0-\\uDED0\\uDEE0\\uDF00-\\uDF1F\\uDF30-\\uDF4A\\uDF50-\\uDF7A\\uDF80-\\uDF9D\\uDFA0-\\uDFC3\\uDFC8-\\uDFCF\\uDFD1-\\uDFD5]|\\uD801[\\uDC00-\\uDC9D\\uDCA0-\\uDCA9\\uDCB0-\\uDCD3\\uDCD8-\\uDCFB\\uDD00-\\uDD27\\uDD30-\\uDD63\\uDE00-\\uDF36\\uDF40-\\uDF55\\uDF60-\\uDF67]|\\uD802[\\uDC00-\\uDC05\\uDC08\\uDC0A-\\uDC35\\uDC37\\uDC38\\uDC3C\\uDC3F-\\uDC55\\uDC60-\\uDC76\\uDC80-\\uDC9E\\uDCE0-\\uDCF2\\uDCF4\\uDCF5\\uDD00-\\uDD15\\uDD20-\\uDD39\\uDD80-\\uDDB7\\uDDBE\\uDDBF\\uDE00-\\uDE03\\uDE05\\uDE06\\uDE0C-\\uDE13\\uDE15-\\uDE17\\uDE19-\\uDE33\\uDE38-\\uDE3A\\uDE3F\\uDE60-\\uDE7C\\uDE80-\\uDE9C\\uDEC0-\\uDEC7\\uDEC9-\\uDEE6\\uDF00-\\uDF35\\uDF40-\\uDF55\\uDF60-\\uDF72\\uDF80-\\uDF91]|\\uD803[\\uDC00-\\uDC48\\uDC80-\\uDCB2\\uDCC0-\\uDCF2]|\\uD804[\\uDC00-\\uDC46\\uDC66-\\uDC6F\\uDC7F-\\uDCBA\\uDCD0-\\uDCE8\\uDCF0-\\uDCF9\\uDD00-\\uDD34\\uDD36-\\uDD3F\\uDD50-\\uDD73\\uDD76\\uDD80-\\uDDC4\\uDDCA-\\uDDCC\\uDDD0-\\uDDDA\\uDDDC\\uDE00-\\uDE11\\uDE13-\\uDE37\\uDE3E\\uDE80-\\uDE86\\uDE88\\uDE8A-\\uDE8D\\uDE8F-\\uDE9D\\uDE9F-\\uDEA8\\uDEB0-\\uDEEA\\uDEF0-\\uDEF9\\uDF00-\\uDF03\\uDF05-\\uDF0C\\uDF0F\\uDF10\\uDF13-\\uDF28\\uDF2A-\\uDF30\\uDF32\\uDF33\\uDF35-\\uDF39\\uDF3C-\\uDF44\\uDF47\\uDF48\\uDF4B-\\uDF4D\\uDF50\\uDF57\\uDF5D-\\uDF63\\uDF66-\\uDF6C\\uDF70-\\uDF74]|\\uD805[\\uDC00-\\uDC4A\\uDC50-\\uDC59\\uDC80-\\uDCC5\\uDCC7\\uDCD0-\\uDCD9\\uDD80-\\uDDB5\\uDDB8-\\uDDC0\\uDDD8-\\uDDDD\\uDE00-\\uDE40\\uDE44\\uDE50-\\uDE59\\uDE80-\\uDEB7\\uDEC0-\\uDEC9\\uDF00-\\uDF19\\uDF1D-\\uDF2B\\uDF30-\\uDF39]|\\uD806[\\uDCA0-\\uDCE9\\uDCFF\\uDEC0-\\uDEF8]|\\uD807[\\uDC00-\\uDC08\\uDC0A-\\uDC36\\uDC38-\\uDC40\\uDC50-\\uDC59\\uDC72-\\uDC8F\\uDC92-\\uDCA7\\uDCA9-\\uDCB6]|\\uD808[\\uDC00-\\uDF99]|\\uD809[\\uDC00-\\uDC6E\\uDC80-\\uDD43]|[\\uD80C\\uD81C-\\uD820\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872][\\uDC00-\\uDFFF]|\\uD80D[\\uDC00-\\uDC2E]|\\uD811[\\uDC00-\\uDE46]|\\uD81A[\\uDC00-\\uDE38\\uDE40-\\uDE5E\\uDE60-\\uDE69\\uDED0-\\uDEED\\uDEF0-\\uDEF4\\uDF00-\\uDF36\\uDF40-\\uDF43\\uDF50-\\uDF59\\uDF63-\\uDF77\\uDF7D-\\uDF8F]|\\uD81B[\\uDF00-\\uDF44\\uDF50-\\uDF7E\\uDF8F-\\uDF9F\\uDFE0]|\\uD821[\\uDC00-\\uDFEC]|\\uD822[\\uDC00-\\uDEF2]|\\uD82C[\\uDC00\\uDC01]|\\uD82F[\\uDC00-\\uDC6A\\uDC70-\\uDC7C\\uDC80-\\uDC88\\uDC90-\\uDC99\\uDC9D\\uDC9E]|\\uD834[\\uDD65-\\uDD69\\uDD6D-\\uDD72\\uDD7B-\\uDD82\\uDD85-\\uDD8B\\uDDAA-\\uDDAD\\uDE42-\\uDE44]|\\uD835[\\uDC00-\\uDC54\\uDC56-\\uDC9C\\uDC9E\\uDC9F\\uDCA2\\uDCA5\\uDCA6\\uDCA9-\\uDCAC\\uDCAE-\\uDCB9\\uDCBB\\uDCBD-\\uDCC3\\uDCC5-\\uDD05\\uDD07-\\uDD0A\\uDD0D-\\uDD14\\uDD16-\\uDD1C\\uDD1E-\\uDD39\\uDD3B-\\uDD3E\\uDD40-\\uDD44\\uDD46\\uDD4A-\\uDD50\\uDD52-\\uDEA5\\uDEA8-\\uDEC0\\uDEC2-\\uDEDA\\uDEDC-\\uDEFA\\uDEFC-\\uDF14\\uDF16-\\uDF34\\uDF36-\\uDF4E\\uDF50-\\uDF6E\\uDF70-\\uDF88\\uDF8A-\\uDFA8\\uDFAA-\\uDFC2\\uDFC4-\\uDFCB\\uDFCE-\\uDFFF]|\\uD836[\\uDE00-\\uDE36\\uDE3B-\\uDE6C\\uDE75\\uDE84\\uDE9B-\\uDE9F\\uDEA1-\\uDEAF]|\\uD838[\\uDC00-\\uDC06\\uDC08-\\uDC18\\uDC1B-\\uDC21\\uDC23\\uDC24\\uDC26-\\uDC2A]|\\uD83A[\\uDC00-\\uDCC4\\uDCD0-\\uDCD6\\uDD00-\\uDD4A\\uDD50-\\uDD59]|\\uD83B[\\uDE00-\\uDE03\\uDE05-\\uDE1F\\uDE21\\uDE22\\uDE24\\uDE27\\uDE29-\\uDE32\\uDE34-\\uDE37\\uDE39\\uDE3B\\uDE42\\uDE47\\uDE49\\uDE4B\\uDE4D-\\uDE4F\\uDE51\\uDE52\\uDE54\\uDE57\\uDE59\\uDE5B\\uDE5D\\uDE5F\\uDE61\\uDE62\\uDE64\\uDE67-\\uDE6A\\uDE6C-\\uDE72\\uDE74-\\uDE77\\uDE79-\\uDE7C\\uDE7E\\uDE80-\\uDE89\\uDE8B-\\uDE9B\\uDEA1-\\uDEA3\\uDEA5-\\uDEA9\\uDEAB-\\uDEBB]|\\uD869[\\uDC00-\\uDED6\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF34\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1]|\\uD87E[\\uDC00-\\uDE1D]|\\uDB40[\\uDD00-\\uDDEF]/},r=[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],u=new Array(128),i=0;i<128;++i)u[i]=i>=97&&i<=122||i>=65&&i<=90||36===i||95===i;for(o=new Array(128),i=0;i<128;++i)o[i]=i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||36===i||95===i;e.exports={isDecimalDigit:function(e){return 48<=e&&e<=57},isHexDigit:function(e){return 48<=e&&e<=57||97<=e&&e<=102||65<=e&&e<=70},isOctalDigit:function(e){return e>=48&&e<=55},isWhiteSpace:function(e){return 32===e||9===e||11===e||12===e||160===e||e>=5760&&r.indexOf(e)>=0},isLineTerminator:function(e){return 10===e||13===e||8232===e||8233===e},isIdentifierStartES5:function(e){return e<128?u[e]:n.NonAsciiIdentifierStart.test(a(e))},isIdentifierPartES5:function(e){return e<128?o[e]:n.NonAsciiIdentifierPart.test(a(e))},isIdentifierStartES6:function(e){return e<128?u[e]:t.NonAsciiIdentifierStart.test(a(e))},isIdentifierPartES6:function(e){return e<128?o[e]:t.NonAsciiIdentifierPart.test(a(e))}}}()},function(e,t,n){var r=n(201),u={};for(var o in r)r.hasOwnProperty(o)&&(u[r[o]]=o);var i=e.exports={rgb:{channels:3,labels:\"rgb\"},hsl:{channels:3,labels:\"hsl\"},hsv:{channels:3,labels:\"hsv\"},hwb:{channels:3,labels:\"hwb\"},cmyk:{channels:4,labels:\"cmyk\"},xyz:{channels:3,labels:\"xyz\"},lab:{channels:3,labels:\"lab\"},lch:{channels:3,labels:\"lch\"},hex:{channels:1,labels:[\"hex\"]},keyword:{channels:1,labels:[\"keyword\"]},ansi16:{channels:1,labels:[\"ansi16\"]},ansi256:{channels:1,labels:[\"ansi256\"]},hcg:{channels:3,labels:[\"h\",\"c\",\"g\"]},apple:{channels:3,labels:[\"r16\",\"g16\",\"b16\"]},gray:{channels:1,labels:[\"gray\"]}};for(var a in i)if(i.hasOwnProperty(a)){if(!(\"channels\"in i[a]))throw new Error(\"missing channels property: \"+a);if(!(\"labels\"in i[a]))throw new Error(\"missing channel labels property: \"+a);if(i[a].labels.length!==i[a].channels)throw new Error(\"channel and label counts mismatch: \"+a);var l=i[a].channels,c=i[a].labels;delete i[a].channels,delete i[a].labels,Object.defineProperty(i[a],\"channels\",{value:l}),Object.defineProperty(i[a],\"labels\",{value:c})}i.rgb.hsl=function(e){var t,n,r=e[0]/255,u=e[1]/255,o=e[2]/255,i=Math.min(r,u,o),a=Math.max(r,u,o),l=a-i;return a===i?t=0:r===a?t=(u-o)/l:u===a?t=2+(o-r)/l:o===a&&(t=4+(r-u)/l),(t=Math.min(60*t,360))<0&&(t+=360),n=(i+a)/2,[t,100*(a===i?0:n<=.5?l/(a+i):l/(2-a-i)),100*n]},i.rgb.hsv=function(e){var t,n,r,u,o,i=e[0]/255,a=e[1]/255,l=e[2]/255,c=Math.max(i,a,l),s=c-Math.min(i,a,l),f=function(e){return(c-e)/6/s+.5};return 0===s?u=o=0:(o=s/c,t=f(i),n=f(a),r=f(l),i===c?u=r-n:a===c?u=1/3+t-r:l===c&&(u=2/3+n-t),u<0?u+=1:u>1&&(u-=1)),[360*u,100*o,100*c]},i.rgb.hwb=function(e){var t=e[0],n=e[1],r=e[2];return[i.rgb.hsl(e)[0],100*(1/255*Math.min(t,Math.min(n,r))),100*(r=1-1/255*Math.max(t,Math.max(n,r)))]},i.rgb.cmyk=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255;return[100*((1-n-(t=Math.min(1-n,1-r,1-u)))/(1-t)||0),100*((1-r-t)/(1-t)||0),100*((1-u-t)/(1-t)||0),100*t]},i.rgb.keyword=function(e){var t=u[e];if(t)return t;var n,o,i,a=1/0;for(var l in r)if(r.hasOwnProperty(l)){var c=r[l],s=(o=e,i=c,Math.pow(o[0]-i[0],2)+Math.pow(o[1]-i[1],2)+Math.pow(o[2]-i[2],2));s<a&&(a=s,n=l)}return n},i.keyword.rgb=function(e){return r[e]},i.rgb.xyz=function(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)),100*(.2126*t+.7152*n+.0722*r),100*(.0193*t+.1192*n+.9505*r)]},i.rgb.lab=function(e){var t=i.rgb.xyz(e),n=t[0],r=t[1],u=t[2];return r/=100,u/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(n-r),200*(r-(u=u>.008856?Math.pow(u,1/3):7.787*u+16/116))]},i.hsl.rgb=function(e){var t,n,r,u,o,i=e[0]/360,a=e[1]/100,l=e[2]/100;if(0===a)return[o=255*l,o,o];t=2*l-(n=l<.5?l*(1+a):l+a-l*a),u=[0,0,0];for(var c=0;c<3;c++)(r=i+1/3*-(c-1))<0&&r++,r>1&&r--,o=6*r<1?t+6*(n-t)*r:2*r<1?n:3*r<2?t+(n-t)*(2/3-r)*6:t,u[c]=255*o;return u},i.hsl.hsv=function(e){var t=e[0],n=e[1]/100,r=e[2]/100,u=n,o=Math.max(r,.01);return n*=(r*=2)<=1?r:2-r,u*=o<=1?o:2-o,[t,100*(0===r?2*u/(o+u):2*n/(r+n)),100*((r+n)/2)]},i.hsv.rgb=function(e){var t=e[0]/60,n=e[1]/100,r=e[2]/100,u=Math.floor(t)%6,o=t-Math.floor(t),i=255*r*(1-n),a=255*r*(1-n*o),l=255*r*(1-n*(1-o));switch(r*=255,u){case 0:return[r,l,i];case 1:return[a,r,i];case 2:return[i,r,l];case 3:return[i,a,r];case 4:return[l,i,r];case 5:return[r,i,a]}},i.hsv.hsl=function(e){var t,n,r,u=e[0],o=e[1]/100,i=e[2]/100,a=Math.max(i,.01);return r=(2-o)*i,n=o*a,[u,100*(n=(n/=(t=(2-o)*a)<=1?t:2-t)||0),100*(r/=2)]},i.hwb.rgb=function(e){var t,n,r,u,o,i,a,l=e[0]/360,c=e[1]/100,s=e[2]/100,f=c+s;switch(f>1&&(c/=f,s/=f),r=6*l-(t=Math.floor(6*l)),0!==(1&t)&&(r=1-r),u=c+r*((n=1-s)-c),t){default:case 6:case 0:o=n,i=u,a=c;break;case 1:o=u,i=n,a=c;break;case 2:o=c,i=n,a=u;break;case 3:o=c,i=u,a=n;break;case 4:o=u,i=c,a=n;break;case 5:o=n,i=c,a=u}return[255*o,255*i,255*a]},i.cmyk.rgb=function(e){var t=e[0]/100,n=e[1]/100,r=e[2]/100,u=e[3]/100;return[255*(1-Math.min(1,t*(1-u)+u)),255*(1-Math.min(1,n*(1-u)+u)),255*(1-Math.min(1,r*(1-u)+u))]},i.xyz.rgb=function(e){var t,n,r,u=e[0]/100,o=e[1]/100,i=e[2]/100;return n=-.9689*u+1.8758*o+.0415*i,r=.0557*u+-.204*o+1.057*i,t=(t=3.2406*u+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(r=Math.min(Math.max(0,r),1))]},i.xyz.lab=function(e){var t=e[0],n=e[1],r=e[2];return n/=100,r/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116))]},i.lab.xyz=function(e){var t,n,r,u=e[0];t=e[1]/500+(n=(u+16)/116),r=n-e[2]/200;var o=Math.pow(n,3),i=Math.pow(t,3),a=Math.pow(r,3);return n=o>.008856?o:(n-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,r=a>.008856?a:(r-16/116)/7.787,[t*=95.047,n*=100,r*=108.883]},i.lab.lch=function(e){var t,n=e[0],r=e[1],u=e[2];return(t=360*Math.atan2(u,r)/2/Math.PI)<0&&(t+=360),[n,Math.sqrt(r*r+u*u),t]},i.lch.lab=function(e){var t,n=e[0],r=e[1];return t=e[2]/360*2*Math.PI,[n,r*Math.cos(t),r*Math.sin(t)]},i.rgb.ansi16=function(e){var t=e[0],n=e[1],r=e[2],u=1 in arguments?arguments[1]:i.rgb.hsv(e)[2];if(0===(u=Math.round(u/50)))return 30;var o=30+(Math.round(r/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===u&&(o+=60),o},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){var t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)},i.ansi16.rgb=function(e){var t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),[t=t/10.5*255,t,t];var n=.5*(1+~~(e>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},i.ansi256.rgb=function(e){if(e>=232){var t=10*(e-232)+8;return[t,t,t]}var n;return e-=16,[Math.floor(e/36)/5*255,Math.floor((n=e%36)/6)/5*255,n%6/5*255]},i.rgb.hex=function(e){var t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return\"000000\".substring(t.length)+t},i.hex.rgb=function(e){var t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split(\"\").map((function(e){return e+e})).join(\"\"));var r=parseInt(n,16);return[r>>16&255,r>>8&255,255&r]},i.rgb.hcg=function(e){var t,n=e[0]/255,r=e[1]/255,u=e[2]/255,o=Math.max(Math.max(n,r),u),i=Math.min(Math.min(n,r),u),a=o-i;return t=a<=0?0:o===n?(r-u)/a%6:o===r?2+(u-n)/a:4+(n-r)/a+4,t/=6,[360*(t%=1),100*a,100*(a<1?i/(1-a):0)]},i.hsl.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=1,u=0;return(r=n<.5?2*t*n:2*t*(1-n))<1&&(u=(n-.5*r)/(1-r)),[e[0],100*r,100*u]},i.hsv.hcg=function(e){var t=e[1]/100,n=e[2]/100,r=t*n,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},i.hcg.rgb=function(e){var t=e[0]/360,n=e[1]/100,r=e[2]/100;if(0===n)return[255*r,255*r,255*r];var u,o=[0,0,0],i=t%1*6,a=i%1,l=1-a;switch(Math.floor(i)){case 0:o[0]=1,o[1]=a,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=a;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=a,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return u=(1-n)*r,[255*(n*o[0]+u),255*(n*o[1]+u),255*(n*o[2]+u)]},i.hcg.hsv=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t),r=0;return n>0&&(r=t/n),[e[0],100*r,100*n]},i.hcg.hsl=function(e){var t=e[1]/100,n=e[2]/100*(1-t)+.5*t,r=0;return n>0&&n<.5?r=t/(2*n):n>=.5&&n<1&&(r=t/(2*(1-n))),[e[0],100*r,100*n]},i.hcg.hwb=function(e){var t=e[1]/100,n=t+e[2]/100*(1-t);return[e[0],100*(n-t),100*(1-n)]},i.hwb.hcg=function(e){var t=e[1]/100,n=1-e[2]/100,r=n-t,u=0;return r<1&&(u=(n-r)/(1-r)),[e[0],100*r,100*u]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=i.gray.hsv=function(e){return[0,0,e[0]]},i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){var t=255&Math.round(e[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return\"000000\".substring(n.length)+n},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},function(e,t,n){e.exports={XmlEntities:n(185),Html4Entities:n(186),Html5Entities:n(83),AllHtmlEntities:n(83)}},function(e,t,n){\"use strict\";(function(e){function r(){var e=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(187));return r=function(){return e},e}Object.defineProperty(t,\"__esModule\",{value:!0}),t.codeFrameColumns=i,t.default=function(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!u){u=!0;var a=\"Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.\";if(e.emitWarning)e.emitWarning(a,\"DeprecationWarning\");else new Error(a).name=\"DeprecationWarning\",console.warn(new Error(a))}return r=Math.max(r,0),i(t,{start:{column:r,line:n}},o)};var u=!1;var o=/\\r\\n|[\\n\\r\\u2028\\u2029]/;function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=(n.highlightCode||n.forceColor)&&(0,r().shouldHighlight)(n),i=(0,r().getChalk)(n),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(i),l=function(e,t){return u?e(t):t},c=function(e,t,n){var r=Object.assign({column:0,line:-1},e.start),u=Object.assign({},r,e.end),o=n||{},i=o.linesAbove,a=void 0===i?2:i,l=o.linesBelow,c=void 0===l?3:l,s=r.line,f=r.column,d=u.line,p=u.column,h=Math.max(s-(a+1),0),m=Math.min(t.length,d+c);-1===s&&(h=0),-1===d&&(m=t.length);var g=d-s,v={};if(g)for(var D=0;D<=g;D++){var y=D+s;if(f)if(0===D){var b=t[y-1].length;v[y]=[f,b-f+1]}else if(D===g)v[y]=[0,p];else{var E=t[y-D].length;v[y]=[0,E]}else v[y]=!0}else v[s]=f===p?!f||[f,0]:[f,p-f];return{start:h,end:m,markerLines:v}}(t,e.split(o),n),s=c.start,f=c.end,d=c.markerLines,p=t.start&&\"number\"===typeof t.start.column,h=String(f).length,m=(u?(0,r().default)(e,n):e).split(o).slice(s,f).map((function(e,t){var r=s+1+t,u=\" \".concat(r).slice(-h),o=\" \".concat(u,\" | \"),i=d[r],c=!d[r+1];if(i){var f=\"\";if(Array.isArray(i)){var p=e.slice(0,Math.max(i[0]-1,0)).replace(/[^\\t]/g,\" \"),m=i[1]||1;f=[\"\\n \",l(a.gutter,o.replace(/\\d/g,\" \")),p,l(a.marker,\"^\").repeat(m)].join(\"\"),c&&n.message&&(f+=\" \"+l(a.message,n.message))}return[l(a.marker,\">\"),l(a.gutter,o),e,f].join(\"\")}return\" \".concat(l(a.gutter,o)).concat(e)})).join(\"\\n\");return n.message&&!p&&(m=\"\".concat(\" \".repeat(h+1)).concat(n.message,\"\\n\").concat(m)),u?i.reset(m):m}}).call(this,n(48))},function(e,t,n){\"use strict\";n(89),n(73),n(105),n(74),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(114),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(127),n(128),n(129),n(130),n(131),n(132),n(133),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(144),n(148),n(179).polyfill()},function(e,t,n){\"use strict\";var r=n(50),u=n(69);e.exports=r(\"Map\",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),u,!0)},function(e,t,n){var r=n(8),u=n(39),o=r[\"__core-js_shared__\"]||u(\"__core-js_shared__\",{});e.exports=o},function(e,t,n){var r=n(8),u=n(55),o=r.WeakMap;e.exports=\"function\"===typeof o&&/native code/.test(u.call(o))},function(e,t,n){var r=n(10),u=n(40),o=n(59),i=n(2);e.exports=r(\"Reflect\",\"ownKeys\")||function(e){var t=u.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(20),u=n(27),o=n(94),i=function(e){return function(t,n,i){var a,l=r(t),c=u(l.length),s=o(i,c);if(e&&n!=n){for(;c>s;)if((a=l[s++])!=a)return!0}else for(;c>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},function(e,t,n){var r=n(41),u=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?u(n+t,0):o(n,t)}},function(e,t,n){var r=n(13);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,n){var r=n(11),u=n(68);e.exports=function(e,t,n){var o,i;return u&&\"function\"==typeof(o=t.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&u(e,i),e}},function(e,t,n){var r=n(11);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError(\"Can't set \"+String(e)+\" as a prototype\");return e}},function(e,t,n){var r=n(16),u=n(14),o=n(2),i=n(70);e.exports=r?Object.defineProperties:function(e,t){o(e);for(var n,r=i(t),a=r.length,l=0;a>l;)u.f(e,n=r[l++],t[n]);return e}},function(e,t,n){var r=n(10);e.exports=r(\"document\",\"documentElement\")},function(e,t,n){var r=n(21);e.exports=function(e,t,n){for(var u in t)r(e,u,t[u],n);return e}},function(e,t,n){\"use strict\";var r=n(71).IteratorPrototype,u=n(33),o=n(23),i=n(22),a=n(28),l=function(){return this};e.exports=function(e,t,n){var c=t+\" Iterator\";return e.prototype=u(r,{next:o(1,n)}),i(e,c,!1,!0),a[c]=l,e}},function(e,t,n){var r=n(13);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,n){\"use strict\";var r=n(10),u=n(14),o=n(6),i=n(16),a=o(\"species\");e.exports=function(e){var t=r(e),n=u.f;i&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},function(e,t,n){\"use strict\";var r=n(64),u={};u[n(6)(\"toStringTag\")]=\"z\",e.exports=\"[object z]\"!==String(u)?function(){return\"[object \"+r(this)+\"]\"}:u.toString},function(e,t,n){\"use strict\";var r=n(50),u=n(69);e.exports=r(\"Set\",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),u)},function(e,t,n){var r=n(41),u=n(38),o=function(e){return function(t,n){var o,i,a=String(u(t)),l=r(n),c=a.length;return l<0||l>=c?e?\"\":void 0:(o=a.charCodeAt(l))<55296||o>56319||l+1===c||(i=a.charCodeAt(l+1))<56320||i>57343?e?a.charAt(l):o:e?a.slice(l,l+2):i-56320+(o-55296<<10)+65536}};e.exports={codeAt:o(!1),charAt:o(!0)}},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(75);r({target:\"Map\",proto:!0,real:!0,forced:u},{deleteAll:function(){return o.apply(this,arguments)}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(15),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{every:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return!l(n,(function(e,n){if(!r(n,e,t))return l.stop()}),void 0,!0,!0).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(7),c=n(18),s=n(15),f=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{filter:function(e){var t=i(this),n=s(t),r=l(e,arguments.length>1?arguments[1]:void 0,3),u=new(c(t,o(\"Map\"))),d=a(u.set);return f(n,(function(e,n){r(n,e,t)&&d.call(u,e,n)}),void 0,!0,!0),u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(15),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{find:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return l(n,(function(e,n){if(r(n,e,t))return l.stop(n)}),void 0,!0,!0).result}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(15),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{findKey:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return l(n,(function(e,n){if(r(n,e,t))return l.stop(e)}),void 0,!0,!0).result}})},function(e,t,n){n(1)({target:\"Map\",stat:!0},{from:n(76)})},function(e,t,n){\"use strict\";var r=n(1),u=n(4),o=n(5);r({target:\"Map\",stat:!0},{groupBy:function(e,t){var n=new this;o(t);var r=o(n.has),i=o(n.get),a=o(n.set);return u(e,(function(e){var u=t(e);r.call(n,u)?i.call(n,u).push(e):a.call(n,u,[e])})),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(15),a=n(115),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{includes:function(e){return l(i(o(this)),(function(t,n){if(a(n,e))return l.stop()}),void 0,!0,!0).stopped}})},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){\"use strict\";var r=n(1),u=n(4),o=n(5);r({target:\"Map\",stat:!0},{keyBy:function(e,t){var n=new this;o(t);var r=o(n.set);return u(e,(function(e){r.call(n,t(e),e)})),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(15),a=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{keyOf:function(e){return a(i(o(this)),(function(t,n){if(n===e)return a.stop(t)}),void 0,!0,!0).result}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(7),c=n(18),s=n(15),f=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{mapKeys:function(e){var t=i(this),n=s(t),r=l(e,arguments.length>1?arguments[1]:void 0,3),u=new(c(t,o(\"Map\"))),d=a(u.set);return f(n,(function(e,n){d.call(u,r(n,e,t),n)}),void 0,!0,!0),u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(7),c=n(18),s=n(15),f=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{mapValues:function(e){var t=i(this),n=s(t),r=l(e,arguments.length>1?arguments[1]:void 0,3),u=new(c(t,o(\"Map\"))),d=a(u.set);return f(n,(function(e,n){d.call(u,e,r(n,e,t))}),void 0,!0,!0),u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5),a=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{merge:function(e){for(var t=o(this),n=i(t.set),r=0;r<arguments.length;)a(arguments[r++],n,t,!0);return t}})},function(e,t,n){n(1)({target:\"Map\",stat:!0},{of:n(77)})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5),a=n(15),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{reduce:function(e){var t=o(this),n=a(t),r=arguments.length<2,u=r?void 0:arguments[1];if(i(e),l(n,(function(n,o){r?(r=!1,u=o):u=e(u,o,n,t)}),void 0,!0,!0),r)throw TypeError(\"Reduce of empty map with no initial value\");return u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(15),l=n(4);r({target:\"Map\",proto:!0,real:!0,forced:u},{some:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return l(n,(function(e,n){if(r(n,e,t))return l.stop()}),void 0,!0,!0).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5);r({target:\"Map\",proto:!0,real:!0,forced:u},{update:function(e,t){var n=o(this),r=arguments.length;i(t);var u=n.has(e);if(!u&&r<3)throw TypeError(\"Updating absent value\");var a=u?n.get(e):i(r>2?arguments[2]:void 0)(e,n);return n.set(e,t(a,e,n)),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(126);r({target:\"Set\",proto:!0,real:!0,forced:u},{addAll:function(){return o.apply(this,arguments)}})},function(e,t,n){\"use strict\";var r=n(2),u=n(5);e.exports=function(){for(var e=r(this),t=u(e.add),n=0,o=arguments.length;n<o;n++)t.call(e,arguments[n]);return e}},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(75);r({target:\"Set\",proto:!0,real:!0,forced:u},{deleteAll:function(){return o.apply(this,arguments)}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(18),c=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{difference:function(e){var t=i(this),n=new(l(t,o(\"Set\")))(t),r=a(n.delete);return c(e,(function(e){r.call(n,e)})),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(19),l=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{every:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return!l(n,(function(e){if(!r(e,e,t))return l.stop()}),void 0,!1,!0).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(7),c=n(18),s=n(19),f=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{filter:function(e){var t=i(this),n=s(t),r=l(e,arguments.length>1?arguments[1]:void 0,3),u=new(c(t,o(\"Set\"))),d=a(u.add);return f(n,(function(e){r(e,e,t)&&d.call(u,e)}),void 0,!1,!0),u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(19),l=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{find:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return l(n,(function(e){if(r(e,e,t))return l.stop(e)}),void 0,!1,!0).result}})},function(e,t,n){n(1)({target:\"Set\",stat:!0},{from:n(76)})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(18),c=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{intersection:function(e){var t=i(this),n=new(l(t,o(\"Set\"))),r=a(t.has),u=a(n.add);return c(e,(function(e){r.call(t,e)&&u.call(n,e)})),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5),a=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{isDisjointFrom:function(e){var t=o(this),n=i(t.has);return!a(e,(function(e){if(!0===n.call(t,e))return a.stop()})).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(45),c=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{isSubsetOf:function(e){var t=l(this),n=i(e),r=n.has;return\"function\"!=typeof r&&(n=new(o(\"Set\"))(e),r=a(n.has)),!c(t,(function(e){if(!1===r.call(n,e))return c.stop()}),void 0,!1,!0).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5),a=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{isSupersetOf:function(e){var t=o(this),n=i(t.has);return!a(e,(function(e){if(!1===n.call(t,e))return a.stop()})).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(19),a=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{join:function(e){var t=o(this),n=i(t),r=void 0===e?\",\":String(e),u=[];return a(n,u.push,u,!1,!0),u.join(r)}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(7),c=n(18),s=n(19),f=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{map:function(e){var t=i(this),n=s(t),r=l(e,arguments.length>1?arguments[1]:void 0,3),u=new(c(t,o(\"Set\"))),d=a(u.add);return f(n,(function(e){d.call(u,r(e,e,t))}),void 0,!1,!0),u}})},function(e,t,n){n(1)({target:\"Set\",stat:!0},{of:n(77)})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(5),a=n(19),l=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{reduce:function(e){var t=o(this),n=a(t),r=arguments.length<2,u=r?void 0:arguments[1];if(i(e),l(n,(function(n){r?(r=!1,u=n):u=e(u,n,n,t)}),void 0,!1,!0),r)throw TypeError(\"Reduce of empty set with no initial value\");return u}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(2),i=n(7),a=n(19),l=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{some:function(e){var t=o(this),n=a(t),r=i(e,arguments.length>1?arguments[1]:void 0,3);return l(n,(function(e){if(r(e,e,t))return l.stop()}),void 0,!1,!0).stopped}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(18),c=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{symmetricDifference:function(e){var t=i(this),n=new(l(t,o(\"Set\")))(t),r=a(n.delete),u=a(n.add);return c(e,(function(e){r.call(n,e)||u.call(n,e)})),n}})},function(e,t,n){\"use strict\";var r=n(1),u=n(3),o=n(10),i=n(2),a=n(5),l=n(18),c=n(4);r({target:\"Set\",proto:!0,real:!0,forced:u},{union:function(e){var t=i(this),n=new(l(t,o(\"Set\")))(t);return c(e,a(n.add),n),n}})},function(e,t,n){var r=n(8),u=n(145),o=n(146),i=n(17),a=n(6),l=a(\"iterator\"),c=a(\"toStringTag\"),s=o.values;for(var f in u){var d=r[f],p=d&&d.prototype;if(p){if(p[l]!==s)try{i(p,l,s)}catch(e){p[l]=s}if(p[c]||i(p,c,f),u[f])for(var h in o)if(p[h]!==o[h])try{i(p,h,o[h])}catch(e){p[h]=o[h]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,n){\"use strict\";var r=n(20),u=n(147),o=n(28),i=n(25),a=n(44),l=i.set,c=i.getterFor(\"Array Iterator\");e.exports=a(Array,\"Array\",(function(e,t){l(this,{type:\"Array Iterator\",target:r(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):\"keys\"==n?{value:r,done:!1}:\"values\"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),\"values\"),o.Arguments=o.Array,u(\"keys\"),u(\"values\"),u(\"entries\")},function(e,t,n){var r=n(6),u=n(33),o=n(17),i=r(\"unscopables\"),a=Array.prototype;void 0==a[i]&&o(a,i,u(null)),e.exports=function(e){a[i][e]=!0}},function(e,t,n){\"use strict\";n(149),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(168),n(170),n(171),n(73),n(74),n(172),n(173),n(174),\"undefined\"===typeof Promise&&(n(175).enable(),self.Promise=n(177)),\"undefined\"!==typeof window&&n(178),Object.assign=n(47)},function(e,t,n){\"use strict\";var r=n(1),u=n(8),o=n(10),i=n(3),a=n(16),l=n(63),c=n(13),s=n(12),f=n(46),d=n(11),p=n(2),h=n(29),m=n(20),g=n(30),v=n(23),D=n(33),y=n(70),b=n(40),E=n(150),C=n(59),A=n(36),F=n(14),w=n(51),x=n(17),B=n(21),k=n(24),S=n(31),T=n(26),_=n(32),P=n(6),O=n(78),N=n(9),j=n(22),R=n(25),M=n(151).forEach,I=S(\"hidden\"),L=P(\"toPrimitive\"),q=R.set,U=R.getterFor(\"Symbol\"),z=Object.prototype,H=u.Symbol,V=o(\"JSON\",\"stringify\"),W=A.f,$=F.f,G=E.f,Q=w.f,K=k(\"symbols\"),Y=k(\"op-symbols\"),J=k(\"string-to-symbol-registry\"),X=k(\"symbol-to-string-registry\"),Z=k(\"wks\"),ee=u.QObject,te=!ee||!ee.prototype||!ee.prototype.findChild,ne=a&&c((function(){return 7!=D($({},\"a\",{get:function(){return $(this,\"a\",{value:7}).a}})).a}))?function(e,t,n){var r=W(z,t);r&&delete z[t],$(e,t,n),r&&e!==z&&$(z,t,r)}:$,re=function(e,t){var n=K[e]=D(H.prototype);return q(n,{type:\"Symbol\",tag:e,description:t}),a||(n.description=t),n},ue=l&&\"symbol\"==typeof H.iterator?function(e){return\"symbol\"==typeof e}:function(e){return Object(e)instanceof H},oe=function(e,t,n){e===z&&oe(Y,t,n),p(e);var r=g(t,!0);return p(n),s(K,r)?(n.enumerable?(s(e,I)&&e[I][r]&&(e[I][r]=!1),n=D(n,{enumerable:v(0,!1)})):(s(e,I)||$(e,I,v(1,{})),e[I][r]=!0),ne(e,r,n)):$(e,r,n)},ie=function(e,t){p(e);var n=m(t),r=y(n).concat(se(n));return M(r,(function(t){a&&!ae.call(n,t)||oe(e,t,n[t])})),e},ae=function(e){var t=g(e,!0),n=Q.call(this,t);return!(this===z&&s(K,t)&&!s(Y,t))&&(!(n||!s(this,t)||!s(K,t)||s(this,I)&&this[I][t])||n)},le=function(e,t){var n=m(e),r=g(t,!0);if(n!==z||!s(K,r)||s(Y,r)){var u=W(n,r);return!u||!s(K,r)||s(n,I)&&n[I][r]||(u.enumerable=!0),u}},ce=function(e){var t=G(m(e)),n=[];return M(t,(function(e){s(K,e)||s(T,e)||n.push(e)})),n},se=function(e){var t=e===z,n=G(t?Y:m(e)),r=[];return M(n,(function(e){!s(K,e)||t&&!s(z,e)||r.push(K[e])})),r};(l||(B((H=function(){if(this instanceof H)throw TypeError(\"Symbol is not a constructor\");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=_(e),n=function e(n){this===z&&e.call(Y,n),s(this,I)&&s(this[I],t)&&(this[I][t]=!1),ne(this,t,v(1,n))};return a&&te&&ne(z,t,{configurable:!0,set:n}),re(t,e)}).prototype,\"toString\",(function(){return U(this).tag})),w.f=ae,F.f=oe,A.f=le,b.f=E.f=ce,C.f=se,a&&($(H.prototype,\"description\",{configurable:!0,get:function(){return U(this).description}}),i||B(z,\"propertyIsEnumerable\",ae,{unsafe:!0})),O.f=function(e){return re(P(e),e)}),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:H}),M(y(Z),(function(e){N(e)})),r({target:\"Symbol\",stat:!0,forced:!l},{for:function(e){var t=String(e);if(s(J,t))return J[t];var n=H(t);return J[t]=n,X[n]=t,n},keyFor:function(e){if(!ue(e))throw TypeError(e+\" is not a symbol\");if(s(X,e))return X[e]},useSetter:function(){te=!0},useSimple:function(){te=!1}}),r({target:\"Object\",stat:!0,forced:!l,sham:!a},{create:function(e,t){return void 0===t?D(e):ie(D(e),t)},defineProperty:oe,defineProperties:ie,getOwnPropertyDescriptor:le}),r({target:\"Object\",stat:!0,forced:!l},{getOwnPropertyNames:ce,getOwnPropertySymbols:se}),r({target:\"Object\",stat:!0,forced:c((function(){C.f(1)}))},{getOwnPropertySymbols:function(e){return C.f(h(e))}}),V)&&r({target:\"JSON\",stat:!0,forced:!l||c((function(){var e=H();return\"[null]\"!=V([e])||\"{}\"!=V({a:e})||\"{}\"!=V(Object(e))}))},{stringify:function(e,t,n){for(var r,u=[e],o=1;arguments.length>o;)u.push(arguments[o++]);if(r=t,(d(t)||void 0!==e)&&!ue(e))return f(t)||(t=function(e,t){if(\"function\"==typeof r&&(t=r.call(this,e,t)),!ue(t))return t}),u[1]=t,V.apply(null,u)}});H.prototype[L]||x(H.prototype,L,H.prototype.valueOf),j(H,\"Symbol\"),T[I]=!0},function(e,t,n){var r=n(20),u=n(40).f,o={}.toString,i=\"object\"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&\"[object Window]\"==o.call(e)?function(e){try{return u(e)}catch(e){return i.slice()}}(e):u(r(e))}},function(e,t,n){var r=n(7),u=n(52),o=n(29),i=n(27),a=n(79),l=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,s=4==e,f=6==e,d=5==e||f;return function(p,h,m,g){for(var v,D,y=o(p),b=u(y),E=r(h,m,3),C=i(b.length),A=0,F=g||a,w=t?F(p,C):n?F(p,0):void 0;C>A;A++)if((d||A in b)&&(D=E(v=b[A],A,y),e))if(t)w[A]=D;else if(D)switch(e){case 3:return!0;case 5:return v;case 6:return A;case 2:l.call(w,v)}else if(s)return!1;return f?-1:c||s?s:w}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(e,t,n){\"use strict\";var r=n(1),u=n(16),o=n(8),i=n(12),a=n(11),l=n(14).f,c=n(56),s=o.Symbol;if(u&&\"function\"==typeof s&&(!(\"description\"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return\"\"===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var h=p.toString,m=\"Symbol(test)\"==String(s(\"test\")),g=/^Symbol\\((.*)\\)[^)]+$/;l(p,\"description\",{configurable:!0,get:function(){var e=a(this)?this.valueOf():this,t=h.call(e);if(i(f,e))return\"\";var n=m?t.slice(7,-1):t.replace(g,\"$1\");return\"\"===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},function(e,t,n){n(9)(\"asyncIterator\")},function(e,t,n){n(9)(\"hasInstance\")},function(e,t,n){n(9)(\"isConcatSpreadable\")},function(e,t,n){n(9)(\"iterator\")},function(e,t,n){n(9)(\"match\")},function(e,t,n){n(9)(\"replace\")},function(e,t,n){n(9)(\"search\")},function(e,t,n){n(9)(\"species\")},function(e,t,n){n(9)(\"split\")},function(e,t,n){n(9)(\"toPrimitive\")},function(e,t,n){n(9)(\"toStringTag\")},function(e,t,n){n(9)(\"unscopables\")},function(e,t,n){\"use strict\";var r=n(1),u=n(13),o=n(46),i=n(11),a=n(29),l=n(27),c=n(80),s=n(79),f=n(166),d=n(6),p=n(81),h=d(\"isConcatSpreadable\"),m=p>=51||!u((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=f(\"concat\"),v=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)};r({target:\"Array\",proto:!0,forced:!m||!g},{concat:function(e){var t,n,r,u,o,i=a(this),f=s(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],v(o)){if(d+(u=l(o.length))>9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");for(n=0;n<u;n++,d++)n in o&&c(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError(\"Maximum allowed index exceeded\");c(f,d++,o)}return f.length=d,f}})},function(e,t,n){var r=n(13),u=n(6),o=n(81),i=u(\"species\");e.exports=function(e){return o>=51||!r((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,n){var r=n(10);e.exports=r(\"navigator\",\"userAgent\")||\"\"},function(e,t,n){var r=n(1),u=n(169);r({target:\"Array\",stat:!0,forced:!n(67)((function(e){Array.from(e)}))},{from:u})},function(e,t,n){\"use strict\";var r=n(7),u=n(29),o=n(65),i=n(62),a=n(27),l=n(80),c=n(43);e.exports=function(e){var t,n,s,f,d,p=u(e),h=\"function\"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,v=void 0!==g,D=0,y=c(p);if(v&&(g=r(g,m>2?arguments[2]:void 0,2)),void 0==y||h==Array&&i(y))for(n=new h(t=a(p.length));t>D;D++)l(n,D,v?g(p[D],D):p[D]);else for(d=(f=y.call(p)).next,n=new h;!(s=d.call(f)).done;D++)l(n,D,v?o(f,g,[s.value,D],!0):s.value);return n.length=D,n}},function(e,t,n){var r=n(8);n(22)(r.JSON,\"JSON\",!0)},function(e,t,n){n(22)(Math,\"Math\",!0)},function(e,t,n){n(9)(\"dispose\")},function(e,t,n){n(9)(\"observable\")},function(e,t,n){n(9)(\"patternMatch\")},function(e,t,n){\"use strict\";var r=n(82),u=[ReferenceError,TypeError,RangeError],o=!1;function i(){o=!1,r._l=null,r._m=null}function a(e,t){return t.some((function(t){return e instanceof t}))}t.disable=i,t.enable=function(e){e=e||{},o&&i();o=!0;var t=0,n=0,l={};function c(t){(e.allRejections||a(l[t].error,e.whitelist||u))&&(l[t].displayId=n++,e.onUnhandled?(l[t].logged=!0,e.onUnhandled(l[t].displayId,l[t].error)):(l[t].logged=!0,function(e,t){console.warn(\"Possible Unhandled Promise Rejection (id: \"+e+\"):\"),((t&&(t.stack||t))+\"\").split(\"\\n\").forEach((function(e){console.warn(\"  \"+e)}))}(l[t].displayId,l[t].error)))}r._l=function(t){2===t._i&&l[t._o]&&(l[t._o].logged?function(t){l[t].logged&&(e.onHandled?e.onHandled(l[t].displayId,l[t].error):l[t].onUnhandled||(console.warn(\"Promise Rejection Handled (id: \"+l[t].displayId+\"):\"),console.warn('  This means you can ignore any previous messages of the form \"Possible Unhandled Promise Rejection\" with id '+l[t].displayId+\".\")))}(t._o):clearTimeout(l[t._o].timeout),delete l[t._o])},r._m=function(e,n){0===e._h&&(e._o=t++,l[e._o]={displayId:null,error:n,timeout:setTimeout(c.bind(null,e._o),a(n,u)?100:2e3),logged:!1})}}},function(e,t,n){\"use strict\";(function(t){function n(e){u.length||(r(),!0),u[u.length]=e}e.exports=n;var r,u=[],o=0,i=1024;function a(){for(;o<u.length;){var e=o;if(o+=1,u[e].call(),o>i){for(var t=0,n=u.length-o;t<n;t++)u[t]=u[t+o];u.length-=o,o=0}}u.length=0,o=0,!1}var l,c,s,f=\"undefined\"!==typeof t?t:self,d=f.MutationObserver||f.WebKitMutationObserver;function p(e){return function(){var t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}\"function\"===typeof d?(l=1,c=new d(a),s=document.createTextNode(\"\"),c.observe(s,{characterData:!0}),r=function(){l=-l,s.data=l}):r=p(a),n.requestFlush=r,n.makeRequestCallFromTimer=p}).call(this,n(35))},function(e,t,n){\"use strict\";var r=n(82);e.exports=r;var u=s(!0),o=s(!1),i=s(null),a=s(void 0),l=s(0),c=s(\"\");function s(e){var t=new r(r._n);return t._i=1,t._j=e,t}r.resolve=function(e){if(e instanceof r)return e;if(null===e)return i;if(void 0===e)return a;if(!0===e)return u;if(!1===e)return o;if(0===e)return l;if(\"\"===e)return c;if(\"object\"===typeof e||\"function\"===typeof e)try{var t=e.then;if(\"function\"===typeof t)return new r(t.bind(e))}catch(e){return new r((function(t,n){n(e)}))}return s(e)},r.all=function(e){var t=Array.prototype.slice.call(e);return new r((function(e,n){if(0===t.length)return e([]);var u=t.length;function o(i,a){if(a&&(\"object\"===typeof a||\"function\"===typeof a)){if(a instanceof r&&a.then===r.prototype.then){for(;3===a._i;)a=a._j;return 1===a._i?o(i,a._j):(2===a._i&&n(a._j),void a.then((function(e){o(i,e)}),n))}var l=a.then;if(\"function\"===typeof l)return void new r(l.bind(a)).then((function(e){o(i,e)}),n)}t[i]=a,0===--u&&e(t)}for(var i=0;i<t.length;i++)o(i,t[i])}))},r.reject=function(e){return new r((function(t,n){n(e)}))},r.race=function(e){return new r((function(t,n){e.forEach((function(e){r.resolve(e).then(t,n)}))}))},r.prototype.catch=function(e){return this.then(null,e)}},function(e,t,n){\"use strict\";n.r(t),n.d(t,\"Headers\",(function(){return c})),n.d(t,\"Request\",(function(){return g})),n.d(t,\"Response\",(function(){return D})),n.d(t,\"DOMException\",(function(){return b})),n.d(t,\"fetch\",(function(){return E}));var r={searchParams:\"URLSearchParams\"in self,iterable:\"Symbol\"in self&&\"iterator\"in Symbol,blob:\"FileReader\"in self&&\"Blob\"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:\"FormData\"in self,arrayBuffer:\"ArrayBuffer\"in self};if(r.arrayBuffer)var u=[\"[object Int8Array]\",\"[object Uint8Array]\",\"[object Uint8ClampedArray]\",\"[object Int16Array]\",\"[object Uint16Array]\",\"[object Int32Array]\",\"[object Uint32Array]\",\"[object Float32Array]\",\"[object Float64Array]\"],o=ArrayBuffer.isView||function(e){return e&&u.indexOf(Object.prototype.toString.call(e))>-1};function i(e){if(\"string\"!==typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError(\"Invalid character in header field name\");return e.toLowerCase()}function a(e){return\"string\"!==typeof e&&(e=String(e)),e}function l(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function s(e){if(e.bodyUsed)return Promise.reject(new TypeError(\"Already read\"));e.bodyUsed=!0}function f(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function d(e){var t=new FileReader,n=f(t);return t.readAsArrayBuffer(e),n}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?\"string\"===typeof e?this._bodyText=e:r.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():r.arrayBuffer&&r.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText=\"\",this.headers.get(\"content-type\")||(\"string\"===typeof e?this.headers.set(\"content-type\",\"text/plain;charset=UTF-8\"):this._bodyBlob&&this._bodyBlob.type?this.headers.set(\"content-type\",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set(\"content-type\",\"application/x-www-form-urlencoded;charset=UTF-8\"))},r.blob&&(this.blob=function(){var e=s(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error(\"could not read FormData body as blob\");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var e,t,n,r=s(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=f(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join(\"\")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error(\"could not read FormData body as text\");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=i(e),t=a(t);var n=this.map[e];this.map[e]=n?n+\", \"+t:t},c.prototype.delete=function(e){delete this.map[i(e)]},c.prototype.get=function(e){return e=i(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(i(e))},c.prototype.set=function(e,t){this.map[i(e)]=a(t)},c.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},c.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),l(e)},c.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),l(e)},c.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),l(e)},r.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var m=[\"DELETE\",\"GET\",\"HEAD\",\"OPTIONS\",\"POST\",\"PUT\"];function g(e,t){var n,r,u=(t=t||{}).body;if(e instanceof g){if(e.bodyUsed)throw new TypeError(\"Already read\");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,u||null==e._bodyInit||(u=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||\"same-origin\",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(n=t.method||this.method||\"GET\",r=n.toUpperCase(),m.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(\"GET\"===this.method||\"HEAD\"===this.method)&&u)throw new TypeError(\"Body not allowed for GET or HEAD requests\");this._initBody(u)}function v(e){var t=new FormData;return e.trim().split(\"&\").forEach((function(e){if(e){var n=e.split(\"=\"),r=n.shift().replace(/\\+/g,\" \"),u=n.join(\"=\").replace(/\\+/g,\" \");t.append(decodeURIComponent(r),decodeURIComponent(u))}})),t}function D(e,t){t||(t={}),this.type=\"default\",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=\"statusText\"in t?t.statusText:\"OK\",this.headers=new c(t.headers),this.url=t.url||\"\",this._initBody(e)}g.prototype.clone=function(){return new g(this,{body:this._bodyInit})},h.call(g.prototype),h.call(D.prototype),D.prototype.clone=function(){return new D(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},D.error=function(){var e=new D(null,{status:0,statusText:\"\"});return e.type=\"error\",e};var y=[301,302,303,307,308];D.redirect=function(e,t){if(-1===y.indexOf(t))throw new RangeError(\"Invalid status code\");return new D(null,{status:t,headers:{location:e}})};var b=self.DOMException;try{new b}catch(e){(b=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),b.prototype.constructor=b}function E(e,t){return new Promise((function(n,u){var o=new g(e,t);if(o.signal&&o.signal.aborted)return u(new b(\"Aborted\",\"AbortError\"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var e,t,r={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||\"\",t=new c,e.replace(/\\r?\\n[\\t ]+/g,\" \").split(/\\r?\\n/).forEach((function(e){var n=e.split(\":\"),r=n.shift().trim();if(r){var u=n.join(\":\").trim();t.append(r,u)}})),t)};r.url=\"responseURL\"in i?i.responseURL:r.headers.get(\"X-Request-URL\");var u=\"response\"in i?i.response:i.responseText;n(new D(u,r))},i.onerror=function(){u(new TypeError(\"Network request failed\"))},i.ontimeout=function(){u(new TypeError(\"Network request failed\"))},i.onabort=function(){u(new b(\"Aborted\",\"AbortError\"))},i.open(o.method,o.url,!0),\"include\"===o.credentials?i.withCredentials=!0:\"omit\"===o.credentials&&(i.withCredentials=!1),\"responseType\"in i&&r.blob&&(i.responseType=\"blob\"),o.headers.forEach((function(e,t){i.setRequestHeader(t,e)})),o.signal&&(o.signal.addEventListener(\"abort\",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener(\"abort\",a)}),i.send(\"undefined\"===typeof o._bodyInit?null:o._bodyInit)}))}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=c,self.Request=g,self.Response=D)},function(e,t,n){(function(t){for(var r=n(180),u=\"undefined\"===typeof window?t:window,o=[\"moz\",\"webkit\"],i=\"AnimationFrame\",a=u[\"request\"+i],l=u[\"cancel\"+i]||u[\"cancelRequest\"+i],c=0;!a&&c<o.length;c++)a=u[o[c]+\"Request\"+i],l=u[o[c]+\"Cancel\"+i]||u[o[c]+\"CancelRequest\"+i];if(!a||!l){var s=0,f=0,d=[];a=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-s));s=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return a.call(u,e)},e.exports.cancel=function(){l.apply(u,arguments)},e.exports.polyfill=function(e){e||(e=u),e.requestAnimationFrame=a,e.cancelAnimationFrame=l}}).call(this,n(35))},function(e,t,n){(function(t){(function(){var n,r,u,o,i,a;\"undefined\"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:\"undefined\"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),a=1e9*t.uptime(),i=o-a):Date.now?(e.exports=function(){return Date.now()-u},u=Date.now()):(e.exports=function(){return(new Date).getTime()-u},u=(new Date).getTime())}).call(this)}).call(this,n(48))},function(e,t,n){\"use strict\";var r=n(47),u=\"function\"===typeof Symbol&&Symbol.for,o=u?Symbol.for(\"react.element\"):60103,i=u?Symbol.for(\"react.portal\"):60106,a=u?Symbol.for(\"react.fragment\"):60107,l=u?Symbol.for(\"react.strict_mode\"):60108,c=u?Symbol.for(\"react.profiler\"):60114,s=u?Symbol.for(\"react.provider\"):60109,f=u?Symbol.for(\"react.context\"):60110,d=u?Symbol.for(\"react.forward_ref\"):60112,p=u?Symbol.for(\"react.suspense\"):60113;u&&Symbol.for(\"react.suspense_list\");var h=u?Symbol.for(\"react.memo\"):60115,m=u?Symbol.for(\"react.lazy\"):60116;u&&Symbol.for(\"react.fundamental\"),u&&Symbol.for(\"react.responder\"),u&&Symbol.for(\"react.scope\");var g=\"function\"===typeof Symbol&&Symbol.iterator;function v(e){for(var t=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+e,n=1;n<arguments.length;n++)t+=\"&args[]=\"+encodeURIComponent(arguments[n]);return\"Minified React error #\"+e+\"; visit \"+t+\" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\"}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||D}function E(){}function C(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||D}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if(\"object\"!==typeof e&&\"function\"!==typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,\"setState\")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,\"forceUpdate\")},E.prototype=b.prototype;var A=C.prototype=new E;A.constructor=C,r(A,b.prototype),A.isPureReactComponent=!0;var F={current:null},w={current:null},x=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,u={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=\"\"+t.key),t)x.call(t,r)&&!B.hasOwnProperty(r)&&(u[r]=t[r]);var l=arguments.length-2;if(1===l)u.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];u.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===u[r]&&(u[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:a,props:u,_owner:w.current}}function S(e){return\"object\"===typeof e&&null!==e&&e.$$typeof===o}var T=/\\/+/g,_=[];function P(e,t,n,r){if(_.length){var u=_.pop();return u.result=e,u.keyPrefix=t,u.func=n,u.context=r,u.count=0,u}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function O(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function N(e,t,n){return null==e?0:function e(t,n,r,u){var a=typeof t;\"undefined\"!==a&&\"boolean\"!==a||(t=null);var l=!1;if(null===t)l=!0;else switch(a){case\"string\":case\"number\":l=!0;break;case\"object\":switch(t.$$typeof){case o:case i:l=!0}}if(l)return r(u,t,\"\"===n?\".\"+j(t,0):n),1;if(l=0,n=\"\"===n?\".\":n+\":\",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+j(a=t[c],c);l+=e(a,s,r,u)}else if(null===t||\"object\"!==typeof t?s=null:s=\"function\"===typeof(s=g&&t[g]||t[\"@@iterator\"])?s:null,\"function\"===typeof s)for(t=s.call(t),c=0;!(a=t.next()).done;)l+=e(a=a.value,s=n+j(a,c++),r,u);else if(\"object\"===a)throw r=\"\"+t,Error(v(31,\"[object Object]\"===r?\"object with keys {\"+Object.keys(t).join(\", \")+\"}\":r,\"\"));return l}(e,\"\",t,n)}function j(e,t){return\"object\"===typeof e&&null!==e&&null!=e.key?function(e){var t={\"=\":\"=0\",\":\":\"=2\"};return\"$\"+(\"\"+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,u=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,u+(!e.key||t&&t.key===e.key?\"\":(\"\"+e.key).replace(T,\"$&/\")+\"/\")+n)),r.push(e))}function I(e,t,n,r,u){var o=\"\";null!=n&&(o=(\"\"+n).replace(T,\"$&/\")+\"/\"),N(e,M,t=P(t,o,r,u)),O(t)}function L(){var e=F.current;if(null===e)throw Error(v(321));return e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;N(e,R,t=P(null,null,t,n)),O(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:b,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return L().useCallback(e,t)},useContext:function(e,t){return L().useContext(e,t)},useEffect:function(e,t){return L().useEffect(e,t)},useImperativeHandle:function(e,t,n){return L().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return L().useLayoutEffect(e,t)},useMemo:function(e,t){return L().useMemo(e,t)},useReducer:function(e,t,n){return L().useReducer(e,t,n)},useRef:function(e){return L().useRef(e)},useState:function(e){return L().useState(e)},Fragment:a,Profiler:c,StrictMode:l,Suspense:p,createElement:k,cloneElement:function(e,t,n){if(null===e||void 0===e)throw Error(v(267,e));var u=r({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=w.current),void 0!==t.key&&(i=\"\"+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)x.call(t,s)&&!B.hasOwnProperty(s)&&(u[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];u.children=c}return{$$typeof:o,type:e.type,key:i,ref:a,props:u,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:S,version:\"16.11.0\",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r}},U={default:q},z=U&&q||U;e.exports=z.default||z},function(e,t,n){\"use strict\";var r=n(0),u=n(47),o=n(183);function i(e){for(var t=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+e,n=1;n<arguments.length;n++)t+=\"&args[]=\"+encodeURIComponent(arguments[n]);return\"Minified React error #\"+e+\"; visit \"+t+\" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.\"}if(!r)throw Error(i(227));var a=null,l={};function c(){if(a)for(var e in l){var t=l[e],n=a.indexOf(e);if(!(-1<n))throw Error(i(96,e));if(!f[n]){if(!t.extractEvents)throw Error(i(97,e));for(var r in f[n]=t,n=t.eventTypes){var u=void 0,o=n[r],c=t,p=r;if(d.hasOwnProperty(p))throw Error(i(99,p));d[p]=o;var h=o.phasedRegistrationNames;if(h){for(u in h)h.hasOwnProperty(u)&&s(h[u],c,p);u=!0}else o.registrationName?(s(o.registrationName,c,p),u=!0):u=!1;if(!u)throw Error(i(98,r,e))}}}}function s(e,t,n){if(p[e])throw Error(i(100,e));p[e]=t,h[e]=t.eventTypes[n].dependencies}var f=[],d={},p={},h={};function m(e,t,n,r,u,o,i,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(e){this.onError(e)}}var g=!1,v=null,D=!1,y=null,b={onError:function(e){g=!0,v=e}};function E(e,t,n,r,u,o,i,a,l){g=!1,v=null,m.apply(b,arguments)}var C=null,A=null,F=null;function w(e,t,n){var r=e.type||\"unknown-event\";e.currentTarget=F(n),function(e,t,n,r,u,o,a,l,c){if(E.apply(this,arguments),g){if(!g)throw Error(i(198));var s=v;g=!1,v=null,D||(D=!0,y=s)}}(r,t,void 0,e),e.currentTarget=null}function x(e,t){if(null==t)throw Error(i(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function B(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var k=null;function S(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)w(e,t[r],n[r]);else t&&w(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function T(e){if(null!==e&&(k=x(k,e)),e=k,k=null,e){if(B(e,S),k)throw Error(i(95));if(D)throw e=y,D=!1,y=null,e}}var _={injectEventPluginOrder:function(e){if(a)throw Error(i(101));a=Array.prototype.slice.call(e),c()},injectEventPluginsByName:function(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!l.hasOwnProperty(t)||l[t]!==r){if(l[t])throw Error(i(102,t));l[t]=r,n=!0}}n&&c()}};function P(e,t){var n=e.stateNode;if(!n)return null;var r=C(n);if(!r)return null;n=r[t];e:switch(t){case\"onClick\":case\"onClickCapture\":case\"onDoubleClick\":case\"onDoubleClickCapture\":case\"onMouseDown\":case\"onMouseDownCapture\":case\"onMouseMove\":case\"onMouseMoveCapture\":case\"onMouseUp\":case\"onMouseUpCapture\":(r=!r.disabled)||(r=!(\"button\"===(e=e.type)||\"input\"===e||\"select\"===e||\"textarea\"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&\"function\"!==typeof n)throw Error(i(231,t,typeof n));return n}var O=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;O.hasOwnProperty(\"ReactCurrentDispatcher\")||(O.ReactCurrentDispatcher={current:null}),O.hasOwnProperty(\"ReactCurrentBatchConfig\")||(O.ReactCurrentBatchConfig={suspense:null});var N=/^(.*)[\\\\\\/]/,j=\"function\"===typeof Symbol&&Symbol.for,R=j?Symbol.for(\"react.element\"):60103,M=j?Symbol.for(\"react.portal\"):60106,I=j?Symbol.for(\"react.fragment\"):60107,L=j?Symbol.for(\"react.strict_mode\"):60108,q=j?Symbol.for(\"react.profiler\"):60114,U=j?Symbol.for(\"react.provider\"):60109,z=j?Symbol.for(\"react.context\"):60110,H=j?Symbol.for(\"react.concurrent_mode\"):60111,V=j?Symbol.for(\"react.forward_ref\"):60112,W=j?Symbol.for(\"react.suspense\"):60113,$=j?Symbol.for(\"react.suspense_list\"):60120,G=j?Symbol.for(\"react.memo\"):60115,Q=j?Symbol.for(\"react.lazy\"):60116;j&&Symbol.for(\"react.fundamental\"),j&&Symbol.for(\"react.responder\"),j&&Symbol.for(\"react.scope\");var K=\"function\"===typeof Symbol&&Symbol.iterator;function Y(e){return null===e||\"object\"!==typeof e?null:\"function\"===typeof(e=K&&e[K]||e[\"@@iterator\"])?e:null}function J(e){if(null==e)return null;if(\"function\"===typeof e)return e.displayName||e.name||null;if(\"string\"===typeof e)return e;switch(e){case I:return\"Fragment\";case M:return\"Portal\";case q:return\"Profiler\";case L:return\"StrictMode\";case W:return\"Suspense\";case $:return\"SuspenseList\"}if(\"object\"===typeof e)switch(e.$$typeof){case z:return\"Context.Consumer\";case U:return\"Context.Provider\";case V:var t=e.render;return t=t.displayName||t.name||\"\",e.displayName||(\"\"!==t?\"ForwardRef(\"+t+\")\":\"ForwardRef\");case G:return J(e.type);case Q:if(e=1===e._status?e._result:null)return J(e)}return null}function X(e){var t=\"\";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n=\"\";break e;default:var r=e._debugOwner,u=e._debugSource,o=J(e.type);n=null,r&&(n=J(r.type)),r=o,o=\"\",u?o=\" (at \"+u.fileName.replace(N,\"\")+\":\"+u.lineNumber+\")\":n&&(o=\" (created by \"+n+\")\"),n=\"\\n    in \"+(r||\"Unknown\")+o}t+=n,e=e.return}while(e);return t}var Z=!(\"undefined\"===typeof window||\"undefined\"===typeof window.document||\"undefined\"===typeof window.document.createElement),ee=null,te=null,ne=null;function re(e){if(e=A(e)){if(\"function\"!==typeof ee)throw Error(i(280));var t=C(e.stateNode);ee(e.stateNode,e.type,t)}}function ue(e){te?ne?ne.push(e):ne=[e]:te=e}function oe(){if(te){var e=te,t=ne;if(ne=te=null,re(e),t)for(e=0;e<t.length;e++)re(t[e])}}function ie(e,t){return e(t)}function ae(e,t,n,r){return e(t,n,r)}function le(){}var ce=ie,se=!1,fe=!1;function de(){null===te&&null===ne||(le(),oe())}new Map;var pe=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,he=Object.prototype.hasOwnProperty,me={},ge={};function ve(e,t,n,r,u,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=u,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var De={};\"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style\".split(\" \").forEach((function(e){De[e]=new ve(e,0,!1,e,null,!1)})),[[\"acceptCharset\",\"accept-charset\"],[\"className\",\"class\"],[\"htmlFor\",\"for\"],[\"httpEquiv\",\"http-equiv\"]].forEach((function(e){var t=e[0];De[t]=new ve(t,1,!1,e[1],null,!1)})),[\"contentEditable\",\"draggable\",\"spellCheck\",\"value\"].forEach((function(e){De[e]=new ve(e,2,!1,e.toLowerCase(),null,!1)})),[\"autoReverse\",\"externalResourcesRequired\",\"focusable\",\"preserveAlpha\"].forEach((function(e){De[e]=new ve(e,2,!1,e,null,!1)})),\"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope\".split(\" \").forEach((function(e){De[e]=new ve(e,3,!1,e.toLowerCase(),null,!1)})),[\"checked\",\"multiple\",\"muted\",\"selected\"].forEach((function(e){De[e]=new ve(e,3,!0,e,null,!1)})),[\"capture\",\"download\"].forEach((function(e){De[e]=new ve(e,4,!1,e,null,!1)})),[\"cols\",\"rows\",\"size\",\"span\"].forEach((function(e){De[e]=new ve(e,6,!1,e,null,!1)})),[\"rowSpan\",\"start\"].forEach((function(e){De[e]=new ve(e,5,!1,e.toLowerCase(),null,!1)}));var ye=/[\\-:]([a-z])/g;function be(e){return e[1].toUpperCase()}function Ee(e){switch(typeof e){case\"boolean\":case\"number\":case\"object\":case\"string\":case\"undefined\":return e;default:return\"\"}}function Ce(e,t,n,r){var u=De.hasOwnProperty(t)?De[t]:null;(null!==u?0===u.type:!r&&(2<t.length&&(\"o\"===t[0]||\"O\"===t[0])&&(\"n\"===t[1]||\"N\"===t[1])))||(function(e,t,n,r){if(null===t||\"undefined\"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case\"function\":case\"symbol\":return!0;case\"boolean\":return!r&&(null!==n?!n.acceptsBooleans:\"data-\"!==(e=e.toLowerCase().slice(0,5))&&\"aria-\"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,u,r)&&(n=null),r||null===u?function(e){return!!he.call(ge,e)||!he.call(me,e)&&(pe.test(e)?ge[e]=!0:(me[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,\"\"+n)):u.mustUseProperty?e[u.propertyName]=null===n?3!==u.type&&\"\":n:(t=u.attributeName,r=u.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(u=u.type)||4===u&&!0===n?\"\":\"\"+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function Ae(e){var t=e.type;return(e=e.nodeName)&&\"input\"===e.toLowerCase()&&(\"checkbox\"===t||\"radio\"===t)}function Fe(e){e._valueTracker||(e._valueTracker=function(e){var t=Ae(e)?\"checked\":\"value\",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=\"\"+e[t];if(!e.hasOwnProperty(t)&&\"undefined\"!==typeof n&&\"function\"===typeof n.get&&\"function\"===typeof n.set){var u=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(e){r=\"\"+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=\"\"+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=\"\";return e&&(r=Ae(e)?e.checked?\"true\":\"false\":e.value),(e=r)!==n&&(t.setValue(e),!0)}function xe(e,t){var n=t.checked;return u({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Be(e,t){var n=null==t.defaultValue?\"\":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Ee(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:\"checkbox\"===t.type||\"radio\"===t.type?null!=t.checked:null!=t.value}}function ke(e,t){null!=(t=t.checked)&&Ce(e,\"checked\",t,!1)}function Se(e,t){ke(e,t);var n=Ee(t.value),r=t.type;if(null!=n)\"number\"===r?(0===n&&\"\"===e.value||e.value!=n)&&(e.value=\"\"+n):e.value!==\"\"+n&&(e.value=\"\"+n);else if(\"submit\"===r||\"reset\"===r)return void e.removeAttribute(\"value\");t.hasOwnProperty(\"value\")?_e(e,t.type,n):t.hasOwnProperty(\"defaultValue\")&&_e(e,t.type,Ee(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Te(e,t,n){if(t.hasOwnProperty(\"value\")||t.hasOwnProperty(\"defaultValue\")){var r=t.type;if(!(\"submit\"!==r&&\"reset\"!==r||void 0!==t.value&&null!==t.value))return;t=\"\"+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}\"\"!==(n=e.name)&&(e.name=\"\"),e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,\"\"!==n&&(e.name=n)}function _e(e,t,n){\"number\"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=\"\"+e._wrapperState.initialValue:e.defaultValue!==\"\"+n&&(e.defaultValue=\"\"+n))}function Pe(e,t){return e=u({children:void 0},t),(t=function(e){var t=\"\";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function Oe(e,t,n,r){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t[\"$\"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty(\"$\"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&r&&(e[n].defaultSelected=!0)}else{for(n=\"\"+Ee(n),t=null,u=0;u<e.length;u++){if(e[u].value===n)return e[u].selected=!0,void(r&&(e[u].defaultSelected=!0));null!==t||e[u].disabled||(t=e[u])}null!==t&&(t.selected=!0)}}function Ne(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return u({},t,{value:void 0,defaultValue:void 0,children:\"\"+e._wrapperState.initialValue})}function je(e,t){var n=t.value;if(null==n){if(n=t.defaultValue,null!=(t=t.children)){if(null!=n)throw Error(i(92));if(Array.isArray(t)){if(!(1>=t.length))throw Error(i(93));t=t[0]}n=t}null==n&&(n=\"\")}e._wrapperState={initialValue:Ee(n)}}function Re(e,t){var n=Ee(t.value),r=Ee(t.defaultValue);null!=n&&((n=\"\"+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=\"\"+r)}function Me(e){var t=e.textContent;t===e._wrapperState.initialValue&&\"\"!==t&&null!==t&&(e.value=t)}\"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height\".split(\" \").forEach((function(e){var t=e.replace(ye,be);De[t]=new ve(t,1,!1,e,null,!1)})),\"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type\".split(\" \").forEach((function(e){var t=e.replace(ye,be);De[t]=new ve(t,1,!1,e,\"http://www.w3.org/1999/xlink\",!1)})),[\"xml:base\",\"xml:lang\",\"xml:space\"].forEach((function(e){var t=e.replace(ye,be);De[t]=new ve(t,1,!1,e,\"http://www.w3.org/XML/1998/namespace\",!1)})),[\"tabIndex\",\"crossOrigin\"].forEach((function(e){De[e]=new ve(e,1,!1,e.toLowerCase(),null,!1)})),De.xlinkHref=new ve(\"xlinkHref\",1,!1,\"xlink:href\",\"http://www.w3.org/1999/xlink\",!0),[\"src\",\"href\",\"action\",\"formAction\"].forEach((function(e){De[e]=new ve(e,1,!1,e.toLowerCase(),null,!0)}));var Ie={html:\"http://www.w3.org/1999/xhtml\",mathml:\"http://www.w3.org/1998/Math/MathML\",svg:\"http://www.w3.org/2000/svg\"};function Le(e){switch(e){case\"svg\":return\"http://www.w3.org/2000/svg\";case\"math\":return\"http://www.w3.org/1998/Math/MathML\";default:return\"http://www.w3.org/1999/xhtml\"}}function qe(e,t){return null==e||\"http://www.w3.org/1999/xhtml\"===e?Le(t):\"http://www.w3.org/2000/svg\"===e&&\"foreignObject\"===t?\"http://www.w3.org/1999/xhtml\":e}var Ue,ze=function(e){return\"undefined\"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,u){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Ie.svg||\"innerHTML\"in e)e.innerHTML=t;else{for((Ue=Ue||document.createElement(\"div\")).innerHTML=\"<svg>\"+t.valueOf().toString()+\"</svg>\",t=Ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Ve(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[\"Webkit\"+e]=\"webkit\"+t,n[\"Moz\"+e]=\"moz\"+t,n}var We={animationend:Ve(\"Animation\",\"AnimationEnd\"),animationiteration:Ve(\"Animation\",\"AnimationIteration\"),animationstart:Ve(\"Animation\",\"AnimationStart\"),transitionend:Ve(\"Transition\",\"TransitionEnd\")},$e={},Ge={};function Qe(e){if($e[e])return $e[e];if(!We[e])return e;var t,n=We[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ge)return $e[e]=n[t];return e}Z&&(Ge=document.createElement(\"div\").style,\"AnimationEvent\"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),\"TransitionEvent\"in window||delete We.transitionend.transition);var Ke=Qe(\"animationend\"),Ye=Qe(\"animationiteration\"),Je=Qe(\"animationstart\"),Xe=Qe(\"transitionend\"),Ze=\"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting\".split(\" \");function et(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function tt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function nt(e){if(et(e)!==e)throw Error(i(188))}function rt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=et(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var u=n.return;if(null===u)break;var o=u.alternate;if(null===o){if(null!==(r=u.return)){n=r;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===n)return nt(u),e;if(o===r)return nt(u),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=u,r=o;else{for(var a=!1,l=u.child;l;){if(l===n){a=!0,n=u,r=o;break}if(l===r){a=!0,r=u,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=u;break}if(l===r){a=!0,r=o,n=u;break}l=l.sibling}if(!a)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}var ut,ot,it,at=!1,lt=[],ct=null,st=null,ft=null,dt=new Map,pt=new Map,ht=[],mt=\"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit\".split(\" \"),gt=\"focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture\".split(\" \");function vt(e,t,n,r){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:r}}function Dt(e,t){switch(e){case\"focus\":case\"blur\":ct=null;break;case\"dragenter\":case\"dragleave\":st=null;break;case\"mouseover\":case\"mouseout\":ft=null;break;case\"pointerover\":case\"pointerout\":dt.delete(t.pointerId);break;case\"gotpointercapture\":case\"lostpointercapture\":pt.delete(t.pointerId)}}function yt(e,t,n,r,u){return null===e||e.nativeEvent!==u?(e=vt(t,n,r,u),null!==t&&(null!==(t=pr(t))&&ot(t)),e):(e.eventSystemFlags|=r,e)}function bt(e){var t=dr(e.target);if(null!==t){var n=et(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=tt(n)))return e.blockedOn=t,void o.unstable_runWithPriority(e.priority,(function(){it(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Et(e){if(null!==e.blockedOn)return!1;var t=_n(e.topLevelType,e.eventSystemFlags,e.nativeEvent);if(null!==t){var n=pr(t);return null!==n&&ot(n),e.blockedOn=t,!1}return!0}function Ct(e,t,n){Et(e)&&n.delete(t)}function At(){for(at=!1;0<lt.length;){var e=lt[0];if(null!==e.blockedOn){null!==(e=pr(e.blockedOn))&&ut(e);break}var t=_n(e.topLevelType,e.eventSystemFlags,e.nativeEvent);null!==t?e.blockedOn=t:lt.shift()}null!==ct&&Et(ct)&&(ct=null),null!==st&&Et(st)&&(st=null),null!==ft&&Et(ft)&&(ft=null),dt.forEach(Ct),pt.forEach(Ct)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,At)))}function wt(e){function t(t){return Ft(t,e)}if(0<lt.length){Ft(lt[0],e);for(var n=1;n<lt.length;n++){var r=lt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==ct&&Ft(ct,e),null!==st&&Ft(st,e),null!==ft&&Ft(ft,e),dt.forEach(t),pt.forEach(t),n=0;n<ht.length;n++)(r=ht[n]).blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&null===(n=ht[0]).blockedOn;)bt(n),null===n.blockedOn&&ht.shift()}function xt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function Bt(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function kt(e,t,n){(t=P(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=x(n._dispatchListeners,t),n._dispatchInstances=x(n._dispatchInstances,e))}function St(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Bt(t);for(t=n.length;0<t--;)kt(n[t],\"captured\",e);for(t=0;t<n.length;t++)kt(n[t],\"bubbled\",e)}}function Tt(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=P(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=x(n._dispatchListeners,t),n._dispatchInstances=x(n._dispatchInstances,e))}function _t(e){e&&e.dispatchConfig.registrationName&&Tt(e._targetInst,null,e)}function Pt(e){B(e,St)}function Ot(){return!0}function Nt(){return!1}function jt(e,t,n,r){for(var u in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(u)&&((t=e[u])?this[u]=t(n):\"target\"===u?this.target=r:this[u]=n[u]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Ot:Nt,this.isPropagationStopped=Nt,this}function Rt(e,t,n,r){if(this.eventPool.length){var u=this.eventPool.pop();return this.call(u,e,t,n,r),u}return new this(e,t,n,r)}function Mt(e){if(!(e instanceof this))throw Error(i(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function It(e){e.eventPool=[],e.getPooled=Rt,e.release=Mt}u(jt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():\"unknown\"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ot)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():\"unknown\"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ot)},persist:function(){this.isPersistent=Ot},isPersistent:Nt,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Nt,this._dispatchInstances=this._dispatchListeners=null}}),jt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jt.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return u(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=u({},r.Interface,e),n.extend=r.extend,It(n),n},It(jt);var Lt=jt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),qt=jt.extend({clipboardData:function(e){return\"clipboardData\"in e?e.clipboardData:window.clipboardData}}),Ut=jt.extend({view:null,detail:null}),zt=Ut.extend({relatedTarget:null});function Ht(e){var t=e.keyCode;return\"charCode\"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Vt={Esc:\"Escape\",Spacebar:\" \",Left:\"ArrowLeft\",Up:\"ArrowUp\",Right:\"ArrowRight\",Down:\"ArrowDown\",Del:\"Delete\",Win:\"OS\",Menu:\"ContextMenu\",Apps:\"ContextMenu\",Scroll:\"ScrollLock\",MozPrintableKey:\"Unidentified\"},Wt={8:\"Backspace\",9:\"Tab\",12:\"Clear\",13:\"Enter\",16:\"Shift\",17:\"Control\",18:\"Alt\",19:\"Pause\",20:\"CapsLock\",27:\"Escape\",32:\" \",33:\"PageUp\",34:\"PageDown\",35:\"End\",36:\"Home\",37:\"ArrowLeft\",38:\"ArrowUp\",39:\"ArrowRight\",40:\"ArrowDown\",45:\"Insert\",46:\"Delete\",112:\"F1\",113:\"F2\",114:\"F3\",115:\"F4\",116:\"F5\",117:\"F6\",118:\"F7\",119:\"F8\",120:\"F9\",121:\"F10\",122:\"F11\",123:\"F12\",144:\"NumLock\",145:\"ScrollLock\",224:\"Meta\"},$t={Alt:\"altKey\",Control:\"ctrlKey\",Meta:\"metaKey\",Shift:\"shiftKey\"};function Gt(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=$t[e])&&!!t[e]}function Qt(){return Gt}for(var Kt=Ut.extend({key:function(e){if(e.key){var t=Vt[e.key]||e.key;if(\"Unidentified\"!==t)return t}return\"keypress\"===e.type?13===(e=Ht(e))?\"Enter\":String.fromCharCode(e):\"keydown\"===e.type||\"keyup\"===e.type?Wt[e.keyCode]||\"Unidentified\":\"\"},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qt,charCode:function(e){return\"keypress\"===e.type?Ht(e):0},keyCode:function(e){return\"keydown\"===e.type||\"keyup\"===e.type?e.keyCode:0},which:function(e){return\"keypress\"===e.type?Ht(e):\"keydown\"===e.type||\"keyup\"===e.type?e.keyCode:0}}),Yt=0,Jt=0,Xt=!1,Zt=!1,en=Ut.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qt,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if(\"movementX\"in e)return e.movementX;var t=Yt;return Yt=e.screenX,Xt?\"mousemove\"===e.type?e.screenX-t:0:(Xt=!0,0)},movementY:function(e){if(\"movementY\"in e)return e.movementY;var t=Jt;return Jt=e.screenY,Zt?\"mousemove\"===e.type?e.screenY-t:0:(Zt=!0,0)}}),tn=en.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),nn=en.extend({dataTransfer:null}),rn=Ut.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qt}),un=jt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),on=en.extend({deltaX:function(e){return\"deltaX\"in e?e.deltaX:\"wheelDeltaX\"in e?-e.wheelDeltaX:0},deltaY:function(e){return\"deltaY\"in e?e.deltaY:\"wheelDeltaY\"in e?-e.wheelDeltaY:\"wheelDelta\"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),an=[[\"blur\",\"blur\",0],[\"cancel\",\"cancel\",0],[\"click\",\"click\",0],[\"close\",\"close\",0],[\"contextmenu\",\"contextMenu\",0],[\"copy\",\"copy\",0],[\"cut\",\"cut\",0],[\"auxclick\",\"auxClick\",0],[\"dblclick\",\"doubleClick\",0],[\"dragend\",\"dragEnd\",0],[\"dragstart\",\"dragStart\",0],[\"drop\",\"drop\",0],[\"focus\",\"focus\",0],[\"input\",\"input\",0],[\"invalid\",\"invalid\",0],[\"keydown\",\"keyDown\",0],[\"keypress\",\"keyPress\",0],[\"keyup\",\"keyUp\",0],[\"mousedown\",\"mouseDown\",0],[\"mouseup\",\"mouseUp\",0],[\"paste\",\"paste\",0],[\"pause\",\"pause\",0],[\"play\",\"play\",0],[\"pointercancel\",\"pointerCancel\",0],[\"pointerdown\",\"pointerDown\",0],[\"pointerup\",\"pointerUp\",0],[\"ratechange\",\"rateChange\",0],[\"reset\",\"reset\",0],[\"seeked\",\"seeked\",0],[\"submit\",\"submit\",0],[\"touchcancel\",\"touchCancel\",0],[\"touchend\",\"touchEnd\",0],[\"touchstart\",\"touchStart\",0],[\"volumechange\",\"volumeChange\",0],[\"drag\",\"drag\",1],[\"dragenter\",\"dragEnter\",1],[\"dragexit\",\"dragExit\",1],[\"dragleave\",\"dragLeave\",1],[\"dragover\",\"dragOver\",1],[\"mousemove\",\"mouseMove\",1],[\"mouseout\",\"mouseOut\",1],[\"mouseover\",\"mouseOver\",1],[\"pointermove\",\"pointerMove\",1],[\"pointerout\",\"pointerOut\",1],[\"pointerover\",\"pointerOver\",1],[\"scroll\",\"scroll\",1],[\"toggle\",\"toggle\",1],[\"touchmove\",\"touchMove\",1],[\"wheel\",\"wheel\",1],[\"abort\",\"abort\",2],[Ke,\"animationEnd\",2],[Ye,\"animationIteration\",2],[Je,\"animationStart\",2],[\"canplay\",\"canPlay\",2],[\"canplaythrough\",\"canPlayThrough\",2],[\"durationchange\",\"durationChange\",2],[\"emptied\",\"emptied\",2],[\"encrypted\",\"encrypted\",2],[\"ended\",\"ended\",2],[\"error\",\"error\",2],[\"gotpointercapture\",\"gotPointerCapture\",2],[\"load\",\"load\",2],[\"loadeddata\",\"loadedData\",2],[\"loadedmetadata\",\"loadedMetadata\",2],[\"loadstart\",\"loadStart\",2],[\"lostpointercapture\",\"lostPointerCapture\",2],[\"playing\",\"playing\",2],[\"progress\",\"progress\",2],[\"seeking\",\"seeking\",2],[\"stalled\",\"stalled\",2],[\"suspend\",\"suspend\",2],[\"timeupdate\",\"timeUpdate\",2],[Xe,\"transitionEnd\",2],[\"waiting\",\"waiting\",2]],ln={},cn={},sn=0;sn<an.length;sn++){var fn=an[sn],dn=fn[0],pn=fn[1],hn=fn[2],mn=\"on\"+(pn[0].toUpperCase()+pn.slice(1)),gn={phasedRegistrationNames:{bubbled:mn,captured:mn+\"Capture\"},dependencies:[dn],eventPriority:hn};ln[pn]=gn,cn[dn]=gn}var vn={eventTypes:ln,getEventPriority:function(e){return void 0!==(e=cn[e])?e.eventPriority:2},extractEvents:function(e,t,n,r){var u=cn[e];if(!u)return null;switch(e){case\"keypress\":if(0===Ht(n))return null;case\"keydown\":case\"keyup\":e=Kt;break;case\"blur\":case\"focus\":e=zt;break;case\"click\":if(2===n.button)return null;case\"auxclick\":case\"dblclick\":case\"mousedown\":case\"mousemove\":case\"mouseup\":case\"mouseout\":case\"mouseover\":case\"contextmenu\":e=en;break;case\"drag\":case\"dragend\":case\"dragenter\":case\"dragexit\":case\"dragleave\":case\"dragover\":case\"dragstart\":case\"drop\":e=nn;break;case\"touchcancel\":case\"touchend\":case\"touchmove\":case\"touchstart\":e=rn;break;case Ke:case Ye:case Je:e=Lt;break;case Xe:e=un;break;case\"scroll\":e=Ut;break;case\"wheel\":e=on;break;case\"copy\":case\"cut\":case\"paste\":e=qt;break;case\"gotpointercapture\":case\"lostpointercapture\":case\"pointercancel\":case\"pointerdown\":case\"pointermove\":case\"pointerout\":case\"pointerover\":case\"pointerup\":e=tn;break;default:e=jt}return Pt(t=e.getPooled(u,t,n,r)),t}},Dn=o.unstable_UserBlockingPriority,yn=o.unstable_runWithPriority,bn=vn.getEventPriority,En=10,Cn=[];function An(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=dr(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var u=xt(e.nativeEvent);r=e.topLevelType;for(var o=e.nativeEvent,i=e.eventSystemFlags,a=null,l=0;l<f.length;l++){var c=f[l];c&&(c=c.extractEvents(r,t,o,u,i))&&(a=x(a,c))}T(a)}}var Fn=!0;function wn(e,t){xn(t,e,!1)}function xn(e,t,n){switch(bn(t)){case 0:var r=Bn.bind(null,t,1);break;case 1:r=kn.bind(null,t,1);break;default:r=Tn.bind(null,t,1)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Bn(e,t,n){se||le();var r=Tn,u=se;se=!0;try{ae(r,e,t,n)}finally{(se=u)||de()}}function kn(e,t,n){yn(Dn,Tn.bind(null,e,t,n))}function Sn(e,t,n,r){if(Cn.length){var u=Cn.pop();u.topLevelType=e,u.eventSystemFlags=t,u.nativeEvent=n,u.targetInst=r,e=u}else e={topLevelType:e,eventSystemFlags:t,nativeEvent:n,targetInst:r,ancestors:[]};try{if(t=An,n=e,fe)t(n,void 0);else{fe=!0;try{ce(t,n,void 0)}finally{fe=!1,de()}}}finally{e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,Cn.length<En&&Cn.push(e)}}function Tn(e,t,n){if(Fn)if(0<lt.length&&-1<mt.indexOf(e))e=vt(null,e,t,n),lt.push(e);else{var r=_n(e,t,n);null===r?Dt(e,n):-1<mt.indexOf(e)?(e=vt(r,e,t,n),lt.push(e)):function(e,t,n,r){switch(t){case\"focus\":return ct=yt(ct,e,t,n,r),!0;case\"dragenter\":return st=yt(st,e,t,n,r),!0;case\"mouseover\":return ft=yt(ft,e,t,n,r),!0;case\"pointerover\":var u=r.pointerId;return dt.set(u,yt(dt.get(u)||null,e,t,n,r)),!0;case\"gotpointercapture\":return u=r.pointerId,pt.set(u,yt(pt.get(u)||null,e,t,n,r)),!0}return!1}(r,e,t,n)||(Dt(e,n),Sn(e,t,n,null))}}function _n(e,t,n){var r=xt(n);if(null!==(r=dr(r))){var u=et(r);if(null===u)r=null;else{var o=u.tag;if(13===o){if(null!==(r=tt(u)))return r;r=null}else if(3===o){if(u.stateNode.hydrate)return 3===u.tag?u.stateNode.containerInfo:null;r=null}else u!==r&&(r=null)}}return Sn(e,t,n,r),null}function Pn(e){if(!Z)return!1;var t=(e=\"on\"+e)in document;return t||((t=document.createElement(\"div\")).setAttribute(e,\"return;\"),t=\"function\"===typeof t[e]),t}var On=new(\"function\"===typeof WeakMap?WeakMap:Map);function Nn(e){var t=On.get(e);return void 0===t&&(t=new Set,On.set(e,t)),t}function jn(e,t,n){if(!n.has(e)){switch(e){case\"scroll\":xn(t,\"scroll\",!0);break;case\"focus\":case\"blur\":xn(t,\"focus\",!0),xn(t,\"blur\",!0),n.add(\"blur\"),n.add(\"focus\");break;case\"cancel\":case\"close\":Pn(e)&&xn(t,e,!0);break;case\"invalid\":case\"submit\":case\"reset\":break;default:-1===Ze.indexOf(e)&&wn(e,t)}n.add(e)}}var Rn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mn=[\"Webkit\",\"ms\",\"Moz\",\"O\"];function In(e,t,n){return null==t||\"boolean\"===typeof t||\"\"===t?\"\":n||\"number\"!==typeof t||0===t||Rn.hasOwnProperty(e)&&Rn[e]?(\"\"+t).trim():t+\"px\"}function Ln(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf(\"--\"),u=In(n,t[n],r);\"float\"===n&&(n=\"cssFloat\"),r?e.setProperty(n,u):e[n]=u}}Object.keys(Rn).forEach((function(e){Mn.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]}))}));var qn=u({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Un(e,t){if(t){if(qn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e,\"\"));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if(!(\"object\"===typeof t.dangerouslySetInnerHTML&&\"__html\"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&\"object\"!==typeof t.style)throw Error(i(62,\"\"))}}function zn(e,t){if(-1===e.indexOf(\"-\"))return\"string\"===typeof t.is;switch(e){case\"annotation-xml\":case\"color-profile\":case\"font-face\":case\"font-face-src\":case\"font-face-uri\":case\"font-face-format\":case\"font-face-name\":case\"missing-glyph\":return!1;default:return!0}}function Hn(e,t){var n=Nn(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=h[t];for(var r=0;r<t.length;r++)jn(t[r],e,n)}function Vn(){}function Wn(e){if(\"undefined\"===typeof(e=e||(\"undefined\"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function $n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gn(e,t){var n,r=$n(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=$n(r)}}function Qn(){for(var e=window,t=Wn();t instanceof e.HTMLIFrameElement;){try{var n=\"string\"===typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=Wn((e=t.contentWindow).document)}return t}function Kn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(\"input\"===t&&(\"text\"===e.type||\"search\"===e.type||\"tel\"===e.type||\"url\"===e.type||\"password\"===e.type)||\"textarea\"===t||\"true\"===e.contentEditable)}var Yn=\"$\",Jn=\"/$\",Xn=\"$?\",Zn=\"$!\",er=null,tr=null;function nr(e,t){switch(e){case\"button\":case\"input\":case\"select\":case\"textarea\":return!!t.autoFocus}return!1}function rr(e,t){return\"textarea\"===e||\"option\"===e||\"noscript\"===e||\"string\"===typeof t.children||\"number\"===typeof t.children||\"object\"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ur=\"function\"===typeof setTimeout?setTimeout:void 0,or=\"function\"===typeof clearTimeout?clearTimeout:void 0;function ir(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function ar(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if(n===Yn||n===Zn||n===Xn){if(0===t)return e;t--}else n===Jn&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),cr=\"__reactInternalInstance$\"+lr,sr=\"__reactEventHandlers$\"+lr,fr=\"__reactContainere$\"+lr;function dr(e){var t=e[cr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[cr]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ar(e);null!==e;){if(n=e[cr])return n;e=ar(e)}return t}n=(e=n).parentNode}return null}function pr(e){return!(e=e[cr]||e[fr])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function hr(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function mr(e){return e[sr]||null}var gr=null,vr=null,Dr=null;function yr(){if(Dr)return Dr;var e,t,n=vr,r=n.length,u=\"value\"in gr?gr.value:gr.textContent,o=u.length;for(e=0;e<r&&n[e]===u[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===u[o-t];t++);return Dr=u.slice(e,1<t?1-t:void 0)}var br=jt.extend({data:null}),Er=jt.extend({data:null}),Cr=[9,13,27,32],Ar=Z&&\"CompositionEvent\"in window,Fr=null;Z&&\"documentMode\"in document&&(Fr=document.documentMode);var wr=Z&&\"TextEvent\"in window&&!Fr,xr=Z&&(!Ar||Fr&&8<Fr&&11>=Fr),Br=String.fromCharCode(32),kr={beforeInput:{phasedRegistrationNames:{bubbled:\"onBeforeInput\",captured:\"onBeforeInputCapture\"},dependencies:[\"compositionend\",\"keypress\",\"textInput\",\"paste\"]},compositionEnd:{phasedRegistrationNames:{bubbled:\"onCompositionEnd\",captured:\"onCompositionEndCapture\"},dependencies:\"blur compositionend keydown keypress keyup mousedown\".split(\" \")},compositionStart:{phasedRegistrationNames:{bubbled:\"onCompositionStart\",captured:\"onCompositionStartCapture\"},dependencies:\"blur compositionstart keydown keypress keyup mousedown\".split(\" \")},compositionUpdate:{phasedRegistrationNames:{bubbled:\"onCompositionUpdate\",captured:\"onCompositionUpdateCapture\"},dependencies:\"blur compositionupdate keydown keypress keyup mousedown\".split(\" \")}},Sr=!1;function Tr(e,t){switch(e){case\"keyup\":return-1!==Cr.indexOf(t.keyCode);case\"keydown\":return 229!==t.keyCode;case\"keypress\":case\"mousedown\":case\"blur\":return!0;default:return!1}}function _r(e){return\"object\"===typeof(e=e.detail)&&\"data\"in e?e.data:null}var Pr=!1;var Or={eventTypes:kr,extractEvents:function(e,t,n,r){var u;if(Ar)e:{switch(e){case\"compositionstart\":var o=kr.compositionStart;break e;case\"compositionend\":o=kr.compositionEnd;break e;case\"compositionupdate\":o=kr.compositionUpdate;break e}o=void 0}else Pr?Tr(e,n)&&(o=kr.compositionEnd):\"keydown\"===e&&229===n.keyCode&&(o=kr.compositionStart);return o?(xr&&\"ko\"!==n.locale&&(Pr||o!==kr.compositionStart?o===kr.compositionEnd&&Pr&&(u=yr()):(vr=\"value\"in(gr=r)?gr.value:gr.textContent,Pr=!0)),o=br.getPooled(o,t,n,r),u?o.data=u:null!==(u=_r(n))&&(o.data=u),Pt(o),u=o):u=null,(e=wr?function(e,t){switch(e){case\"compositionend\":return _r(t);case\"keypress\":return 32!==t.which?null:(Sr=!0,Br);case\"textInput\":return(e=t.data)===Br&&Sr?null:e;default:return null}}(e,n):function(e,t){if(Pr)return\"compositionend\"===e||!Ar&&Tr(e,t)?(e=yr(),Dr=vr=gr=null,Pr=!1,e):null;switch(e){case\"paste\":return null;case\"keypress\":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case\"compositionend\":return xr&&\"ko\"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Er.getPooled(kr.beforeInput,t,n,r)).data=e,Pt(t)):t=null,null===u?t:null===t?u:[u,t]}},Nr={color:!0,date:!0,datetime:!0,\"datetime-local\":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return\"input\"===t?!!Nr[e.type]:\"textarea\"===t}var Rr={change:{phasedRegistrationNames:{bubbled:\"onChange\",captured:\"onChangeCapture\"},dependencies:\"blur change click focus input keydown keyup selectionchange\".split(\" \")}};function Mr(e,t,n){return(e=jt.getPooled(Rr.change,e,t,n)).type=\"change\",ue(n),Pt(e),e}var Ir=null,Lr=null;function qr(e){T(e)}function Ur(e){if(we(hr(e)))return e}function zr(e,t){if(\"change\"===e)return t}var Hr=!1;function Vr(){Ir&&(Ir.detachEvent(\"onpropertychange\",Wr),Lr=Ir=null)}function Wr(e){if(\"value\"===e.propertyName&&Ur(Lr))if(e=Mr(Lr,e,xt(e)),se)T(e);else{se=!0;try{ie(qr,e)}finally{se=!1,de()}}}function $r(e,t,n){\"focus\"===e?(Vr(),Lr=n,(Ir=t).attachEvent(\"onpropertychange\",Wr)):\"blur\"===e&&Vr()}function Gr(e){if(\"selectionchange\"===e||\"keyup\"===e||\"keydown\"===e)return Ur(Lr)}function Qr(e,t){if(\"click\"===e)return Ur(t)}function Kr(e,t){if(\"input\"===e||\"change\"===e)return Ur(t)}Z&&(Hr=Pn(\"input\")&&(!document.documentMode||9<document.documentMode));var Yr,Jr={eventTypes:Rr,_isInputEventSupported:Hr,extractEvents:function(e,t,n,r){var u=t?hr(t):window,o=u.nodeName&&u.nodeName.toLowerCase();if(\"select\"===o||\"input\"===o&&\"file\"===u.type)var i=zr;else if(jr(u))if(Hr)i=Kr;else{i=Gr;var a=$r}else(o=u.nodeName)&&\"input\"===o.toLowerCase()&&(\"checkbox\"===u.type||\"radio\"===u.type)&&(i=Qr);if(i&&(i=i(e,t)))return Mr(i,n,r);a&&a(e,u,t),\"blur\"===e&&(e=u._wrapperState)&&e.controlled&&\"number\"===u.type&&_e(u,\"number\",u.value)}},Xr={mouseEnter:{registrationName:\"onMouseEnter\",dependencies:[\"mouseout\",\"mouseover\"]},mouseLeave:{registrationName:\"onMouseLeave\",dependencies:[\"mouseout\",\"mouseover\"]},pointerEnter:{registrationName:\"onPointerEnter\",dependencies:[\"pointerout\",\"pointerover\"]},pointerLeave:{registrationName:\"onPointerLeave\",dependencies:[\"pointerout\",\"pointerover\"]}},Zr={eventTypes:Xr,extractEvents:function(e,t,n,r,u){var o=\"mouseover\"===e||\"pointerover\"===e,i=\"mouseout\"===e||\"pointerout\"===e;if(o&&0===(32&u)&&(n.relatedTarget||n.fromElement)||!i&&!o)return null;if(u=r.window===r?r:(u=r.ownerDocument)?u.defaultView||u.parentWindow:window,i?(i=t,null!==(t=(t=n.relatedTarget||n.toElement)?dr(t):null)&&(t!==(o=et(t))||5!==t.tag&&6!==t.tag)&&(t=null)):i=null,i===t)return null;if(\"mouseout\"===e||\"mouseover\"===e)var a=en,l=Xr.mouseLeave,c=Xr.mouseEnter,s=\"mouse\";else\"pointerout\"!==e&&\"pointerover\"!==e||(a=tn,l=Xr.pointerLeave,c=Xr.pointerEnter,s=\"pointer\");if(e=null==i?u:hr(i),u=null==t?u:hr(t),(l=a.getPooled(l,i,n,r)).type=s+\"leave\",l.target=e,l.relatedTarget=u,(r=a.getPooled(c,t,n,r)).type=s+\"enter\",r.target=u,r.relatedTarget=e,s=t,(a=i)&&s)e:{for(e=s,i=0,t=c=a;t;t=Bt(t))i++;for(t=0,u=e;u;u=Bt(u))t++;for(;0<i-t;)c=Bt(c),i--;for(;0<t-i;)e=Bt(e),t--;for(;i--;){if(c===e||c===e.alternate)break e;c=Bt(c),e=Bt(e)}c=null}else c=null;for(e=c,c=[];a&&a!==e&&(null===(i=a.alternate)||i!==e);)c.push(a),a=Bt(a);for(a=[];s&&s!==e&&(null===(i=s.alternate)||i!==e);)a.push(s),s=Bt(s);for(s=0;s<c.length;s++)Tt(c[s],\"bubbled\",l);for(s=a.length;0<s--;)Tt(a[s],\"captured\",r);return n===Yr?(Yr=null,[l]):(Yr=n,[l,r])}};var eu=\"function\"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},tu=Object.prototype.hasOwnProperty;function nu(e,t){if(eu(e,t))return!0;if(\"object\"!==typeof e||null===e||\"object\"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!tu.call(t,n[r])||!eu(e[n[r]],t[n[r]]))return!1;return!0}var ru=Z&&\"documentMode\"in document&&11>=document.documentMode,uu={select:{phasedRegistrationNames:{bubbled:\"onSelect\",captured:\"onSelectCapture\"},dependencies:\"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange\".split(\" \")}},ou=null,iu=null,au=null,lu=!1;function cu(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return lu||null==ou||ou!==Wn(n)?null:(\"selectionStart\"in(n=ou)&&Kn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},au&&nu(au,n)?null:(au=n,(e=jt.getPooled(uu.select,iu,e,t)).type=\"select\",e.target=ou,Pt(e),e))}var su={eventTypes:uu,extractEvents:function(e,t,n,r){var u,o=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;if(!(u=!o)){e:{o=Nn(o),u=h.onSelect;for(var i=0;i<u.length;i++)if(!o.has(u[i])){o=!1;break e}o=!0}u=!o}if(u)return null;switch(o=t?hr(t):window,e){case\"focus\":(jr(o)||\"true\"===o.contentEditable)&&(ou=o,iu=t,au=null);break;case\"blur\":au=iu=ou=null;break;case\"mousedown\":lu=!0;break;case\"contextmenu\":case\"mouseup\":case\"dragend\":return lu=!1,cu(n,r);case\"selectionchange\":if(ru)break;case\"keydown\":case\"keyup\":return cu(n,r)}return null}};_.injectEventPluginOrder(\"ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin\".split(\" \")),C=mr,A=pr,F=hr,_.injectEventPluginsByName({SimpleEventPlugin:vn,EnterLeaveEventPlugin:Zr,ChangeEventPlugin:Jr,SelectEventPlugin:su,BeforeInputEventPlugin:Or}),new Set;var fu=[],du=-1;function pu(e){0>du||(e.current=fu[du],fu[du]=null,du--)}function hu(e,t){du++,fu[du]=e.current,e.current=t}var mu={},gu={current:mu},vu={current:!1},Du=mu;function yu(e,t){var n=e.type.contextTypes;if(!n)return mu;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var u,o={};for(u in n)o[u]=t[u];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function bu(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Eu(e){pu(vu),pu(gu)}function Cu(e){pu(vu),pu(gu)}function Au(e,t,n){if(gu.current!==mu)throw Error(i(168));hu(gu,t),hu(vu,n)}function Fu(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,\"function\"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(i(108,J(t)||\"Unknown\",o));return u({},n,{},r)}function wu(e){var t=e.stateNode;return t=t&&t.__reactInternalMemoizedMergedChildContext||mu,Du=gu.current,hu(gu,t),hu(vu,vu.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(t=Fu(e,t,Du),r.__reactInternalMemoizedMergedChildContext=t,pu(vu),pu(gu),hu(gu,t)):pu(vu),hu(vu,n)}var Bu=o.unstable_runWithPriority,ku=o.unstable_scheduleCallback,Su=o.unstable_cancelCallback,Tu=o.unstable_shouldYield,_u=o.unstable_requestPaint,Pu=o.unstable_now,Ou=o.unstable_getCurrentPriorityLevel,Nu=o.unstable_ImmediatePriority,ju=o.unstable_UserBlockingPriority,Ru=o.unstable_NormalPriority,Mu=o.unstable_LowPriority,Iu=o.unstable_IdlePriority,Lu={},qu=void 0!==_u?_u:function(){},Uu=null,zu=null,Hu=!1,Vu=Pu(),Wu=1e4>Vu?Pu:function(){return Pu()-Vu};function $u(){switch(Ou()){case Nu:return 99;case ju:return 98;case Ru:return 97;case Mu:return 96;case Iu:return 95;default:throw Error(i(332))}}function Gu(e){switch(e){case 99:return Nu;case 98:return ju;case 97:return Ru;case 96:return Mu;case 95:return Iu;default:throw Error(i(332))}}function Qu(e,t){return e=Gu(e),Bu(e,t)}function Ku(e,t,n){return e=Gu(e),ku(e,t,n)}function Yu(e){return null===Uu?(Uu=[e],zu=ku(Nu,Xu)):Uu.push(e),Lu}function Ju(){if(null!==zu){var e=zu;zu=null,Su(e)}Xu()}function Xu(){if(!Hu&&null!==Uu){Hu=!0;var e=0;try{var t=Uu;Qu(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Uu=null}catch(t){throw null!==Uu&&(Uu=Uu.slice(e+1)),ku(Nu,Ju),t}finally{Hu=!1}}}var Zu=3;function eo(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function to(e,t){if(e&&e.defaultProps)for(var n in t=u({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var no={current:null},ro=null,uo=null,oo=null;function io(){oo=uo=ro=null}function ao(e,t){var n=e.type._context;hu(no,n._currentValue),n._currentValue=t}function lo(e){var t=no.current;pu(no),e.type._context._currentValue=t}function co(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function so(e,t){ro=e,oo=uo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Wi=!0),e.firstContext=null)}function fo(e,t){if(oo!==e&&!1!==t&&0!==t)if(\"number\"===typeof t&&1073741823!==t||(oo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===uo){if(null===ro)throw Error(i(308));uo=t,ro.dependencies={expirationTime:0,firstContext:t,responders:null}}else uo=uo.next=t;return e._currentValue}var po=!1;function ho(e){return{baseState:e,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function mo(e){return{baseState:e.baseState,firstUpdate:e.firstUpdate,lastUpdate:e.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function go(e,t){return{expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function vo(e,t){null===e.lastUpdate?e.firstUpdate=e.lastUpdate=t:(e.lastUpdate.next=t,e.lastUpdate=t)}function Do(e,t){var n=e.alternate;if(null===n){var r=e.updateQueue,u=null;null===r&&(r=e.updateQueue=ho(e.memoizedState))}else r=e.updateQueue,u=n.updateQueue,null===r?null===u?(r=e.updateQueue=ho(e.memoizedState),u=n.updateQueue=ho(n.memoizedState)):r=e.updateQueue=mo(u):null===u&&(u=n.updateQueue=mo(r));null===u||r===u?vo(r,t):null===r.lastUpdate||null===u.lastUpdate?(vo(r,t),vo(u,t)):(vo(r,t),u.lastUpdate=t)}function yo(e,t){var n=e.updateQueue;null===(n=null===n?e.updateQueue=ho(e.memoizedState):bo(e,n)).lastCapturedUpdate?n.firstCapturedUpdate=n.lastCapturedUpdate=t:(n.lastCapturedUpdate.next=t,n.lastCapturedUpdate=t)}function bo(e,t){var n=e.alternate;return null!==n&&t===n.updateQueue&&(t=e.updateQueue=mo(t)),t}function Eo(e,t,n,r,o,i){switch(n.tag){case 1:return\"function\"===typeof(e=n.payload)?e.call(i,r,o):e;case 3:e.effectTag=-4097&e.effectTag|64;case 0:if(null===(o=\"function\"===typeof(e=n.payload)?e.call(i,r,o):e)||void 0===o)break;return u({},r,o);case 2:po=!0}return r}function Co(e,t,n,r,u){po=!1;for(var o=(t=bo(e,t)).baseState,i=null,a=0,l=t.firstUpdate,c=o;null!==l;){var s=l.expirationTime;s<u?(null===i&&(i=l,o=c),a<s&&(a=s)):(Bl(s,l.suspenseConfig),c=Eo(e,0,l,c,n,r),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastEffect?t.firstEffect=t.lastEffect=l:(t.lastEffect.nextEffect=l,t.lastEffect=l))),l=l.next}for(s=null,l=t.firstCapturedUpdate;null!==l;){var f=l.expirationTime;f<u?(null===s&&(s=l,null===i&&(o=c)),a<f&&(a=f)):(c=Eo(e,0,l,c,n,r),null!==l.callback&&(e.effectTag|=32,l.nextEffect=null,null===t.lastCapturedEffect?t.firstCapturedEffect=t.lastCapturedEffect=l:(t.lastCapturedEffect.nextEffect=l,t.lastCapturedEffect=l))),l=l.next}null===i&&(t.lastUpdate=null),null===s?t.lastCapturedUpdate=null:e.effectTag|=32,null===i&&null===s&&(o=c),t.baseState=o,t.firstUpdate=i,t.firstCapturedUpdate=s,kl(a),e.expirationTime=a,e.memoizedState=c}function Ao(e,t,n){null!==t.firstCapturedUpdate&&(null!==t.lastUpdate&&(t.lastUpdate.next=t.firstCapturedUpdate,t.lastUpdate=t.lastCapturedUpdate),t.firstCapturedUpdate=t.lastCapturedUpdate=null),Fo(t.firstEffect,n),t.firstEffect=t.lastEffect=null,Fo(t.firstCapturedEffect,n),t.firstCapturedEffect=t.lastCapturedEffect=null}function Fo(e,t){for(;null!==e;){var n=e.callback;if(null!==n){e.callback=null;var r=t;if(\"function\"!==typeof n)throw Error(i(191,n));n.call(r)}e=e.nextEffect}}var wo=O.ReactCurrentBatchConfig,xo=(new r.Component).refs;function Bo(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:u({},t,n),e.memoizedState=n,null!==(r=e.updateQueue)&&0===e.expirationTime&&(r.baseState=n)}var ko={isMounted:function(e){return!!(e=e._reactInternalFiber)&&et(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=hl(),u=wo.suspense;(u=go(r=ml(r,e,u),u)).payload=t,void 0!==n&&null!==n&&(u.callback=n),Do(e,u),gl(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=hl(),u=wo.suspense;(u=go(r=ml(r,e,u),u)).tag=1,u.payload=t,void 0!==n&&null!==n&&(u.callback=n),Do(e,u),gl(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=hl(),r=wo.suspense;(r=go(n=ml(n,e,r),r)).tag=2,void 0!==t&&null!==t&&(r.callback=t),Do(e,r),gl(e,n)}};function So(e,t,n,r,u,o,i){return\"function\"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!nu(n,r)||!nu(u,o))}function To(e,t,n){var r=!1,u=mu,o=t.contextType;return\"object\"===typeof o&&null!==o?o=fo(o):(u=bu(t)?Du:gu.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?yu(e,u):mu),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ko,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=o),t}function _o(e,t,n,r){e=t.state,\"function\"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),\"function\"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var u=e.stateNode;u.props=n,u.state=e.memoizedState,u.refs=xo;var o=t.contextType;\"object\"===typeof o&&null!==o?u.context=fo(o):(o=bu(t)?Du:gu.current,u.context=yu(e,o)),null!==(o=e.updateQueue)&&(Co(e,o,n,u,r),u.state=e.memoizedState),\"function\"===typeof(o=t.getDerivedStateFromProps)&&(Bo(e,t,o,n),u.state=e.memoizedState),\"function\"===typeof t.getDerivedStateFromProps||\"function\"===typeof u.getSnapshotBeforeUpdate||\"function\"!==typeof u.UNSAFE_componentWillMount&&\"function\"!==typeof u.componentWillMount||(t=u.state,\"function\"===typeof u.componentWillMount&&u.componentWillMount(),\"function\"===typeof u.UNSAFE_componentWillMount&&u.UNSAFE_componentWillMount(),t!==u.state&&ko.enqueueReplaceState(u,u.state,null),null!==(o=e.updateQueue)&&(Co(e,o,n,u,r),u.state=e.memoizedState)),\"function\"===typeof u.componentDidMount&&(e.effectTag|=4)}var Oo=Array.isArray;function No(e,t,n){if(null!==(e=n.ref)&&\"function\"!==typeof e&&\"object\"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var u=\"\"+e;return null!==t&&null!==t.ref&&\"function\"===typeof t.ref&&t.ref._stringRef===u?t.ref:((t=function(e){var t=r.refs;t===xo&&(t=r.refs={}),null===e?delete t[u]:t[u]=e})._stringRef=u,t)}if(\"string\"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function jo(e,t){if(\"textarea\"!==e.type)throw Error(i(31,\"[object Object]\"===Object.prototype.toString.call(t)?\"object with keys {\"+Object.keys(t).join(\", \")+\"}\":t,\"\"))}function Ro(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function u(e,t,n){return(e=Ql(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function a(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Jl(n,e.mode,r)).return=e,t):((t=u(t,n)).return=e,t)}function c(e,t,n,r){return null!==t&&t.elementType===n.type?((r=u(t,n.props)).ref=No(e,t,n),r.return=e,r):((r=Kl(n.type,n.key,n.props,null,e.mode,r)).ref=No(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Xl(n,e.mode,r)).return=e,t):((t=u(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Yl(n,e.mode,r,o)).return=e,t):((t=u(t,n)).return=e,t)}function d(e,t,n){if(\"string\"===typeof t||\"number\"===typeof t)return(t=Jl(\"\"+t,e.mode,n)).return=e,t;if(\"object\"===typeof t&&null!==t){switch(t.$$typeof){case R:return(n=Kl(t.type,t.key,t.props,null,e.mode,n)).ref=No(e,null,t),n.return=e,n;case M:return(t=Xl(t,e.mode,n)).return=e,t}if(Oo(t)||Y(t))return(t=Yl(t,e.mode,n,null)).return=e,t;jo(e,t)}return null}function p(e,t,n,r){var u=null!==t?t.key:null;if(\"string\"===typeof n||\"number\"===typeof n)return null!==u?null:l(e,t,\"\"+n,r);if(\"object\"===typeof n&&null!==n){switch(n.$$typeof){case R:return n.key===u?n.type===I?f(e,t,n.props.children,r,u):c(e,t,n,r):null;case M:return n.key===u?s(e,t,n,r):null}if(Oo(n)||Y(n))return null!==u?null:f(e,t,n,r,null);jo(e,n)}return null}function h(e,t,n,r,u){if(\"string\"===typeof r||\"number\"===typeof r)return l(t,e=e.get(n)||null,\"\"+r,u);if(\"object\"===typeof r&&null!==r){switch(r.$$typeof){case R:return e=e.get(null===r.key?n:r.key)||null,r.type===I?f(t,e,r.props.children,u,r.key):c(t,e,r,u);case M:return s(t,e=e.get(null===r.key?n:r.key)||null,r,u)}if(Oo(r)||Y(r))return f(t,e=e.get(n)||null,r,u,null);jo(t,r)}return null}function m(u,i,a,l){for(var c=null,s=null,f=i,m=i=0,g=null;null!==f&&m<a.length;m++){f.index>m?(g=f,f=null):g=f.sibling;var v=p(u,f,a[m],l);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(u,f),i=o(v,i,m),null===s?c=v:s.sibling=v,s=v,f=g}if(m===a.length)return n(u,f),c;if(null===f){for(;m<a.length;m++)null!==(f=d(u,a[m],l))&&(i=o(f,i,m),null===s?c=f:s.sibling=f,s=f);return c}for(f=r(u,f);m<a.length;m++)null!==(g=h(f,u,m,a[m],l))&&(e&&null!==g.alternate&&f.delete(null===g.key?m:g.key),i=o(g,i,m),null===s?c=g:s.sibling=g,s=g);return e&&f.forEach((function(e){return t(u,e)})),c}function g(u,a,l,c){var s=Y(l);if(\"function\"!==typeof s)throw Error(i(150));if(null==(l=s.call(l)))throw Error(i(151));for(var f=s=null,m=a,g=a=0,v=null,D=l.next();null!==m&&!D.done;g++,D=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=p(u,m,D.value,c);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(u,m),a=o(y,a,g),null===f?s=y:f.sibling=y,f=y,m=v}if(D.done)return n(u,m),s;if(null===m){for(;!D.done;g++,D=l.next())null!==(D=d(u,D.value,c))&&(a=o(D,a,g),null===f?s=D:f.sibling=D,f=D);return s}for(m=r(u,m);!D.done;g++,D=l.next())null!==(D=h(m,u,g,D.value,c))&&(e&&null!==D.alternate&&m.delete(null===D.key?g:D.key),a=o(D,a,g),null===f?s=D:f.sibling=D,f=D);return e&&m.forEach((function(e){return t(u,e)})),s}return function(e,r,o,l){var c=\"object\"===typeof o&&null!==o&&o.type===I&&null===o.key;c&&(o=o.props.children);var s=\"object\"===typeof o&&null!==o;if(s)switch(o.$$typeof){case R:e:{for(s=o.key,c=r;null!==c;){if(c.key===s){if(7===c.tag?o.type===I:c.elementType===o.type){n(e,c.sibling),(r=u(c,o.type===I?o.props.children:o.props)).ref=No(e,c,o),r.return=e,e=r;break e}n(e,c);break}t(e,c),c=c.sibling}o.type===I?((r=Yl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Kl(o.type,o.key,o.props,null,e.mode,l)).ref=No(e,r,o),l.return=e,e=l)}return a(e);case M:e:{for(c=o.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=u(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Xl(o,e.mode,l)).return=e,e=r}return a(e)}if(\"string\"===typeof o||\"number\"===typeof o)return o=\"\"+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=u(r,o)).return=e,e=r):(n(e,r),(r=Jl(o,e.mode,l)).return=e,e=r),a(e);if(Oo(o))return m(e,r,o,l);if(Y(o))return g(e,r,o,l);if(s&&jo(e,o),\"undefined\"===typeof o&&!c)switch(e.tag){case 1:case 0:throw e=e.type,Error(i(152,e.displayName||e.name||\"Component\"))}return n(e,r)}}var Mo=Ro(!0),Io=Ro(!1),Lo={},qo={current:Lo},Uo={current:Lo},zo={current:Lo};function Ho(e){if(e===Lo)throw Error(i(174));return e}function Vo(e,t){hu(zo,t),hu(Uo,e),hu(qo,Lo);var n=t.nodeType;switch(n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qe(null,\"\");break;default:t=qe(t=(n=8===n?t.parentNode:t).namespaceURI||null,n=n.tagName)}pu(qo),hu(qo,t)}function Wo(e){pu(qo),pu(Uo),pu(zo)}function $o(e){Ho(zo.current);var t=Ho(qo.current),n=qe(t,e.type);t!==n&&(hu(Uo,e),hu(qo,n))}function Go(e){Uo.current===e&&(pu(qo),pu(Uo))}var Qo={current:0};function Ko(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||n.data===Xn||n.data===Zn))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Yo(e,t){return{responder:e,props:t}}var Jo=O.ReactCurrentDispatcher,Xo=O.ReactCurrentBatchConfig,Zo=0,ei=null,ti=null,ni=null,ri=null,ui=null,oi=null,ii=0,ai=null,li=0,ci=!1,si=null,fi=0;function di(){throw Error(i(321))}function pi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!eu(e[n],t[n]))return!1;return!0}function hi(e,t,n,r,u,o){if(Zo=o,ei=t,ni=null!==e?e.memoizedState:null,Jo.current=null===ni?Oi:Ni,t=n(r,u),ci){do{ci=!1,fi+=1,ni=null!==e?e.memoizedState:null,oi=ri,ai=ui=ti=null,Jo.current=Ni,t=n(r,u)}while(ci);si=null,fi=0}if(Jo.current=Pi,(e=ei).memoizedState=ri,e.expirationTime=ii,e.updateQueue=ai,e.effectTag|=li,e=null!==ti&&null!==ti.next,Zo=0,oi=ui=ri=ni=ti=ei=null,ii=0,ai=null,li=0,e)throw Error(i(300));return t}function mi(){Jo.current=Pi,Zo=0,oi=ui=ri=ni=ti=ei=null,ii=0,ai=null,li=0,ci=!1,si=null,fi=0}function gi(){var e={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};return null===ui?ri=ui=e:ui=ui.next=e,ui}function vi(){if(null!==oi)oi=(ui=oi).next,ni=null!==(ti=ni)?ti.next:null;else{if(null===ni)throw Error(i(310));var e={memoizedState:(ti=ni).memoizedState,baseState:ti.baseState,queue:ti.queue,baseUpdate:ti.baseUpdate,next:null};ui=null===ui?ri=e:ui.next=e,ni=ti.next}return ui}function Di(e,t){return\"function\"===typeof t?t(e):t}function yi(e){var t=vi(),n=t.queue;if(null===n)throw Error(i(311));if(n.lastRenderedReducer=e,0<fi){var r=n.dispatch;if(null!==si){var u=si.get(n);if(void 0!==u){si.delete(n);var o=t.memoizedState;do{o=e(o,u.action),u=u.next}while(null!==u);return eu(o,t.memoizedState)||(Wi=!0),t.memoizedState=o,t.baseUpdate===n.last&&(t.baseState=o),n.lastRenderedState=o,[o,r]}}return[t.memoizedState,r]}r=n.last;var a=t.baseUpdate;if(o=t.baseState,null!==a?(null!==r&&(r.next=null),r=a.next):r=null!==r?r.next:null,null!==r){var l=u=null,c=r,s=!1;do{var f=c.expirationTime;f<Zo?(s||(s=!0,l=a,u=o),f>ii&&kl(ii=f)):(Bl(f,c.suspenseConfig),o=c.eagerReducer===e?c.eagerState:e(o,c.action)),a=c,c=c.next}while(null!==c&&c!==r);s||(l=a,u=o),eu(o,t.memoizedState)||(Wi=!0),t.memoizedState=o,t.baseUpdate=l,t.baseState=u,n.lastRenderedState=o}return[t.memoizedState,n.dispatch]}function bi(e){var t=gi();return\"function\"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={last:null,dispatch:null,lastRenderedReducer:Di,lastRenderedState:e}).dispatch=_i.bind(null,ei,e),[t.memoizedState,e]}function Ei(e){return yi(Di)}function Ci(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===ai?(ai={lastEffect:null}).lastEffect=e.next=e:null===(t=ai.lastEffect)?ai.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,ai.lastEffect=e),e}function Ai(e,t,n,r){var u=gi();li|=e,u.memoizedState=Ci(t,n,void 0,void 0===r?null:r)}function Fi(e,t,n,r){var u=vi();r=void 0===r?null:r;var o=void 0;if(null!==ti){var i=ti.memoizedState;if(o=i.destroy,null!==r&&pi(r,i.deps))return void Ci(0,n,o,r)}li|=e,u.memoizedState=Ci(t,n,o,r)}function wi(e,t){return Ai(516,192,e,t)}function xi(e,t){return Fi(516,192,e,t)}function Bi(e,t){return\"function\"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function ki(){}function Si(e,t){return gi().memoizedState=[e,void 0===t?null:t],e}function Ti(e,t){var n=vi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&pi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _i(e,t,n){if(!(25>fi))throw Error(i(301));var r=e.alternate;if(e===ei||null!==r&&r===ei)if(ci=!0,e={expirationTime:Zo,suspenseConfig:null,action:n,eagerReducer:null,eagerState:null,next:null},null===si&&(si=new Map),void 0===(n=si.get(t)))si.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}else{var u=hl(),o=wo.suspense;o={expirationTime:u=ml(u,e,o),suspenseConfig:o,action:n,eagerReducer:null,eagerState:null,next:null};var a=t.last;if(null===a)o.next=o;else{var l=a.next;null!==l&&(o.next=l),a.next=o}if(t.last=o,0===e.expirationTime&&(null===r||0===r.expirationTime)&&null!==(r=t.lastRenderedReducer))try{var c=t.lastRenderedState,s=r(c,n);if(o.eagerReducer=r,o.eagerState=s,eu(s,c))return}catch(e){}gl(e,u)}}var Pi={readContext:fo,useCallback:di,useContext:di,useEffect:di,useImperativeHandle:di,useLayoutEffect:di,useMemo:di,useReducer:di,useRef:di,useState:di,useDebugValue:di,useResponder:di,useDeferredValue:di,useTransition:di},Oi={readContext:fo,useCallback:Si,useContext:fo,useEffect:wi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ai(4,36,Bi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4,36,e,t)},useMemo:function(e,t){var n=gi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={last:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=_i.bind(null,ei,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},gi().memoizedState=e},useState:bi,useDebugValue:ki,useResponder:Yo,useDeferredValue:function(e,t){var n=bi(e),r=n[0],u=n[1];return wi((function(){o.unstable_next((function(){var n=Xo.suspense;Xo.suspense=void 0===t?null:t;try{u(e)}finally{Xo.suspense=n}}))}),[e,t]),r},useTransition:function(e){var t=bi(!1),n=t[0],r=t[1];return[Si((function(t){r(!0),o.unstable_next((function(){var n=Xo.suspense;Xo.suspense=void 0===e?null:e;try{r(!1),t()}finally{Xo.suspense=n}}))}),[e,n]),n]}},Ni={readContext:fo,useCallback:Ti,useContext:fo,useEffect:xi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Fi(4,36,Bi.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4,36,e,t)},useMemo:function(e,t){var n=vi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&pi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)},useReducer:yi,useRef:function(){return vi().memoizedState},useState:Ei,useDebugValue:ki,useResponder:Yo,useDeferredValue:function(e,t){var n=Ei(),r=n[0],u=n[1];return xi((function(){o.unstable_next((function(){var n=Xo.suspense;Xo.suspense=void 0===t?null:t;try{u(e)}finally{Xo.suspense=n}}))}),[e,t]),r},useTransition:function(e){var t=Ei(),n=t[0],r=t[1];return[Ti((function(t){r(!0),o.unstable_next((function(){var n=Xo.suspense;Xo.suspense=void 0===e?null:e;try{r(!1),t()}finally{Xo.suspense=n}}))}),[e,n]),n]}},ji=null,Ri=null,Mi=!1;function Ii(e,t){var n=$l(5,null,null,0);n.elementType=\"DELETED\",n.type=\"DELETED\",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=\"\"===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function qi(e){if(Mi){var t=Ri;if(t){var n=t;if(!Li(e,t)){if(!(t=ir(n.nextSibling))||!Li(e,t))return e.effectTag=-1025&e.effectTag|2,Mi=!1,void(ji=e);Ii(ji,n)}ji=e,Ri=ir(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,Mi=!1,ji=e}}function Ui(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ji=e}function zi(e){if(e!==ji)return!1;if(!Mi)return Ui(e),Mi=!0,!1;var t=e.type;if(5!==e.tag||\"head\"!==t&&\"body\"!==t&&!rr(t,e.memoizedProps))for(t=Ri;t;)Ii(e,t),t=ir(t.nextSibling);if(Ui(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if(n===Jn){if(0===t){Ri=ir(e.nextSibling);break e}t--}else n!==Yn&&n!==Zn&&n!==Xn||t++}e=e.nextSibling}Ri=null}}else Ri=ji?ir(e.stateNode.nextSibling):null;return!0}function Hi(){Ri=ji=null,Mi=!1}var Vi=O.ReactCurrentOwner,Wi=!1;function $i(e,t,n,r){t.child=null===e?Io(t,null,n,r):Mo(t,e.child,n,r)}function Gi(e,t,n,r,u){n=n.render;var o=t.ref;return so(t,u),r=hi(e,t,n,r,o,u),null===e||Wi?(t.effectTag|=1,$i(e,t,r,u),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=u&&(e.expirationTime=0),sa(e,t,u))}function Qi(e,t,n,r,u,o){if(null===e){var i=n.type;return\"function\"!==typeof i||Gl(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Kl(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ki(e,t,i,r,u,o))}return i=e.child,u<o&&(u=i.memoizedProps,(n=null!==(n=n.compare)?n:nu)(u,r)&&e.ref===t.ref)?sa(e,t,o):(t.effectTag|=1,(e=Ql(i,r)).ref=t.ref,e.return=t,t.child=e)}function Ki(e,t,n,r,u,o){return null!==e&&nu(e.memoizedProps,r)&&e.ref===t.ref&&(Wi=!1,u<o)?sa(e,t,o):Ji(e,t,n,r,o)}function Yi(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ji(e,t,n,r,u){var o=bu(n)?Du:gu.current;return o=yu(t,o),so(t,u),n=hi(e,t,n,r,o,u),null===e||Wi?(t.effectTag|=1,$i(e,t,n,u),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=u&&(e.expirationTime=0),sa(e,t,u))}function Xi(e,t,n,r,u){if(bu(n)){var o=!0;wu(t)}else o=!1;if(so(t,u),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),To(t,n,r),Po(t,n,r,u),r=!0;else if(null===e){var i=t.stateNode,a=t.memoizedProps;i.props=a;var l=i.context,c=n.contextType;\"object\"===typeof c&&null!==c?c=fo(c):c=yu(t,c=bu(n)?Du:gu.current);var s=n.getDerivedStateFromProps,f=\"function\"===typeof s||\"function\"===typeof i.getSnapshotBeforeUpdate;f||\"function\"!==typeof i.UNSAFE_componentWillReceiveProps&&\"function\"!==typeof i.componentWillReceiveProps||(a!==r||l!==c)&&_o(t,i,r,c),po=!1;var d=t.memoizedState;l=i.state=d;var p=t.updateQueue;null!==p&&(Co(t,p,r,i,u),l=t.memoizedState),a!==r||d!==l||vu.current||po?(\"function\"===typeof s&&(Bo(t,n,s,r),l=t.memoizedState),(a=po||So(t,n,a,r,d,l,c))?(f||\"function\"!==typeof i.UNSAFE_componentWillMount&&\"function\"!==typeof i.componentWillMount||(\"function\"===typeof i.componentWillMount&&i.componentWillMount(),\"function\"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),\"function\"===typeof i.componentDidMount&&(t.effectTag|=4)):(\"function\"===typeof i.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=c,r=a):(\"function\"===typeof i.componentDidMount&&(t.effectTag|=4),r=!1)}else i=t.stateNode,a=t.memoizedProps,i.props=t.type===t.elementType?a:to(t.type,a),l=i.context,\"object\"===typeof(c=n.contextType)&&null!==c?c=fo(c):c=yu(t,c=bu(n)?Du:gu.current),(f=\"function\"===typeof(s=n.getDerivedStateFromProps)||\"function\"===typeof i.getSnapshotBeforeUpdate)||\"function\"!==typeof i.UNSAFE_componentWillReceiveProps&&\"function\"!==typeof i.componentWillReceiveProps||(a!==r||l!==c)&&_o(t,i,r,c),po=!1,l=t.memoizedState,d=i.state=l,null!==(p=t.updateQueue)&&(Co(t,p,r,i,u),d=t.memoizedState),a!==r||l!==d||vu.current||po?(\"function\"===typeof s&&(Bo(t,n,s,r),d=t.memoizedState),(s=po||So(t,n,a,r,l,d,c))?(f||\"function\"!==typeof i.UNSAFE_componentWillUpdate&&\"function\"!==typeof i.componentWillUpdate||(\"function\"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,d,c),\"function\"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,d,c)),\"function\"===typeof i.componentDidUpdate&&(t.effectTag|=4),\"function\"===typeof i.getSnapshotBeforeUpdate&&(t.effectTag|=256)):(\"function\"!==typeof i.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),\"function\"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=d),i.props=r,i.state=d,i.context=c,r=s):(\"function\"!==typeof i.componentDidUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),\"function\"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),r=!1);return Zi(e,t,n,r,o,u)}function Zi(e,t,n,r,u,o){Yi(e,t);var i=0!==(64&t.effectTag);if(!r&&!i)return u&&xu(t,n,!1),sa(e,t,o);r=t.stateNode,Vi.current=t;var a=i&&\"function\"!==typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&i?(t.child=Mo(t,e.child,null,o),t.child=Mo(t,null,a,o)):$i(e,t,a,o),t.memoizedState=r.state,u&&xu(t,n,!0),t.child}function ea(e){var t=e.stateNode;t.pendingContext?Au(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Au(0,t.context,!1),Vo(e,t.containerInfo)}var ta,na,ra,ua,oa={dehydrated:null,retryTime:0};function ia(e,t,n){var r,u=t.mode,o=t.pendingProps,i=Qo.current,a=!1;if((r=0!==(64&t.effectTag))||(r=0!==(2&i)&&(null===e||null!==e.memoizedState)),r?(a=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(i|=1),hu(Qo,1&i),null===e){if(void 0!==o.fallback&&qi(t),a){if(a=o.fallback,(o=Yl(null,u,0,null)).return=t,0===(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Yl(a,u,n,null)).return=t,o.sibling=n,t.memoizedState=oa,t.child=o,n}return u=o.children,t.memoizedState=null,t.child=Io(t,null,u,n)}if(null!==e.memoizedState){if(u=(e=e.child).sibling,a){if(o=o.fallback,(n=Ql(e,e.pendingProps)).return=t,0===(2&t.mode)&&(a=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=a;null!==a;)a.return=n,a=a.sibling;return(u=Ql(u,o,u.expirationTime)).return=t,n.sibling=u,n.childExpirationTime=0,t.memoizedState=oa,t.child=n,u}return n=Mo(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=o.fallback,(o=Yl(null,u,0,null)).return=t,o.child=e,null!==e&&(e.return=o),0===(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Yl(a,u,n,null)).return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=oa,t.child=o,n}return t.memoizedState=null,t.child=Mo(t,e,o.children,n)}function aa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),co(e.return,t)}function la(e,t,n,r,u,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,last:r,tail:n,tailExpiration:0,tailMode:u,lastEffect:o}:(i.isBackwards=t,i.rendering=null,i.last=r,i.tail=n,i.tailExpiration=0,i.tailMode=u,i.lastEffect=o)}function ca(e,t,n){var r=t.pendingProps,u=r.revealOrder,o=r.tail;if($i(e,t,r.children,n),0!==(2&(r=Qo.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!==(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aa(e,n);else if(19===e.tag)aa(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(hu(Qo,r),0===(2&t.mode))t.memoizedState=null;else switch(u){case\"forwards\":for(n=t.child,u=null;null!==n;)null!==(e=n.alternate)&&null===Ko(e)&&(u=n),n=n.sibling;null===(n=u)?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),la(t,!1,u,n,o,t.lastEffect);break;case\"backwards\":for(n=null,u=t.child,t.child=null;null!==u;){if(null!==(e=u.alternate)&&null===Ko(e)){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}la(t,!0,n,null,o,t.lastEffect);break;case\"together\":la(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function sa(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&kl(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ql(e=t.child,e.pendingProps,e.expirationTime),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ql(e,e.pendingProps,e.expirationTime)).return=t;n.sibling=null}return t.child}function fa(e){e.effectTag|=4}function da(e,t){switch(e.tailMode){case\"hidden\":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case\"collapsed\":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pa(e){switch(e.tag){case 1:bu(e.type)&&Eu();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(Wo(),Cu(),0!==(64&(t=e.effectTag)))throw Error(i(285));return e.effectTag=-4097&t|64,e;case 5:return Go(e),null;case 13:return pu(Qo),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return pu(Qo),null;case 4:return Wo(),null;case 10:return lo(e),null;default:return null}}function ha(e,t){return{value:e,source:t,stack:X(t)}}ta=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},na=function(){},ra=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var a,l,c=t.stateNode;switch(Ho(qo.current),e=null,n){case\"input\":i=xe(c,i),r=xe(c,r),e=[];break;case\"option\":i=Pe(c,i),r=Pe(c,r),e=[];break;case\"select\":i=u({},i,{value:void 0}),r=u({},r,{value:void 0}),e=[];break;case\"textarea\":i=Ne(c,i),r=Ne(c,r),e=[];break;default:\"function\"!==typeof i.onClick&&\"function\"===typeof r.onClick&&(c.onclick=Vn)}for(a in Un(n,r),n=null,i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&null!=i[a])if(\"style\"===a)for(l in c=i[a])c.hasOwnProperty(l)&&(n||(n={}),n[l]=\"\");else\"dangerouslySetInnerHTML\"!==a&&\"children\"!==a&&\"suppressContentEditableWarning\"!==a&&\"suppressHydrationWarning\"!==a&&\"autoFocus\"!==a&&(p.hasOwnProperty(a)?e||(e=[]):(e=e||[]).push(a,null));for(a in r){var s=r[a];if(c=null!=i?i[a]:void 0,r.hasOwnProperty(a)&&s!==c&&(null!=s||null!=c))if(\"style\"===a)if(c){for(l in c)!c.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]=\"\");for(l in s)s.hasOwnProperty(l)&&c[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(e||(e=[]),e.push(a,n)),n=s;else\"dangerouslySetInnerHTML\"===a?(s=s?s.__html:void 0,c=c?c.__html:void 0,null!=s&&c!==s&&(e=e||[]).push(a,\"\"+s)):\"children\"===a?c===s||\"string\"!==typeof s&&\"number\"!==typeof s||(e=e||[]).push(a,\"\"+s):\"suppressContentEditableWarning\"!==a&&\"suppressHydrationWarning\"!==a&&(p.hasOwnProperty(a)?(null!=s&&Hn(o,a),e||c===s||(e=[])):(e=e||[]).push(a,s))}n&&(e=e||[]).push(\"style\",n),o=e,(t.updateQueue=o)&&fa(t)}},ua=function(e,t,n,r){n!==r&&fa(t)};var ma=\"function\"===typeof WeakSet?WeakSet:Set;function ga(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=X(n)),null!==n&&J(n.type),t=t.value,null!==e&&1===e.tag&&J(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function va(e){var t=e.ref;if(null!==t)if(\"function\"===typeof t)try{t(null)}catch(t){ql(e,t)}else t.current=null}function Da(e,t){switch(t.tag){case 0:case 11:case 15:ya(2,0,t);break;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:to(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}function ya(e,t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var r=n=n.next;do{if(0!==(r.tag&e)){var u=r.destroy;r.destroy=void 0,void 0!==u&&u()}0!==(r.tag&t)&&(u=r.create,r.destroy=u()),r=r.next}while(r!==n)}}function ba(e,t,n){switch(\"function\"===typeof Vl&&Vl(t),t.tag){case 0:case 11:case 14:case 15:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Qu(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var u=t;try{n()}catch(e){ql(u,e)}}e=e.next}while(e!==r)}))}break;case 1:va(t),\"function\"===typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){ql(e,t)}}(t,n);break;case 5:va(t);break;case 4:Fa(e,t,n)}}function Ea(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,null!==t&&Ea(t)}function Ca(e){return 5===e.tag||3===e.tag||4===e.tag}function Aa(e){e:{for(var t=e.return;null!==t;){if(Ca(t)){var n=t;break e}t=t.return}throw Error(i(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(i(161))}16&n.effectTag&&(He(t,\"\"),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Ca(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}for(var u=e;;){var o=5===u.tag||6===u.tag;if(o){var a=o?u.stateNode:u.stateNode.instance;if(n)if(r){var l=a;a=n,8===(o=t).nodeType?o.parentNode.insertBefore(l,a):o.insertBefore(l,a)}else t.insertBefore(a,n);else r?(8===(l=t).nodeType?(o=l.parentNode).insertBefore(a,l):(o=l).appendChild(a),null!==(l=l._reactRootContainer)&&void 0!==l||null!==o.onclick||(o.onclick=Vn)):t.appendChild(a)}else if(4!==u.tag&&null!==u.child){u.child.return=u,u=u.child;continue}if(u===e)break;for(;null===u.sibling;){if(null===u.return||u.return===e)return;u=u.return}u.sibling.return=u.return,u=u.sibling}}function Fa(e,t,n){for(var r,u,o=t,a=!1;;){if(!a){a=o.return;e:for(;;){if(null===a)throw Error(i(160));switch(r=a.stateNode,a.tag){case 5:u=!1;break e;case 3:case 4:r=r.containerInfo,u=!0;break e}a=a.return}a=!0}if(5===o.tag||6===o.tag){e:for(var l=e,c=o,s=n,f=c;;)if(ba(l,f,s),null!==f.child&&4!==f.tag)f.child.return=f,f=f.child;else{if(f===c)break;for(;null===f.sibling;){if(null===f.return||f.return===c)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}u?(l=r,c=o.stateNode,8===l.nodeType?l.parentNode.removeChild(c):l.removeChild(c)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,u=!0,o.child.return=o,o=o.child;continue}}else if(ba(e,o,n),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(a=!1)}o.sibling.return=o.return,o=o.sibling}}function wa(e,t){switch(t.tag){case 0:case 11:case 14:case 15:ya(4,8,t);break;case 1:break;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,u=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[sr]=r,\"input\"===e&&\"radio\"===r.type&&null!=r.name&&ke(n,r),zn(e,u),t=zn(e,r),u=0;u<o.length;u+=2){var a=o[u],l=o[u+1];\"style\"===a?Ln(n,l):\"dangerouslySetInnerHTML\"===a?ze(n,l):\"children\"===a?He(n,l):Ce(n,a,l,t)}switch(e){case\"input\":Se(n,r);break;case\"textarea\":Re(n,r);break;case\"select\":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?Oe(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?Oe(n,!!r.multiple,r.defaultValue,!0):Oe(n,!!r.multiple,r.multiple?[]:\"\",!1))}}}break;case 6:if(null===t.stateNode)throw Error(i(162));t.stateNode.nodeValue=t.memoizedProps;break;case 3:(t=t.stateNode).hydrate&&(t.hydrate=!1,wt(t.containerInfo));break;case 12:break;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,tl=Wu()),null!==n)e:for(e=n;;){if(5===e.tag)o=e.stateNode,r?\"function\"===typeof(o=o.style).setProperty?o.setProperty(\"display\",\"none\",\"important\"):o.display=\"none\":(o=e.stateNode,u=void 0!==(u=e.memoizedProps.style)&&null!==u&&u.hasOwnProperty(\"display\")?u.display:null,o.style.display=In(\"display\",u));else if(6===e.tag)e.stateNode.nodeValue=r?\"\":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break e;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}xa(t);break;case 19:xa(t);break;case 17:case 20:case 21:break;default:throw Error(i(163))}}function xa(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ma),t.forEach((function(t){var r=zl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var Ba=\"function\"===typeof WeakMap?WeakMap:Map;function ka(e,t,n){(n=go(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ul||(ul=!0,ol=r),ga(e,t)},n}function Sa(e,t,n){(n=go(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if(\"function\"===typeof r){var u=t.value;n.payload=function(){return ga(e,t),r(u)}}var o=e.stateNode;return null!==o&&\"function\"===typeof o.componentDidCatch&&(n.callback=function(){\"function\"!==typeof r&&(null===il?il=new Set([this]):il.add(this),ga(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:\"\"})}),n}var Ta,_a=Math.ceil,Pa=O.ReactCurrentDispatcher,Oa=O.ReactCurrentOwner,Na=0,ja=8,Ra=16,Ma=32,Ia=0,La=1,qa=2,Ua=3,za=4,Ha=5,Va=Na,Wa=null,$a=null,Ga=0,Qa=Ia,Ka=null,Ya=1073741823,Ja=1073741823,Xa=null,Za=0,el=!1,tl=0,nl=500,rl=null,ul=!1,ol=null,il=null,al=!1,ll=null,cl=90,sl=null,fl=0,dl=null,pl=0;function hl(){return(Va&(Ra|Ma))!==Na?1073741821-(Wu()/10|0):0!==pl?pl:pl=1073741821-(Wu()/10|0)}function ml(e,t,n){if(0===(2&(t=t.mode)))return 1073741823;var r=$u();if(0===(4&t))return 99===r?1073741823:1073741822;if((Va&Ra)!==Na)return Ga;if(null!==n)e=eo(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=eo(e,150,100);break;case 97:case 96:e=eo(e,5e3,250);break;case 95:e=2;break;default:throw Error(i(326))}return null!==Wa&&e===Ga&&--e,e}function gl(e,t){if(50<fl)throw fl=0,dl=null,Error(i(185));if(null!==(e=vl(e,t))){var n=$u();1073741823===t?(Va&ja)!==Na&&(Va&(Ra|Ma))===Na?El(e):(yl(e),Va===Na&&Ju()):yl(e),(4&Va)===Na||98!==n&&99!==n||(null===sl?sl=new Map([[e,t]]):(void 0===(n=sl.get(e))||n>t)&&sl.set(e,t))}}function vl(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,u=null;if(null===r&&3===e.tag)u=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){u=r.stateNode;break}r=r.return}return null!==u&&(Wa===u&&(kl(t),Qa===za&&tc(u,Ga)),nc(u,t)),u}function Dl(e){var t=e.lastExpiredTime;return 0!==t?t:ec(e,t=e.firstPendingTime)?(t=e.lastPingedTime)>(e=e.nextKnownPendingLevel)?t:e:t}function yl(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Yu(El.bind(null,e));else{var t=Dl(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=hl();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var u=e.callbackPriority;if(e.callbackExpirationTime===t&&u>=r)return;n!==Lu&&Su(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Yu(El.bind(null,e)):Ku(r,bl.bind(null,e),{timeout:10*(1073741821-t)-Wu()}),e.callbackNode=t}}}function bl(e,t){if(pl=0,t)return rc(e,t=hl()),yl(e),null;var n=Dl(e);if(0!==n){if(t=e.callbackNode,(Va&(Ra|Ma))!==Na)throw Error(i(327));if(Ml(),e===Wa&&n===Ga||Fl(e,n),null!==$a){var r=Va;Va|=Ra;for(var u=xl();;)try{Tl();break}catch(t){wl(e,t)}if(io(),Va=r,Pa.current=u,Qa===La)throw t=Ka,Fl(e,n),tc(e,n),yl(e),t;if(null===$a)switch(u=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Qa,Wa=null,r){case Ia:case La:throw Error(i(345));case qa:rc(e,2<n?2:n);break;case Ua:if(tc(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=Ol(u)),1073741823===Ya&&10<(u=tl+nl-Wu())){if(el){var o=e.lastPingedTime;if(0===o||o>=n){e.lastPingedTime=n,Fl(e,n);break}}if(0!==(o=Dl(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=ur(Nl.bind(null,e),u);break}Nl(e);break;case za:if(tc(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=Ol(u)),el&&(0===(u=e.lastPingedTime)||u>=n)){e.lastPingedTime=n,Fl(e,n);break}if(0!==(u=Dl(e))&&u!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Ja?r=10*(1073741821-Ja)-Wu():1073741823===Ya?r=0:(r=10*(1073741821-Ya)-5e3,0>(r=(u=Wu())-r)&&(r=0),(n=10*(1073741821-n)-u)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_a(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=ur(Nl.bind(null,e),r);break}Nl(e);break;case Ha:if(1073741823!==Ya&&null!==Xa){o=Ya;var a=Xa;if(0>=(r=0|a.busyMinDurationMs)?r=0:(u=0|a.busyDelayMs,r=(o=Wu()-(10*(1073741821-o)-(0|a.timeoutMs||5e3)))<=u?0:u+r-o),10<r){tc(e,n),e.timeoutHandle=ur(Nl.bind(null,e),r);break}}Nl(e);break;default:throw Error(i(329))}if(yl(e),e.callbackNode===t)return bl.bind(null,e)}}return null}function El(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,e.finishedExpirationTime===t)Nl(e);else{if((Va&(Ra|Ma))!==Na)throw Error(i(327));if(Ml(),e===Wa&&t===Ga||Fl(e,t),null!==$a){var n=Va;Va|=Ra;for(var r=xl();;)try{Sl();break}catch(t){wl(e,t)}if(io(),Va=n,Pa.current=r,Qa===La)throw n=Ka,Fl(e,t),tc(e,t),yl(e),n;if(null!==$a)throw Error(i(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Wa=null,Nl(e),yl(e)}}return null}function Cl(e,t){var n=Va;Va|=1;try{return e(t)}finally{(Va=n)===Na&&Ju()}}function Al(e,t){var n=Va;Va&=-2,Va|=ja;try{return e(t)}finally{(Va=n)===Na&&Ju()}}function Fl(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,or(n)),null!==$a)for(n=$a.return;null!==n;){var r=n;switch(r.tag){case 1:var u=r.type.childContextTypes;null!==u&&void 0!==u&&Eu();break;case 3:Wo(),Cu();break;case 5:Go(r);break;case 4:Wo();break;case 13:case 19:pu(Qo);break;case 10:lo(r)}n=n.return}Wa=e,$a=Ql(e.current,null),Ga=t,Qa=Ia,Ka=null,Ja=Ya=1073741823,Xa=null,Za=0,el=!1}function wl(e,t){for(;;){try{if(io(),mi(),null===$a||null===$a.return)return Qa=La,Ka=t,null;e:{var n=e,r=$a.return,u=$a,o=t;if(t=Ga,u.effectTag|=2048,u.firstEffect=u.lastEffect=null,null!==o&&\"object\"===typeof o&&\"function\"===typeof o.then){var i=o,a=0!==(1&Qo.current),l=r;do{var c;if(c=13===l.tag){var s=l.memoizedState;if(null!==s)c=null!==s.dehydrated;else{var f=l.memoizedProps;c=void 0!==f.fallback&&(!0!==f.unstable_avoidThisFallback||!a)}}if(c){var d=l.updateQueue;if(null===d){var p=new Set;p.add(i),l.updateQueue=p}else d.add(i);if(0===(2&l.mode)){if(l.effectTag|=64,u.effectTag&=-2981,1===u.tag)if(null===u.alternate)u.tag=17;else{var h=go(1073741823,null);h.tag=2,Do(u,h)}u.expirationTime=1073741823;break e}o=void 0,u=t;var m=n.pingCache;if(null===m?(m=n.pingCache=new Ba,o=new Set,m.set(i,o)):void 0===(o=m.get(i))&&(o=new Set,m.set(i,o)),!o.has(u)){o.add(u);var g=Ul.bind(null,n,i,u);i.then(g,g)}l.effectTag|=4096,l.expirationTime=t;break e}l=l.return}while(null!==l);o=Error((J(u.type)||\"A React component\")+\" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.\"+X(u))}Qa!==Ha&&(Qa=qa),o=ha(o,u),l=r;do{switch(l.tag){case 3:i=o,l.effectTag|=4096,l.expirationTime=t,yo(l,ka(l,i,t));break e;case 1:i=o;var v=l.type,D=l.stateNode;if(0===(64&l.effectTag)&&(\"function\"===typeof v.getDerivedStateFromError||null!==D&&\"function\"===typeof D.componentDidCatch&&(null===il||!il.has(D)))){l.effectTag|=4096,l.expirationTime=t,yo(l,Sa(l,i,t));break e}}l=l.return}while(null!==l)}$a=Pl($a)}catch(e){t=e;continue}break}}function xl(){var e=Pa.current;return Pa.current=Pi,null===e?Pi:e}function Bl(e,t){e<Ya&&2<e&&(Ya=e),null!==t&&e<Ja&&2<e&&(Ja=e,Xa=t)}function kl(e){e>Za&&(Za=e)}function Sl(){for(;null!==$a;)$a=_l($a)}function Tl(){for(;null!==$a&&!Tu();)$a=_l($a)}function _l(e){var t=Ta(e.alternate,e,Ga);return e.memoizedProps=e.pendingProps,null===t&&(t=Pl(e)),Oa.current=null,t}function Pl(e){$a=e;do{var t=$a.alternate;if(e=$a.return,0===(2048&$a.effectTag)){e:{var n=t,r=Ga,o=(t=$a).pendingProps;switch(t.tag){case 2:case 16:break;case 15:case 0:break;case 1:bu(t.type)&&Eu();break;case 3:Wo(),Cu(),(o=t.stateNode).pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(null===n||null===n.child)&&zi(t)&&fa(t),na(t);break;case 5:Go(t),r=Ho(zo.current);var a=t.type;if(null!==n&&null!=t.stateNode)ra(n,t,a,o,r),n.ref!==t.ref&&(t.effectTag|=128);else if(o){var l=Ho(qo.current);if(zi(t)){var c=(o=t).stateNode;n=o.type;var s=o.memoizedProps,f=r;switch(c[cr]=o,c[sr]=s,a=void 0,r=c,n){case\"iframe\":case\"object\":case\"embed\":wn(\"load\",r);break;case\"video\":case\"audio\":for(c=0;c<Ze.length;c++)wn(Ze[c],r);break;case\"source\":wn(\"error\",r);break;case\"img\":case\"image\":case\"link\":wn(\"error\",r),wn(\"load\",r);break;case\"form\":wn(\"reset\",r),wn(\"submit\",r);break;case\"details\":wn(\"toggle\",r);break;case\"input\":Be(r,s),wn(\"invalid\",r),Hn(f,\"onChange\");break;case\"select\":r._wrapperState={wasMultiple:!!s.multiple},wn(\"invalid\",r),Hn(f,\"onChange\");break;case\"textarea\":je(r,s),wn(\"invalid\",r),Hn(f,\"onChange\")}for(a in Un(n,s),c=null,s)s.hasOwnProperty(a)&&(l=s[a],\"children\"===a?\"string\"===typeof l?r.textContent!==l&&(c=[\"children\",l]):\"number\"===typeof l&&r.textContent!==\"\"+l&&(c=[\"children\",\"\"+l]):p.hasOwnProperty(a)&&null!=l&&Hn(f,a));switch(n){case\"input\":Fe(r),Te(r,s,!0);break;case\"textarea\":Fe(r),Me(r);break;case\"select\":case\"option\":break;default:\"function\"===typeof s.onClick&&(r.onclick=Vn)}a=c,o.updateQueue=a,(o=null!==a)&&fa(t)}else{n=t,f=a,s=o,c=9===r.nodeType?r:r.ownerDocument,l===Ie.html&&(l=Le(f)),l===Ie.html?\"script\"===f?((s=c.createElement(\"div\")).innerHTML=\"<script><\\/script>\",c=s.removeChild(s.firstChild)):\"string\"===typeof s.is?c=c.createElement(f,{is:s.is}):(c=c.createElement(f),\"select\"===f&&(f=c,s.multiple?f.multiple=!0:s.size&&(f.size=s.size))):c=c.createElementNS(l,f),(s=c)[cr]=n,s[sr]=o,ta(s,t,!1,!1),t.stateNode=s;var d=r,h=zn(f=a,n=o);switch(f){case\"iframe\":case\"object\":case\"embed\":wn(\"load\",s),r=n;break;case\"video\":case\"audio\":for(r=0;r<Ze.length;r++)wn(Ze[r],s);r=n;break;case\"source\":wn(\"error\",s),r=n;break;case\"img\":case\"image\":case\"link\":wn(\"error\",s),wn(\"load\",s),r=n;break;case\"form\":wn(\"reset\",s),wn(\"submit\",s),r=n;break;case\"details\":wn(\"toggle\",s),r=n;break;case\"input\":Be(s,n),r=xe(s,n),wn(\"invalid\",s),Hn(d,\"onChange\");break;case\"option\":r=Pe(s,n);break;case\"select\":s._wrapperState={wasMultiple:!!n.multiple},r=u({},n,{value:void 0}),wn(\"invalid\",s),Hn(d,\"onChange\");break;case\"textarea\":je(s,n),r=Ne(s,n),wn(\"invalid\",s),Hn(d,\"onChange\");break;default:r=n}Un(f,r),c=void 0,l=f;var m=s,g=r;for(c in g)if(g.hasOwnProperty(c)){var v=g[c];\"style\"===c?Ln(m,v):\"dangerouslySetInnerHTML\"===c?null!=(v=v?v.__html:void 0)&&ze(m,v):\"children\"===c?\"string\"===typeof v?(\"textarea\"!==l||\"\"!==v)&&He(m,v):\"number\"===typeof v&&He(m,\"\"+v):\"suppressContentEditableWarning\"!==c&&\"suppressHydrationWarning\"!==c&&\"autoFocus\"!==c&&(p.hasOwnProperty(c)?null!=v&&Hn(d,c):null!=v&&Ce(m,c,v,h))}switch(f){case\"input\":Fe(s),Te(s,n,!1);break;case\"textarea\":Fe(s),Me(s);break;case\"option\":null!=n.value&&s.setAttribute(\"value\",\"\"+Ee(n.value));break;case\"select\":(r=s).multiple=!!n.multiple,null!=(s=n.value)?Oe(r,!!n.multiple,s,!1):null!=n.defaultValue&&Oe(r,!!n.multiple,n.defaultValue,!0);break;default:\"function\"===typeof r.onClick&&(s.onclick=Vn)}(o=nr(a,o))&&fa(t)}null!==t.ref&&(t.effectTag|=128)}else if(null===t.stateNode)throw Error(i(166));break;case 6:if(n&&null!=t.stateNode)ua(n,t,n.memoizedProps,o);else{if(\"string\"!==typeof o&&null===t.stateNode)throw Error(i(166));r=Ho(zo.current),Ho(qo.current),zi(t)?(a=(o=t).stateNode,r=o.memoizedProps,a[cr]=o,(o=a.nodeValue!==r)&&fa(t)):(a=t,(o=(9===r.nodeType?r:r.ownerDocument).createTextNode(o))[cr]=a,t.stateNode=o)}break;case 11:break;case 13:if(pu(Qo),o=t.memoizedState,0!==(64&t.effectTag)){t.expirationTime=r;break e}o=null!==o,a=!1,null===n?void 0!==t.memoizedProps.fallback&&zi(t):(a=null!==(r=n.memoizedState),o||null===r||null!==(r=n.child.sibling)&&(null!==(s=t.firstEffect)?(t.firstEffect=r,r.nextEffect=s):(t.firstEffect=t.lastEffect=r,r.nextEffect=null),r.effectTag=8)),o&&!a&&0!==(2&t.mode)&&(null===n&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&Qo.current)?Qa===Ia&&(Qa=Ua):(Qa!==Ia&&Qa!==Ua||(Qa=za),0!==Za&&null!==Wa&&(tc(Wa,Ga),nc(Wa,Za)))),(o||a)&&(t.effectTag|=4);break;case 7:case 8:case 12:break;case 4:Wo(),na(t);break;case 10:lo(t);break;case 9:case 14:break;case 17:bu(t.type)&&Eu();break;case 19:if(pu(Qo),null===(o=t.memoizedState))break;if(a=0!==(64&t.effectTag),null===(s=o.rendering)){if(a)da(o,!1);else if(Qa!==Ia||null!==n&&0!==(64&n.effectTag))for(n=t.child;null!==n;){if(null!==(s=Ko(n))){for(t.effectTag|=64,da(o,!1),null!==(a=s.updateQueue)&&(t.updateQueue=a,t.effectTag|=4),null===o.lastEffect&&(t.firstEffect=null),t.lastEffect=o.lastEffect,o=r,a=t.child;null!==a;)n=o,(r=a).effectTag&=2,r.nextEffect=null,r.firstEffect=null,r.lastEffect=null,null===(s=r.alternate)?(r.childExpirationTime=0,r.expirationTime=n,r.child=null,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null):(r.childExpirationTime=s.childExpirationTime,r.expirationTime=s.expirationTime,r.child=s.child,r.memoizedProps=s.memoizedProps,r.memoizedState=s.memoizedState,r.updateQueue=s.updateQueue,n=s.dependencies,r.dependencies=null===n?null:{expirationTime:n.expirationTime,firstContext:n.firstContext,responders:n.responders}),a=a.sibling;hu(Qo,1&Qo.current|2),t=t.child;break e}n=n.sibling}}else{if(!a)if(null!==(n=Ko(s))){if(t.effectTag|=64,a=!0,null!==(r=n.updateQueue)&&(t.updateQueue=r,t.effectTag|=4),da(o,!0),null===o.tail&&\"hidden\"===o.tailMode){null!==(t=t.lastEffect=o.lastEffect)&&(t.nextEffect=null);break}}else Wu()>o.tailExpiration&&1<r&&(t.effectTag|=64,a=!0,da(o,!1),t.expirationTime=t.childExpirationTime=r-1);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(r=o.last)?r.sibling=s:t.child=s,o.last=s)}if(null!==o.tail){0===o.tailExpiration&&(o.tailExpiration=Wu()+500),r=o.tail,o.rendering=r,o.tail=r.sibling,o.lastEffect=t.lastEffect,r.sibling=null,o=Qo.current,hu(Qo,o=a?1&o|2:1&o),t=r;break e}break;case 20:case 21:break;default:throw Error(i(156,t.tag))}t=null}if(o=$a,1===Ga||1!==o.childExpirationTime){for(a=0,r=o.child;null!==r;)(n=r.expirationTime)>a&&(a=n),(s=r.childExpirationTime)>a&&(a=s),r=r.sibling;o.childExpirationTime=a}if(null!==t)return t;null!==e&&0===(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=$a.firstEffect),null!==$a.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=$a.firstEffect),e.lastEffect=$a.lastEffect),1<$a.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=$a:e.firstEffect=$a,e.lastEffect=$a))}else{if(null!==(t=pa($a)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=$a.sibling))return t;$a=e}while(null!==$a);return Qa===Ia&&(Qa=Ha),null}function Ol(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function Nl(e){var t=$u();return Qu(99,jl.bind(null,e,t)),null}function jl(e,t){if(Ml(),(Va&(Ra|Ma))!==Na)throw Error(i(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var u=Ol(n);if(e.firstPendingTime=u,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Wa&&($a=Wa=null,Ga=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,u=n.firstEffect):u=n:u=n.firstEffect,null!==u){var o=Va;Va|=Ma,Oa.current=null,er=Fn;var a=Qn();if(Kn(a)){if(\"selectionStart\"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{var c=(l=(l=a.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(c&&0!==c.rangeCount){l=c.anchorNode;var s=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{l.nodeType,f.nodeType}catch(e){l=null;break e}var d=0,p=-1,h=-1,m=0,g=0,v=a,D=null;t:for(;;){for(var y;v!==l||0!==s&&3!==v.nodeType||(p=d+s),v!==f||0!==c&&3!==v.nodeType||(h=d+c),3===v.nodeType&&(d+=v.nodeValue.length),null!==(y=v.firstChild);)D=v,v=y;for(;;){if(v===a)break t;if(D===l&&++m===s&&(p=d),D===f&&++g===c&&(h=d),null!==(y=v.nextSibling))break;D=(v=D).parentNode}v=y}l=-1===p||-1===h?null:{start:p,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;tr={focusedElem:a,selectionRange:l},Fn=!1,rl=u;do{try{Rl()}catch(e){if(null===rl)throw Error(i(330));ql(rl,e),rl=rl.nextEffect}}while(null!==rl);rl=u;do{try{for(a=e,l=t;null!==rl;){var b=rl.effectTag;if(16&b&&He(rl.stateNode,\"\"),128&b){var E=rl.alternate;if(null!==E){var C=E.ref;null!==C&&(\"function\"===typeof C?C(null):C.current=null)}}switch(1038&b){case 2:Aa(rl),rl.effectTag&=-3;break;case 6:Aa(rl),rl.effectTag&=-3,wa(rl.alternate,rl);break;case 1024:rl.effectTag&=-1025;break;case 1028:rl.effectTag&=-1025,wa(rl.alternate,rl);break;case 4:wa(rl.alternate,rl);break;case 8:Fa(a,s=rl,l),Ea(s)}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(i(330));ql(rl,e),rl=rl.nextEffect}}while(null!==rl);if(C=tr,E=Qn(),b=C.focusedElem,l=C.selectionRange,E!==b&&b&&b.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):\"contains\"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(b.ownerDocument.documentElement,b)){null!==l&&Kn(b)&&(E=l.start,void 0===(C=l.end)&&(C=E),\"selectionStart\"in b?(b.selectionStart=E,b.selectionEnd=Math.min(C,b.value.length)):(C=(E=b.ownerDocument||document)&&E.defaultView||window).getSelection&&(C=C.getSelection(),s=b.textContent.length,a=Math.min(l.start,s),l=void 0===l.end?a:Math.min(l.end,s),!C.extend&&a>l&&(s=l,l=a,a=s),s=Gn(b,a),f=Gn(b,l),s&&f&&(1!==C.rangeCount||C.anchorNode!==s.node||C.anchorOffset!==s.offset||C.focusNode!==f.node||C.focusOffset!==f.offset)&&((E=E.createRange()).setStart(s.node,s.offset),C.removeAllRanges(),a>l?(C.addRange(E),C.extend(f.node,f.offset)):(E.setEnd(f.node,f.offset),C.addRange(E))))),E=[];for(C=b;C=C.parentNode;)1===C.nodeType&&E.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(\"function\"===typeof b.focus&&b.focus(),b=0;b<E.length;b++)(C=E[b]).element.scrollLeft=C.left,C.element.scrollTop=C.top}tr=null,Fn=!!er,er=null,e.current=n,rl=u;do{try{for(b=r;null!==rl;){var A=rl.effectTag;if(36&A){var F=rl.alternate;switch(C=b,(E=rl).tag){case 0:case 11:case 15:ya(16,32,E);break;case 1:var w=E.stateNode;if(4&E.effectTag)if(null===F)w.componentDidMount();else{var x=E.elementType===E.type?F.memoizedProps:to(E.type,F.memoizedProps);w.componentDidUpdate(x,F.memoizedState,w.__reactInternalSnapshotBeforeUpdate)}var B=E.updateQueue;null!==B&&Ao(0,B,w);break;case 3:var k=E.updateQueue;if(null!==k){if(a=null,null!==E.child)switch(E.child.tag){case 5:a=E.child.stateNode;break;case 1:a=E.child.stateNode}Ao(0,k,a)}break;case 5:var S=E.stateNode;null===F&&4&E.effectTag&&nr(E.type,E.memoizedProps)&&S.focus();break;case 6:case 4:case 12:break;case 13:if(null===E.memoizedState){var T=E.alternate;if(null!==T){var _=T.memoizedState;if(null!==_){var P=_.dehydrated;null!==P&&wt(P)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(i(163))}}if(128&A){E=void 0;var O=rl.ref;if(null!==O){var N=rl.stateNode;switch(rl.tag){case 5:E=N;break;default:E=N}\"function\"===typeof O?O(E):O.current=E}}rl=rl.nextEffect}}catch(e){if(null===rl)throw Error(i(330));ql(rl,e),rl=rl.nextEffect}}while(null!==rl);rl=null,qu(),Va=o}else e.current=n;if(al)al=!1,ll=e,cl=t;else for(rl=u;null!==rl;)t=rl.nextEffect,rl.nextEffect=null,rl=t;if(0===(t=e.firstPendingTime)&&(il=null),1073741823===t?e===dl?fl++:(fl=0,dl=e):fl=0,\"function\"===typeof Hl&&Hl(n.stateNode,r),yl(e),ul)throw ul=!1,e=ol,ol=null,e;return(Va&ja)!==Na?null:(Ju(),null)}function Rl(){for(;null!==rl;){var e=rl.effectTag;0!==(256&e)&&Da(rl.alternate,rl),0===(512&e)||al||(al=!0,Ku(97,(function(){return Ml(),null}))),rl=rl.nextEffect}}function Ml(){if(90!==cl){var e=97<cl?97:cl;return cl=90,Qu(e,Il)}}function Il(){if(null===ll)return!1;var e=ll;if(ll=null,(Va&(Ra|Ma))!==Na)throw Error(i(331));var t=Va;for(Va|=Ma,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!==(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:ya(128,0,n),ya(0,64,n)}}catch(t){if(null===e)throw Error(i(330));ql(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return Va=t,Ju(),!0}function Ll(e,t,n){Do(e,t=ka(e,t=ha(n,t),1073741823)),null!==(e=vl(e,1073741823))&&yl(e)}function ql(e,t){if(3===e.tag)Ll(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){Ll(n,e,t);break}if(1===n.tag){var r=n.stateNode;if(\"function\"===typeof n.type.getDerivedStateFromError||\"function\"===typeof r.componentDidCatch&&(null===il||!il.has(r))){Do(n,e=Sa(n,e=ha(t,e),1073741823)),null!==(n=vl(n,1073741823))&&yl(n);break}}n=n.return}}function Ul(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Wa===e&&Ga===n?Qa===za||Qa===Ua&&1073741823===Ya&&Wu()-tl<nl?Fl(e,Ga):el=!0:ec(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,e.finishedExpirationTime===n&&(e.finishedExpirationTime=0,e.finishedWork=null),yl(e)))}function zl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=ml(t=hl(),e,null)),null!==(e=vl(e,t))&&yl(e)}Ta=function(e,t,n){var r=t.expirationTime;if(null!==e){var u=t.pendingProps;if(e.memoizedProps!==u||vu.current)Wi=!0;else{if(r<n){switch(Wi=!1,t.tag){case 3:ea(t),Hi();break;case 5:if($o(t),4&t.mode&&1!==n&&u.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:bu(t.type)&&wu(t);break;case 4:Vo(t,t.stateNode.containerInfo);break;case 10:ao(t,t.memoizedProps.value);break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?ia(e,t,n):(hu(Qo,1&Qo.current),null!==(t=sa(e,t,n))?t.sibling:null);hu(Qo,1&Qo.current);break;case 19:if(r=t.childExpirationTime>=n,0!==(64&e.effectTag)){if(r)return ca(e,t,n);t.effectTag|=64}if(null!==(u=t.memoizedState)&&(u.rendering=null,u.tail=null),hu(Qo,Qo.current),!r)return null}return sa(e,t,n)}Wi=!1}}else Wi=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,u=yu(t,gu.current),so(t,n),u=hi(null,t,r,e,u,n),t.effectTag|=1,\"object\"===typeof u&&null!==u&&\"function\"===typeof u.render&&void 0===u.$$typeof){if(t.tag=1,mi(),bu(r)){var o=!0;wu(t)}else o=!1;t.memoizedState=null!==u.state&&void 0!==u.state?u.state:null;var a=r.getDerivedStateFromProps;\"function\"===typeof a&&Bo(t,r,a,e),u.updater=ko,t.stateNode=u,u._reactInternalFiber=t,Po(t,r,e,n),t=Zi(null,t,r,!0,o,n)}else t.tag=0,$i(null,t,u,n),t=t.child;return t;case 16:if(u=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(u),1!==u._status)throw u._result;switch(u=u._result,t.type=u,o=t.tag=function(e){if(\"function\"===typeof e)return Gl(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===V)return 11;if(e===G)return 14}return 2}(u),e=to(u,e),o){case 0:t=Ji(null,t,u,e,n);break;case 1:t=Xi(null,t,u,e,n);break;case 11:t=Gi(null,t,u,e,n);break;case 14:t=Qi(null,t,u,to(u.type,e),r,n);break;default:throw Error(i(306,u,\"\"))}return t;case 0:return r=t.type,u=t.pendingProps,Ji(e,t,r,u=t.elementType===r?u:to(r,u),n);case 1:return r=t.type,u=t.pendingProps,Xi(e,t,r,u=t.elementType===r?u:to(r,u),n);case 3:if(ea(t),null===(r=t.updateQueue))throw Error(i(282));if(u=null!==(u=t.memoizedState)?u.element:null,Co(t,r,t.pendingProps,null,n),(r=t.memoizedState.element)===u)Hi(),t=sa(e,t,n);else{if((u=t.stateNode.hydrate)&&(Ri=ir(t.stateNode.containerInfo.firstChild),ji=t,u=Mi=!0),u)for(n=Io(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else $i(e,t,r,n),Hi();t=t.child}return t;case 5:return $o(t),null===e&&qi(t),r=t.type,u=t.pendingProps,o=null!==e?e.memoizedProps:null,a=u.children,rr(r,u)?a=null:null!==o&&rr(r,o)&&(t.effectTag|=16),Yi(e,t),4&t.mode&&1!==n&&u.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):($i(e,t,a,n),t=t.child),t;case 6:return null===e&&qi(t),null;case 13:return ia(e,t,n);case 4:return Vo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Mo(t,null,r,n):$i(e,t,r,n),t.child;case 11:return r=t.type,u=t.pendingProps,Gi(e,t,r,u=t.elementType===r?u:to(r,u),n);case 7:return $i(e,t,t.pendingProps,n),t.child;case 8:case 12:return $i(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,u=t.pendingProps,a=t.memoizedProps,ao(t,o=u.value),null!==a){var l=a.value;if(0===(o=eu(l,o)?0:0|(\"function\"===typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(a.children===u.children&&!vu.current){t=sa(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var c=l.dependencies;if(null!==c){a=l.child;for(var s=c.firstContext;null!==s;){if(s.context===r&&0!==(s.observedBits&o)){1===l.tag&&((s=go(n,null)).tag=2,Do(l,s)),l.expirationTime<n&&(l.expirationTime=n),null!==(s=l.alternate)&&s.expirationTime<n&&(s.expirationTime=n),co(l.return,n),c.expirationTime<n&&(c.expirationTime=n);break}s=s.next}}else a=10===l.tag&&l.type===t.type?null:l.child;if(null!==a)a.return=l;else for(a=l;null!==a;){if(a===t){a=null;break}if(null!==(l=a.sibling)){l.return=a.return,a=l;break}a=a.return}l=a}}$i(e,t,u.children,n),t=t.child}return t;case 9:return u=t.type,r=(o=t.pendingProps).children,so(t,n),r=r(u=fo(u,o.unstable_observedBits)),t.effectTag|=1,$i(e,t,r,n),t.child;case 14:return o=to(u=t.type,t.pendingProps),Qi(e,t,u,o=to(u.type,o),r,n);case 15:return Ki(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:to(r,u),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,bu(r)?(e=!0,wu(t)):e=!1,so(t,n),To(t,r,u),Po(t,r,u,n),Zi(null,t,r,!0,e,n);case 19:return ca(e,t,n)}throw Error(i(156,t.tag))};var Hl=null,Vl=null;function Wl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function $l(e,t,n,r){return new Wl(e,t,n,r)}function Gl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ql(e,t){var n=e.alternate;return null===n?((n=$l(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kl(e,t,n,r,u,o){var a=2;if(r=e,\"function\"===typeof e)Gl(e)&&(a=1);else if(\"string\"===typeof e)a=5;else e:switch(e){case I:return Yl(n.children,u,o,t);case H:a=8,u|=7;break;case L:a=8,u|=1;break;case q:return(e=$l(12,n,t,8|u)).elementType=q,e.type=q,e.expirationTime=o,e;case W:return(e=$l(13,n,t,u)).type=W,e.elementType=W,e.expirationTime=o,e;case $:return(e=$l(19,n,t,u)).elementType=$,e.expirationTime=o,e;default:if(\"object\"===typeof e&&null!==e)switch(e.$$typeof){case U:a=10;break e;case z:a=9;break e;case V:a=11;break e;case G:a=14;break e;case Q:a=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,\"\"))}return(t=$l(a,n,t,u)).elementType=e,t.type=r,t.expirationTime=o,t}function Yl(e,t,n,r){return(e=$l(7,e,r,t)).expirationTime=n,e}function Jl(e,t,n){return(e=$l(6,e,null,t)).expirationTime=n,e}function Xl(e,t,n){return(t=$l(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zl(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function ec(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function tc(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function nc(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function rc(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function uc(e,t,n,r){var u=t.current,o=hl(),a=wo.suspense;o=ml(o,u,a);e:if(n){t:{if(et(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(i(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(bu(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(i(171))}if(1===n.tag){var c=n.type;if(bu(c)){n=Fu(n,c,l);break e}}n=l}else n=mu;return null===t.context?t.context=n:t.pendingContext=n,(t=go(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),Do(u,t),gl(u,o),o}function oc(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function ic(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function ac(e,t){ic(e,t),(e=e.alternate)&&ic(e,t)}function lc(e,t,n){var r=new Zl(e,t,n=null!=n&&!0===n.hydrate),u=$l(3,null,null,2===t?7:1===t?3:0);r.current=u,u.stateNode=r,e[fr]=r.current,n&&0!==t&&function(e){var t=Nn(e);mt.forEach((function(n){jn(n,e,t)})),gt.forEach((function(n){jn(n,e,t)}))}(9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function cc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||\" react-mount-point-unstable \"!==e.nodeValue))}function sc(e,t,n,r,u){var o=n._reactRootContainer;if(o){var i=o._internalRoot;if(\"function\"===typeof u){var a=u;u=function(){var e=oc(i);a.call(e)}}uc(t,i,e,u)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute(\"data-reactroot\"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new lc(e,0,t?{hydrate:!0}:void 0)}(n,r),i=o._internalRoot,\"function\"===typeof u){var l=u;u=function(){var e=oc(i);l.call(e)}}Al((function(){uc(t,i,e,u)}))}return oc(i)}function fc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!cc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:M,key:null==r?null:\"\"+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}ut=function(e){if(13===e.tag){var t=eo(hl(),150,100);gl(e,t),ac(e,t)}},ot=function(e){if(13===e.tag){hl();var t=Zu++;gl(e,t),ac(e,t)}},it=function(e){if(13===e.tag){var t=hl();gl(e,t=ml(t,e,null)),ac(e,t)}},ee=function(e,t,n){switch(t){case\"input\":if(Se(e,n),t=n.name,\"radio\"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(\"input[name=\"+JSON.stringify(\"\"+t)+'][type=\"radio\"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var u=mr(r);if(!u)throw Error(i(90));we(r),Se(r,u)}}}break;case\"textarea\":Re(e,n);break;case\"select\":null!=(t=n.value)&&Oe(e,!!n.multiple,t,!1)}},lc.prototype.render=function(e,t){uc(e,this._internalRoot,null,void 0===t?null:t)},lc.prototype.unmount=function(e){uc(null,this._internalRoot,null,void 0===e?null:e)},ie=Cl,ae=function(e,t,n,r){var u=Va;Va|=4;try{return Qu(98,e.bind(null,t,n,r))}finally{(Va=u)===Na&&Ju()}},le=function(){(Va&(1|Ra|Ma))===Na&&(function(){if(null!==sl){var e=sl;sl=null,e.forEach((function(e,t){rc(t,e),yl(t)})),Ju()}}(),Ml())},ce=function(e,t){var n=Va;Va|=2;try{return e(t)}finally{(Va=n)===Na&&Ju()}};var dc,pc,hc={createPortal:fc,findDOMNode:function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if(\"function\"===typeof e.render)throw Error(i(188));throw Error(i(268,Object.keys(e)))}return e=null===(e=rt(t))?null:e.stateNode},hydrate:function(e,t,n){if(!cc(t))throw Error(i(200));return sc(null,e,t,!0,n)},render:function(e,t,n){if(!cc(t))throw Error(i(200));return sc(null,e,t,!1,n)},unstable_renderSubtreeIntoContainer:function(e,t,n,r){if(!cc(n))throw Error(i(200));if(null==e||void 0===e._reactInternalFiber)throw Error(i(38));return sc(e,t,n,!1,r)},unmountComponentAtNode:function(e){if(!cc(e))throw Error(i(40));return!!e._reactRootContainer&&(Al((function(){sc(null,null,e,!1,(function(){e._reactRootContainer=null}))})),!0)},unstable_createPortal:function(){return fc.apply(void 0,arguments)},unstable_batchedUpdates:Cl,flushSync:function(e,t){if((Va&(Ra|Ma))!==Na)throw Error(i(187));var n=Va;Va|=1;try{return Qu(99,e.bind(null,t))}finally{Va=n,Ju()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[pr,hr,mr,_.injectEventPluginsByName,d,Pt,function(e){B(e,_t)},ue,oe,Tn,T,Ml,{current:!1}]}};pc=(dc={findFiberByHostInstance:dr,bundleType:0,version:\"16.11.0\",rendererPackageName:\"react-dom\"}).findFiberByHostInstance,function(e){if(\"undefined\"===typeof{})return!1;var t={};if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Hl=function(e){try{t.onCommitFiberRoot(n,e,void 0,64===(64&e.current.effectTag))}catch(e){}},Vl=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(u({},dc,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=rt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return pc?pc(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}));var mc={default:hc},gc=mc&&hc||mc;e.exports=gc.default||gc},function(e,t,n){\"use strict\";e.exports=n(184)},function(e,t,n){\"use strict\";var r,u,o,i,a;if(Object.defineProperty(t,\"__esModule\",{value:!0}),\"undefined\"===typeof window||\"function\"!==typeof MessageChannel){var l=null,c=null,s=function e(){if(null!==l)try{var n=t.unstable_now();l(!0,n),l=null}catch(t){throw setTimeout(e,0),t}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(s,0))},u=function(e,t){c=setTimeout(e,t)},o=function(){clearTimeout(c)},i=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var d=window.performance,p=window.Date,h=window.setTimeout,m=window.clearTimeout,g=window.requestAnimationFrame,v=window.cancelAnimationFrame;if(\"undefined\"!==typeof console&&(\"function\"!==typeof g&&console.error(\"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\"),\"function\"!==typeof v&&console.error(\"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\")),\"object\"===typeof d&&\"function\"===typeof d.now)t.unstable_now=function(){return d.now()};else{var D=p.now();t.unstable_now=function(){return p.now()-D}}var y=!1,b=null,E=-1,C=5,A=0;i=function(){return t.unstable_now()>=A},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error(\"forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported\"):C=0<e?Math.floor(1e3/e):33.33};var F=new MessageChannel,w=F.port2;F.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();A=e+C;try{b(!0,e)?w.postMessage(null):(y=!1,b=null)}catch(e){throw w.postMessage(null),e}}else y=!1},r=function(e){b=e,y||(y=!0,w.postMessage(null))},u=function(e,n){E=h((function(){e(t.unstable_now())}),n)},o=function(){m(E),E=-1}}function x(e,t){var n=e.length;e.push(t);e:for(;;){var r=Math.floor((n-1)/2),u=e[r];if(!(void 0!==u&&0<S(u,t)))break e;e[r]=t,e[n]=u,n=r}}function B(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,u=e.length;r<u;){var o=2*(r+1)-1,i=e[o],a=o+1,l=e[a];if(void 0!==i&&0>S(i,n))void 0!==l&&0>S(l,i)?(e[r]=l,e[a]=n,r=a):(e[r]=i,e[o]=n,r=o);else{if(!(void 0!==l&&0>S(l,n)))break e;e[r]=l,e[a]=n,r=a}}}return t}return null}function S(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var T=[],_=[],P=1,O=null,N=3,j=!1,R=!1,M=!1;function I(e){for(var t=B(_);null!==t;){if(null===t.callback)k(_);else{if(!(t.startTime<=e))break;k(_),t.sortIndex=t.expirationTime,x(T,t)}t=B(_)}}function L(e){if(M=!1,I(e),!R)if(null!==B(T))R=!0,r(q);else{var t=B(_);null!==t&&u(L,t.startTime-e)}}function q(e,n){R=!1,M&&(M=!1,o()),j=!0;var r=N;try{for(I(n),O=B(T);null!==O&&(!(O.expirationTime>n)||e&&!i());){var a=O.callback;if(null!==a){O.callback=null,N=O.priorityLevel;var l=a(O.expirationTime<=n);n=t.unstable_now(),\"function\"===typeof l?O.callback=l:O===B(T)&&k(T),I(n)}else k(T);O=B(T)}if(null!==O)var c=!0;else{var s=B(_);null!==s&&u(L,s.startTime-n),c=!1}return c}finally{O=null,N=r,j=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var z=a;t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},t.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},t.unstable_scheduleCallback=function(e,n,i){var a=t.unstable_now();if(\"object\"===typeof i&&null!==i){var l=i.delay;l=\"number\"===typeof l&&0<l?a+l:a,i=\"number\"===typeof i.timeout?i.timeout:U(e)}else i=U(e),l=a;return e={id:P++,callback:n,priorityLevel:e,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>a?(e.sortIndex=l,x(_,e),null===B(T)&&e===B(_)&&(M?o():M=!0,u(L,l-a))):(e.sortIndex=i,x(T,e),R||j||(R=!0,r(q))),e},t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_shouldYield=function(){var e=t.unstable_now();I(e);var n=B(T);return n!==O&&null!==O&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<O.expirationTime||i()},t.unstable_requestPaint=z,t.unstable_continueExecution=function(){R||j||(R=!0,r(q))},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return B(T)},t.unstable_Profiling=null},function(e,t){var n={\"&lt\":\"<\",\"&gt\":\">\",\"&quot\":'\"',\"&apos\":\"'\",\"&amp\":\"&\",\"&lt;\":\"<\",\"&gt;\":\">\",\"&quot;\":'\"',\"&apos;\":\"'\",\"&amp;\":\"&\"},r={60:\"lt\",62:\"gt\",34:\"quot\",39:\"apos\",38:\"amp\"},u={\"<\":\"&lt;\",\">\":\"&gt;\",'\"':\"&quot;\",\"'\":\"&apos;\",\"&\":\"&amp;\"};function o(){}o.prototype.encode=function(e){return e&&e.length?e.replace(/<|>|\"|'|&/g,(function(e){return u[e]})):\"\"},o.encode=function(e){return(new o).encode(e)},o.prototype.decode=function(e){return e&&e.length?e.replace(/&#?[0-9a-zA-Z]+;?/g,(function(e){if(\"#\"===e.charAt(1)){var t=\"x\"===e.charAt(2).toLowerCase()?parseInt(e.substr(3),16):parseInt(e.substr(2));return isNaN(t)||t<-32768||t>65535?\"\":String.fromCharCode(t)}return n[e]||e})):\"\"},o.decode=function(e){return(new o).decode(e)},o.prototype.encodeNonUTF=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",u=0;u<t;){var o=e.charCodeAt(u),i=r[o];i?(n+=\"&\"+i+\";\",u++):(n+=o<32||o>126?\"&#\"+o+\";\":e.charAt(u),u++)}return n},o.encodeNonUTF=function(e){return(new o).encodeNonUTF(e)},o.prototype.encodeNonASCII=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var u=e.charCodeAt(r);u<=255?n+=e[r++]:(n+=\"&#\"+u+\";\",r++)}return n},o.encodeNonASCII=function(e){return(new o).encodeNonASCII(e)},e.exports=o},function(e,t){for(var n=[\"apos\",\"nbsp\",\"iexcl\",\"cent\",\"pound\",\"curren\",\"yen\",\"brvbar\",\"sect\",\"uml\",\"copy\",\"ordf\",\"laquo\",\"not\",\"shy\",\"reg\",\"macr\",\"deg\",\"plusmn\",\"sup2\",\"sup3\",\"acute\",\"micro\",\"para\",\"middot\",\"cedil\",\"sup1\",\"ordm\",\"raquo\",\"frac14\",\"frac12\",\"frac34\",\"iquest\",\"Agrave\",\"Aacute\",\"Acirc\",\"Atilde\",\"Auml\",\"Aring\",\"Aelig\",\"Ccedil\",\"Egrave\",\"Eacute\",\"Ecirc\",\"Euml\",\"Igrave\",\"Iacute\",\"Icirc\",\"Iuml\",\"ETH\",\"Ntilde\",\"Ograve\",\"Oacute\",\"Ocirc\",\"Otilde\",\"Ouml\",\"times\",\"Oslash\",\"Ugrave\",\"Uacute\",\"Ucirc\",\"Uuml\",\"Yacute\",\"THORN\",\"szlig\",\"agrave\",\"aacute\",\"acirc\",\"atilde\",\"auml\",\"aring\",\"aelig\",\"ccedil\",\"egrave\",\"eacute\",\"ecirc\",\"euml\",\"igrave\",\"iacute\",\"icirc\",\"iuml\",\"eth\",\"ntilde\",\"ograve\",\"oacute\",\"ocirc\",\"otilde\",\"ouml\",\"divide\",\"oslash\",\"ugrave\",\"uacute\",\"ucirc\",\"uuml\",\"yacute\",\"thorn\",\"yuml\",\"quot\",\"amp\",\"lt\",\"gt\",\"OElig\",\"oelig\",\"Scaron\",\"scaron\",\"Yuml\",\"circ\",\"tilde\",\"ensp\",\"emsp\",\"thinsp\",\"zwnj\",\"zwj\",\"lrm\",\"rlm\",\"ndash\",\"mdash\",\"lsquo\",\"rsquo\",\"sbquo\",\"ldquo\",\"rdquo\",\"bdquo\",\"dagger\",\"Dagger\",\"permil\",\"lsaquo\",\"rsaquo\",\"euro\",\"fnof\",\"Alpha\",\"Beta\",\"Gamma\",\"Delta\",\"Epsilon\",\"Zeta\",\"Eta\",\"Theta\",\"Iota\",\"Kappa\",\"Lambda\",\"Mu\",\"Nu\",\"Xi\",\"Omicron\",\"Pi\",\"Rho\",\"Sigma\",\"Tau\",\"Upsilon\",\"Phi\",\"Chi\",\"Psi\",\"Omega\",\"alpha\",\"beta\",\"gamma\",\"delta\",\"epsilon\",\"zeta\",\"eta\",\"theta\",\"iota\",\"kappa\",\"lambda\",\"mu\",\"nu\",\"xi\",\"omicron\",\"pi\",\"rho\",\"sigmaf\",\"sigma\",\"tau\",\"upsilon\",\"phi\",\"chi\",\"psi\",\"omega\",\"thetasym\",\"upsih\",\"piv\",\"bull\",\"hellip\",\"prime\",\"Prime\",\"oline\",\"frasl\",\"weierp\",\"image\",\"real\",\"trade\",\"alefsym\",\"larr\",\"uarr\",\"rarr\",\"darr\",\"harr\",\"crarr\",\"lArr\",\"uArr\",\"rArr\",\"dArr\",\"hArr\",\"forall\",\"part\",\"exist\",\"empty\",\"nabla\",\"isin\",\"notin\",\"ni\",\"prod\",\"sum\",\"minus\",\"lowast\",\"radic\",\"prop\",\"infin\",\"ang\",\"and\",\"or\",\"cap\",\"cup\",\"int\",\"there4\",\"sim\",\"cong\",\"asymp\",\"ne\",\"equiv\",\"le\",\"ge\",\"sub\",\"sup\",\"nsub\",\"sube\",\"supe\",\"oplus\",\"otimes\",\"perp\",\"sdot\",\"lceil\",\"rceil\",\"lfloor\",\"rfloor\",\"lang\",\"rang\",\"loz\",\"spades\",\"clubs\",\"hearts\",\"diams\"],r=[39,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,34,38,60,62,338,339,352,353,376,710,732,8194,8195,8201,8204,8205,8206,8207,8211,8212,8216,8217,8218,8220,8221,8222,8224,8225,8240,8249,8250,8364,402,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,977,978,982,8226,8230,8242,8243,8254,8260,8472,8465,8476,8482,8501,8592,8593,8594,8595,8596,8629,8656,8657,8658,8659,8660,8704,8706,8707,8709,8711,8712,8713,8715,8719,8721,8722,8727,8730,8733,8734,8736,8743,8744,8745,8746,8747,8756,8764,8773,8776,8800,8801,8804,8805,8834,8835,8836,8838,8839,8853,8855,8869,8901,8968,8969,8970,8971,9001,9002,9674,9824,9827,9829,9830],u={},o={},i=0,a=n.length;i<a;){var l=n[i],c=r[i];u[l]=String.fromCharCode(c),o[c]=l,i++}function s(){}s.prototype.decode=function(e){return e&&e.length?e.replace(/&(#?[\\w\\d]+);?/g,(function(e,t){var n;if(\"#\"===t.charAt(0)){var r=\"x\"===t.charAt(1).toLowerCase()?parseInt(t.substr(2),16):parseInt(t.substr(1));isNaN(r)||r<-32768||r>65535||(n=String.fromCharCode(r))}else n=u[t];return n||e})):\"\"},s.decode=function(e){return(new s).decode(e)},s.prototype.encode=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var u=o[e.charCodeAt(r)];n+=u?\"&\"+u+\";\":e.charAt(r),r++}return n},s.encode=function(e){return(new s).encode(e)},s.prototype.encodeNonUTF=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var u=e.charCodeAt(r),i=o[u];n+=i?\"&\"+i+\";\":u<32||u>126?\"&#\"+u+\";\":e.charAt(r),r++}return n},s.encodeNonUTF=function(e){return(new s).encodeNonUTF(e)},s.prototype.encodeNonASCII=function(e){if(!e||!e.length)return\"\";for(var t=e.length,n=\"\",r=0;r<t;){var u=e.charCodeAt(r);u<=255?n+=e[r++]:(n+=\"&#\"+u+\";\",r++)}return n},s.encodeNonASCII=function(e){return(new s).encodeNonASCII(e)},e.exports=s},function(e,t,n){\"use strict\";var r=n(188);function u(){var e=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(192));return u=function(){return e},e}function o(){var e=a(n(193));return o=function(){return e},e}function i(){var e=a(n(196));return i=function(){return e},e}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,\"__esModule\",{value:!0}),t.shouldHighlight=d,t.getChalk=p,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d(t)?function(e,t){return t.replace(u().default,(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var u=f(n),o=e[u];return o?n[0].split(l).map((function(e){return o(e)})).join(\"\\n\"):n[0]}))}(function(e){return{keyword:e.cyan,capitalized:e.yellow,jsx_tag:e.yellow,punctuator:e.yellow,number:e.magenta,string:e.green,regex:e.magenta,comment:e.grey,invalid:e.white.bgRed.bold}}(p(t)),e):e};var l=/\\r\\n|[\\n\\r\\u2028\\u2029]/,c=/^[a-z][\\w-]*$/i,s=/^[()[\\]{}]$/;function f(e){var t=e.slice(-2),n=r(t,2),i=n[0],a=n[1],l=(0,u().matchToToken)(e);if(\"name\"===l.type){if(o().default.keyword.isReservedWordES6(l.value))return\"keyword\";if(c.test(l.value)&&(\"<\"===a[i-1]||\"</\"==a.substr(i-2,2)))return\"jsx_tag\";if(l.value[0]!==l.value[0].toLowerCase())return\"capitalized\"}return\"punctuator\"===l.type&&s.test(l.value)?\"bracket\":\"invalid\"!==l.type||\"@\"!==l.value&&\"#\"!==l.value?l.type:\"punctuator\"}function d(e){return i().default.supportsColor||e.forceColor}function p(e){var t=i().default;return e.forceColor&&(t=new(i().default.constructor)({enabled:!0,level:1})),t}},function(e,t,n){var r=n(189),u=n(190),o=n(191);e.exports=function(e,t){return r(e)||u(e,t)||o()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e)){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(u)throw o}}return n}}},function(e,t){e.exports=function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}},function(e,t){Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=/((['\"])(?:(?!\\2|\\\\).|\\\\(?:\\r\\n|[\\s\\S]))*(\\2)?|`(?:[^`\\\\$]|\\\\[\\s\\S]|\\$(?!\\{)|\\$\\{(?:[^{}]|\\{[^}]*\\}?)*\\}?)*(`)?)|(\\/\\/.*)|(\\/\\*(?:[^*]|\\*(?!\\/))*(\\*\\/)?)|(\\/(?!\\*)(?:\\[(?:(?![\\]\\\\]).|\\\\.)*\\]|(?![\\/\\]\\\\]).|\\\\.)+\\/(?:(?!\\s*(?:\\b|[\\u0080-\\uFFFF$\\\\'\"~({]|[+\\-!](?!=)|\\.?\\d))|[gmiyus]{1,6}\\b(?![\\u0080-\\uFFFF$\\\\]|\\s*(?:[+\\-*%&|^<>!=?({]|\\/(?![\\/*])))))|(0[xX][\\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][+-]?\\d+)?)|((?!\\d)(?:(?!\\s)[$\\w\\u0080-\\uFFFF]|\\\\u[\\da-fA-F]{4}|\\\\u\\{[\\da-fA-F]+\\})+)|(--|\\+\\+|&&|\\|\\||=>|\\.{3}|(?:[+\\-\\/%&|^]|\\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\\](){}])|(\\s+)|(^$|[\\s\\S])/g,t.matchToToken=function(e){var t={type:\"invalid\",value:e[0],closed:void 0};return e[1]?(t.type=\"string\",t.closed=!(!e[3]&&!e[4])):e[5]?t.type=\"comment\":e[6]?(t.type=\"comment\",t.closed=!!e[7]):e[8]?t.type=\"regex\":e[9]?t.type=\"number\":e[10]?t.type=\"name\":e[11]?t.type=\"punctuator\":e[12]&&(t.type=\"whitespace\"),t}},function(e,t,n){!function(){\"use strict\";t.ast=n(194),t.code=n(84),t.keyword=n(195)}()},function(e,t){!function(){\"use strict\";function t(e){if(null==e)return!1;switch(e.type){case\"BlockStatement\":case\"BreakStatement\":case\"ContinueStatement\":case\"DebuggerStatement\":case\"DoWhileStatement\":case\"EmptyStatement\":case\"ExpressionStatement\":case\"ForInStatement\":case\"ForStatement\":case\"IfStatement\":case\"LabeledStatement\":case\"ReturnStatement\":case\"SwitchStatement\":case\"ThrowStatement\":case\"TryStatement\":case\"VariableDeclaration\":case\"WhileStatement\":case\"WithStatement\":return!0}return!1}function n(e){switch(e.type){case\"IfStatement\":return null!=e.alternate?e.alternate:e.consequent;case\"LabeledStatement\":case\"ForStatement\":case\"ForInStatement\":case\"WhileStatement\":case\"WithStatement\":return e.body}return null}e.exports={isExpression:function(e){if(null==e)return!1;switch(e.type){case\"ArrayExpression\":case\"AssignmentExpression\":case\"BinaryExpression\":case\"CallExpression\":case\"ConditionalExpression\":case\"FunctionExpression\":case\"Identifier\":case\"Literal\":case\"LogicalExpression\":case\"MemberExpression\":case\"NewExpression\":case\"ObjectExpression\":case\"SequenceExpression\":case\"ThisExpression\":case\"UnaryExpression\":case\"UpdateExpression\":return!0}return!1},isStatement:t,isIterationStatement:function(e){if(null==e)return!1;switch(e.type){case\"DoWhileStatement\":case\"ForInStatement\":case\"ForStatement\":case\"WhileStatement\":return!0}return!1},isSourceElement:function(e){return t(e)||null!=e&&\"FunctionDeclaration\"===e.type},isProblematicIfStatement:function(e){var t;if(\"IfStatement\"!==e.type)return!1;if(null==e.alternate)return!1;t=e.consequent;do{if(\"IfStatement\"===t.type&&null==t.alternate)return!0;t=n(t)}while(t);return!1},trailingStatement:n}}()},function(e,t,n){!function(){\"use strict\";var t=n(84);function r(e,t){return!(!t&&\"yield\"===e)&&u(e,t)}function u(e,t){if(t&&function(e){switch(e){case\"implements\":case\"interface\":case\"package\":case\"private\":case\"protected\":case\"public\":case\"static\":case\"let\":return!0;default:return!1}}(e))return!0;switch(e.length){case 2:return\"if\"===e||\"in\"===e||\"do\"===e;case 3:return\"var\"===e||\"for\"===e||\"new\"===e||\"try\"===e;case 4:return\"this\"===e||\"else\"===e||\"case\"===e||\"void\"===e||\"with\"===e||\"enum\"===e;case 5:return\"while\"===e||\"break\"===e||\"catch\"===e||\"throw\"===e||\"const\"===e||\"yield\"===e||\"class\"===e||\"super\"===e;case 6:return\"return\"===e||\"typeof\"===e||\"delete\"===e||\"switch\"===e||\"export\"===e||\"import\"===e;case 7:return\"default\"===e||\"finally\"===e||\"extends\"===e;case 8:return\"function\"===e||\"continue\"===e||\"debugger\"===e;case 10:return\"instanceof\"===e;default:return!1}}function o(e,t){return\"null\"===e||\"true\"===e||\"false\"===e||r(e,t)}function i(e,t){return\"null\"===e||\"true\"===e||\"false\"===e||u(e,t)}function a(e){var n,r,u;if(0===e.length)return!1;if(u=e.charCodeAt(0),!t.isIdentifierStartES5(u))return!1;for(n=1,r=e.length;n<r;++n)if(u=e.charCodeAt(n),!t.isIdentifierPartES5(u))return!1;return!0}function l(e){var n,r,u,o,i;if(0===e.length)return!1;for(i=t.isIdentifierStartES6,n=0,r=e.length;n<r;++n){if(55296<=(u=e.charCodeAt(n))&&u<=56319){if(++n>=r)return!1;if(!(56320<=(o=e.charCodeAt(n))&&o<=57343))return!1;u=1024*(u-55296)+(o-56320)+65536}if(!i(u))return!1;i=t.isIdentifierPartES6}return!0}e.exports={isKeywordES5:r,isKeywordES6:u,isReservedWordES5:o,isReservedWordES6:i,isRestrictedWord:function(e){return\"eval\"===e||\"arguments\"===e},isIdentifierNameES5:a,isIdentifierNameES6:l,isIdentifierES5:function(e,t){return a(e)&&!o(e,t)},isIdentifierES6:function(e,t){return l(e)&&!i(e,t)}}}()},function(e,t,n){\"use strict\";(function(t){var r=n(197),u=n(198),o=n(203).stdout,i=n(204),a=\"win32\"===t.platform&&!(Object({NODE_ENV:\"production\"}).TERM||\"\").toLowerCase().startsWith(\"xterm\"),l=[\"ansi\",\"ansi\",\"ansi256\",\"ansi16m\"],c=new Set([\"gray\"]),s=Object.create(null);function f(e,t){t=t||{};var n=o?o.level:0;e.level=void 0===t.level?n:t.level,e.enabled=\"enabled\"in t?t.enabled:e.level>0}function d(e){if(!this||!(this instanceof d)||this.template){var t={};return f(t,e),t.template=function(){var e=[].slice.call(arguments);return w.apply(null,[t.template].concat(e))},Object.setPrototypeOf(t,d.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=d,t.template}f(this,e)}a&&(u.blue.open=\"\x1B[94m\");for(var p=function(){var e=m[h];u[e].closeRe=new RegExp(r(u[e].close),\"g\"),s[e]={get:function(){var t=u[e];return A.call(this,this._styles?this._styles.concat(t):[t],this._empty,e)}}},h=0,m=Object.keys(u);h<m.length;h++)p();s.visible={get:function(){return A.call(this,this._styles||[],!0,\"visible\")}},u.color.closeRe=new RegExp(r(u.color.close),\"g\");for(var g=function(){var e=D[v];if(c.has(e))return\"continue\";s[e]={get:function(){var t=this.level;return function(){var n=u.color[l[t]][e].apply(null,arguments),r={open:n,close:u.color.close,closeRe:u.color.closeRe};return A.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}}},v=0,D=Object.keys(u.color.ansi);v<D.length;v++)g();u.bgColor.closeRe=new RegExp(r(u.bgColor.close),\"g\");for(var y=function(){var e=E[b];if(c.has(e))return\"continue\";var t=\"bg\"+e[0].toUpperCase()+e.slice(1);s[t]={get:function(){var t=this.level;return function(){var n=u.bgColor[l[t]][e].apply(null,arguments),r={open:n,close:u.bgColor.close,closeRe:u.bgColor.closeRe};return A.call(this,this._styles?this._styles.concat(r):[r],this._empty,e)}}}},b=0,E=Object.keys(u.bgColor.ansi);b<E.length;b++)y();var C=Object.defineProperties((function(){}),s);function A(e,t,n){var r=function e(){return F.apply(e,arguments)};r._styles=e,r._empty=t;var u=this;return Object.defineProperty(r,\"level\",{enumerable:!0,get:function(){return u.level},set:function(e){u.level=e}}),Object.defineProperty(r,\"enabled\",{enumerable:!0,get:function(){return u.enabled},set:function(e){u.enabled=e}}),r.hasGrey=this.hasGrey||\"gray\"===n||\"grey\"===n,r.__proto__=C,r}function F(){var e=arguments,t=e.length,n=String(arguments[0]);if(0===t)return\"\";if(t>1)for(var r=1;r<t;r++)n+=\" \"+e[r];if(!this.enabled||this.level<=0||!n)return this._empty?\"\":n;var o=u.dim.open;a&&this.hasGrey&&(u.dim.open=\"\");var i=!0,l=!1,c=void 0;try{for(var s,f=this._styles.slice().reverse()[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var d=s.value;n=(n=d.open+n.replace(d.closeRe,d.open)+d.close).replace(/\\r?\\n/g,\"\".concat(d.close,\"$&\").concat(d.open))}}catch(e){l=!0,c=e}finally{try{i||null==f.return||f.return()}finally{if(l)throw c}}return u.dim.open=o,n}function w(e,t){if(!Array.isArray(t))return[].slice.call(arguments,1).join(\" \");for(var n=[].slice.call(arguments,2),r=[t.raw[0]],u=1;u<t.length;u++)r.push(String(n[u-1]).replace(/[{}\\\\]/g,\"\\\\$&\")),r.push(String(t.raw[u]));return i(e,r.join(\"\"))}Object.defineProperties(d.prototype,s),e.exports=d(),e.exports.supportsColor=o,e.exports.default=e.exports}).call(this,n(48))},function(e,t,n){\"use strict\";var r=/[|\\\\{}()[\\]^$+*?.]/g;e.exports=function(e){if(\"string\"!==typeof e)throw new TypeError(\"Expected a string\");return e.replace(r,\"\\\\$&\")}},function(e,t,n){\"use strict\";(function(e){var t=n(200),r=function(e,n){return function(){var r=e.apply(t,arguments);return\"\x1B[\".concat(r+n,\"m\")}},u=function(e,n){return function(){var r=e.apply(t,arguments);return\"\x1B[\".concat(38+n,\";5;\").concat(r,\"m\")}},o=function(e,n){return function(){var r=e.apply(t,arguments);return\"\x1B[\".concat(38+n,\";2;\").concat(r[0],\";\").concat(r[1],\";\").concat(r[2],\"m\")}};Object.defineProperty(e,\"exports\",{enumerable:!0,get:function(){var e=new Map,n={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};n.color.grey=n.color.gray;for(var i=0,a=Object.keys(n);i<a.length;i++){for(var l=a[i],c=n[l],s=0,f=Object.keys(c);s<f.length;s++){var d=f[s],p=c[d];n[d]={open:\"\x1B[\".concat(p[0],\"m\"),close:\"\x1B[\".concat(p[1],\"m\")},c[d]=n[d],e.set(p[0],p[1])}Object.defineProperty(n,l,{value:c,enumerable:!1}),Object.defineProperty(n,\"codes\",{value:e,enumerable:!1})}var h=function(e){return e},m=function(e,t,n){return[e,t,n]};n.color.close=\"\x1B[39m\",n.bgColor.close=\"\x1B[49m\",n.color.ansi={ansi:r(h,0)},n.color.ansi256={ansi256:u(h,0)},n.color.ansi16m={rgb:o(m,0)},n.bgColor.ansi={ansi:r(h,10)},n.bgColor.ansi256={ansi256:u(h,10)},n.bgColor.ansi16m={rgb:o(m,10)};for(var g=0,v=Object.keys(t);g<v.length;g++){var D=v[g];if(\"object\"===typeof t[D]){var y=t[D];\"ansi16\"===D&&(D=\"ansi\"),\"ansi16\"in y&&(n.color.ansi[D]=r(y.ansi16,0),n.bgColor.ansi[D]=r(y.ansi16,10)),\"ansi256\"in y&&(n.color.ansi256[D]=u(y.ansi256,0),n.bgColor.ansi256[D]=u(y.ansi256,10)),\"rgb\"in y&&(n.color.ansi16m[D]=o(y.rgb,0),n.bgColor.ansi16m[D]=o(y.rgb,10))}}return n}})}).call(this,n(199)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,\"loaded\",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,\"id\",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(85),u=n(202),o={};Object.keys(r).forEach((function(e){o[e]={},Object.defineProperty(o[e],\"channels\",{value:r[e].channels}),Object.defineProperty(o[e],\"labels\",{value:r[e].labels});var t=u(e);Object.keys(t).forEach((function(n){var r=t[n];o[e][n]=function(e){var t=function(t){if(void 0===t||null===t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=e(t);if(\"object\"===typeof n)for(var r=n.length,u=0;u<r;u++)n[u]=Math.round(n[u]);return n};return\"conversion\"in e&&(t.conversion=e.conversion),t}(r),o[e][n].raw=function(e){var t=function(t){return void 0===t||null===t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),e(t))};return\"conversion\"in e&&(t.conversion=e.conversion),t}(r)}))})),e.exports=o},function(e,t,n){\"use strict\";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},function(e,t,n){var r=n(85);function u(e){var t=function(){for(var e={},t=Object.keys(r),n=t.length,u=0;u<n;u++)e[t[u]]={distance:-1,parent:null};return e}(),n=[e];for(t[e].distance=0;n.length;)for(var u=n.pop(),o=Object.keys(r[u]),i=o.length,a=0;a<i;a++){var l=o[a],c=t[l];-1===c.distance&&(c.distance=t[u].distance+1,c.parent=u,n.unshift(l))}return t}function o(e,t){return function(n){return t(e(n))}}function i(e,t){for(var n=[t[e].parent,e],u=r[t[e].parent][e],i=t[e].parent;t[i].parent;)n.unshift(t[i].parent),u=o(r[t[i].parent][i],u),i=t[i].parent;return u.conversion=n,u}e.exports=function(e){for(var t=u(e),n={},r=Object.keys(t),o=r.length,a=0;a<o;a++){var l=r[a];null!==t[l].parent&&(n[l]=i(l,t))}return n}},function(e,t,n){\"use strict\";e.exports={stdout:!1,stderr:!1}},function(e,t,n){\"use strict\";var r=/(?:\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.))|(?:\\{(~)?(\\w+(?:\\([^)]*\\))?(?:\\.\\w+(?:\\([^)]*\\))?)*)(?:[ \\t]|(?=\\r?\\n)))|(\\})|((?:.|[\\r\\n\\f])+?)/gi,u=/(?:^|\\.)(\\w+)(?:\\(([^)]*)\\))?/g,o=/^(['\"])((?:\\\\.|(?!\\1)[^\\\\])*)\\1$/,i=/\\\\(u[a-f\\d]{4}|x[a-f\\d]{2}|.)|([^\\\\])/gi,a=new Map([[\"n\",\"\\n\"],[\"r\",\"\\r\"],[\"t\",\"\\t\"],[\"b\",\"\\b\"],[\"f\",\"\\f\"],[\"v\",\"\\v\"],[\"0\",\"\\0\"],[\"\\\\\",\"\\\\\"],[\"e\",\"\x1B\"],[\"a\",\"\x07\"]]);function l(e){return\"u\"===e[0]&&5===e.length||\"x\"===e[0]&&3===e.length?String.fromCharCode(parseInt(e.slice(1),16)):a.get(e)||e}function c(e,t){var n,r=[],u=t.trim().split(/\\s*,\\s*/g),a=!0,c=!1,s=void 0;try{for(var f,d=u[Symbol.iterator]();!(a=(f=d.next()).done);a=!0){var p=f.value;if(isNaN(p)){if(!(n=p.match(o)))throw new Error(\"Invalid Chalk template style argument: \".concat(p,\" (in style '\").concat(e,\"')\"));r.push(n[2].replace(i,(function(e,t,n){return t?l(t):n})))}else r.push(Number(p))}}catch(e){c=!0,s=e}finally{try{a||null==d.return||d.return()}finally{if(c)throw s}}return r}function s(e){u.lastIndex=0;for(var t,n=[];null!==(t=u.exec(e));){var r=t[1];if(t[2]){var o=c(r,t[2]);n.push([r].concat(o))}else n.push([r])}return n}function f(e,t){var n={},r=!0,u=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var l=i.value,c=!0,s=!1,f=void 0;try{for(var d,p=l.styles[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=d.value;n[h[0]]=l.inverse?null:h.slice(1)}}catch(e){s=!0,f=e}finally{try{c||null==p.return||p.return()}finally{if(s)throw f}}}}catch(e){u=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(u)throw o}}for(var m=e,g=0,v=Object.keys(n);g<v.length;g++){var D=v[g];if(Array.isArray(n[D])){if(!(D in m))throw new Error(\"Unknown Chalk style: \".concat(D));m=n[D].length>0?m[D].apply(m,n[D]):m[D]}}return m}e.exports=function(e,t){var n=[],u=[],o=[];if(t.replace(r,(function(t,r,i,a,c,d){if(r)o.push(l(r));else if(a){var p=o.join(\"\");o=[],u.push(0===n.length?p:f(e,n)(p)),n.push({inverse:i,styles:s(a)})}else if(c){if(0===n.length)throw new Error(\"Found extraneous } in Chalk template literal\");u.push(f(e,n)(o.join(\"\"))),o=[],n.pop()}else o.push(d)})),u.push(o.join(\"\")),n.length>0){var i=\"Chalk template literal is missing \".concat(n.length,\" closing bracket\").concat(1===n.length?\"\":\"s\",\" (`}`)\");throw new Error(i)}return u.join(\"\")}},function(e,t,n){\"use strict\";n.r(t);n(88);var r=n(0),u=n.n(r),o=n(49),i=n.n(o),a=function(e){return{position:\"relative\",display:\"inline-flex\",flexDirection:\"column\",height:\"100%\",width:\"1024px\",maxWidth:\"100%\",overflowX:\"hidden\",overflowY:\"auto\",padding:\"0.5rem\",boxSizing:\"border-box\",textAlign:\"left\",fontFamily:\"Consolas, Menlo, monospace\",fontSize:\"11px\",whiteSpace:\"pre-wrap\",wordBreak:\"break-word\",lineHeight:1.5,color:e.color}},l=null;var c=function(e){var t=Object(r.useContext)(De),n=e.shortcutHandler;return Object(r.useEffect)((function(){var e=function(e){n&&n(e.key)};return window.addEventListener(\"keydown\",e),l&&l.addEventListener(\"keydown\",e),function(){window.removeEventListener(\"keydown\",e),l&&l.removeEventListener(\"keydown\",e)}}),[n]),u.a.createElement(\"div\",{style:a(t),ref:function(e){if(e){var t=e.ownerDocument;l=t.defaultView}}},e.children)},s=function(e){return{fontFamily:\"sans-serif\",color:e.footer,marginTop:\"0.5rem\",flex:\"0 0 auto\"}};var f=function(e){var t=Object(r.useContext)(De);return u.a.createElement(\"div\",{style:s(t)},e.line1,u.a.createElement(\"br\",null),e.line2)},d=function(e){return{fontSize:\"2em\",fontFamily:\"sans-serif\",color:e.headerColor,whiteSpace:\"pre-wrap\",margin:\"0 2rem 0.75rem 0\",flex:\"0 0 auto\",maxHeight:\"50%\",overflow:\"auto\"}};var p=function(e){var t=Object(r.useContext)(De);return u.a.createElement(\"div\",{style:d(t)},e.headerText)};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={position:\"relative\",display:\"block\",padding:\"0.5em\",marginTop:\"0.5em\",marginBottom:\"0.5em\",overflowX:\"auto\",whiteSpace:\"pre-wrap\",borderRadius:\"0.25rem\"},D={fontFamily:\"Consolas, Menlo, monospace\"};var y=function(e){var t=e.main,n=e.codeHTML,o=Object(r.useContext)(De),i=g({},v,{backgroundColor:o.primaryPreBackground,color:o.primaryPreColor}),a=g({},v,{backgroundColor:o.secondaryPreBackground,color:o.secondaryPreColor}),l=t?i:a,c={__html:n};return u.a.createElement(\"pre\",{style:l},u.a.createElement(\"code\",{style:D,dangerouslySetInnerHTML:c}))},b=n(34),E=n.n(b),C=new(n(86).AllHtmlEntities),A=function(e){return{reset:[e.base05,\"transparent\"],black:e.base05,red:e.base08,green:e.base0B,yellow:e.base08,blue:e.base0C,magenta:e.base0C,cyan:e.base0E,gray:e.base03,lightgrey:e.base01,darkgrey:e.base03}},F={\"ansi-bright-black\":\"black\",\"ansi-bright-yellow\":\"yellow\",\"ansi-yellow\":\"yellow\",\"ansi-bright-green\":\"green\",\"ansi-green\":\"green\",\"ansi-bright-cyan\":\"cyan\",\"ansi-cyan\":\"cyan\",\"ansi-bright-red\":\"red\",\"ansi-red\":\"red\",\"ansi-bright-magenta\":\"magenta\",\"ansi-magenta\":\"magenta\",\"ansi-white\":\"darkgrey\"};var w=function(e,t){for(var n=(new E.a).ansiToJson(C.encode(e),{use_classes:!0}),r=\"\",u=!1,o=0;o<n.length;++o)for(var i=n[o],a=i.content,l=i.fg,c=a.split(\"\\n\"),s=0;s<c.length;++s){u||(r+='<span data-ansi-line=\"true\">',u=!0);var f=c[s].replace(\"\\r\",\"\"),d=A(t)[F[l]];null!=d?r+='<span style=\"color: '+d+';\">'+f+\"</span>\":(null!=l&&console.log(\"Missing color mapping: \",l),r+=\"<span>\"+f+\"</span>\"),s<c.length-1&&(r+=\"</span>\",u=!1,r+=\"<br/>\")}return u&&(r+=\"</span>\",u=!1),r},x=/^\\.(\\/[^/\\n ]+)+\\.[^/\\n ]+$/,B=[/^.*\\((\\d+):(\\d+)\\)$/,/^Line (\\d+):.+$/];var k=function(e){for(var t=e.split(\"\\n\"),n=\"\",r=0,u=0,o=0;o<t.length;o++){var i=E.a.ansiToText(t[o]).trim();if(i){!n&&i.match(x)&&(n=i);for(var a=0;a<B.length;){var l=i.match(B[a]);if(l){r=parseInt(l[1],10),u=parseInt(l[2],10)+1||1;break}a++}if(n&&r)break}}return n&&r?{fileName:n,lineNumber:r,colNumber:u}:null},S={cursor:\"pointer\"};var T=function(e){var t=Object(r.useContext)(De),n=e.error,o=e.editorHandler,i=k(n),a=null!==i&&null!==o;return u.a.createElement(c,null,u.a.createElement(p,{headerText:\"Failed to compile\"}),u.a.createElement(\"div\",{onClick:a&&i?function(){return o(i)}:null,style:a?S:null},u.a.createElement(y,{main:!0,codeHTML:w(n,t)})),u.a.createElement(f,{line1:\"This error occurred during the build time and cannot be dismissed.\"}))};function _(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function N(e){return(N=\"function\"===typeof Symbol&&\"symbol\"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}function j(e){return(j=\"function\"===typeof Symbol&&\"symbol\"===N(Symbol.iterator)?function(e){return N(e)}:function(e){return e&&\"function\"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":N(e)})(e)}function R(e,t){return!t||\"object\"!==j(t)&&\"function\"!==typeof t?function(e){if(void 0===e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){if(\"function\"!==typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function\");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}var q=function(e){return{color:e.closeColor,lineHeight:\"1rem\",fontSize:\"1.5rem\",padding:\"1rem\",cursor:\"pointer\",position:\"absolute\",right:0,top:0}};var U=function(e){var t=e.close,n=Object(r.useContext)(De);return u.a.createElement(\"span\",{title:\"Click or press Escape to dismiss.\",onClick:t,style:q(n)},\"\xD7\")},z={marginBottom:\"0.5rem\"},H={marginRight:\"1em\"},V={border:\"none\",borderRadius:\"4px\",padding:\"3px 6px\",cursor:\"pointer\"},W=function(e){return g({},V,{backgroundColor:e.navBackground,color:e.navArrow,borderTopRightRadius:\"0px\",borderBottomRightRadius:\"0px\",marginRight:\"1px\"})},$=function(e){return g({},V,{backgroundColor:e.navBackground,color:e.navArrow,borderTopLeftRadius:\"0px\",borderBottomLeftRadius:\"0px\"})};var G=function(e){var t=Object(r.useContext)(De),n=e.currentError,o=e.totalErrors,i=e.previous,a=e.next;return u.a.createElement(\"div\",{style:z},u.a.createElement(\"span\",{style:H},u.a.createElement(\"button\",{onClick:i,style:W(t)},\"\u2190\"),u.a.createElement(\"button\",{onClick:a,style:$(t)},\"\u2192\")),\"\".concat(n,\" of \").concat(o,\" errors on the page\"))};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e)){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(u)throw o}}return n}}(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}()}function K(e,t){for(;null!=t&&\"br\"!==t.tagName.toLowerCase();)t=t.nextElementSibling;null!=t&&e.removeChild(t)}var Y=n(87);var J=function(e){var t=Object(r.useContext)(De),n=e.lines,o=e.lineNum,i=e.columnNum,a=e.contextSize,l=e.main,c=[],s=1/0;n.forEach((function(e){var t=e.content,n=t.match(/^\\s*/);\"\"!==t&&(s=n&&n[0]?Math.min(s,n[0].length):0)})),n.forEach((function(e){var t=e.content,n=e.lineNumber;isFinite(s)&&(t=t.substring(s)),c[n-1]=t}));var f=Object(Y.codeFrameColumns)(c.join(\"\\n\"),{start:{line:o,column:null==i?0:i-(isFinite(s)?s:0)}},{forceColor:!0,linesAbove:a,linesBelow:a}),d=w(f,t),p=document.createElement(\"code\");p.innerHTML=d,function(e){for(var t=e.childNodes,n=0;n<t.length;++n){var r=t[n];if(\"span\"===r.tagName.toLowerCase()){var u=r.innerText;if(null!=u)\"|^\"===u.replace(/\\s/g,\"\")&&(r.style.position=\"absolute\",K(e,r))}}}(p);var h=p.childNodes;e:for(var m=0;m<h.length;++m)for(var g=h[m].childNodes,v=0;v<g.length;++v){var D=g[v].innerText;if(null!=D&&-1!==D.indexOf(\" \"+o+\" |\"))break e}return u.a.createElement(y,{main:l,codeHTML:p.innerHTML})};function X(e,t,n,r,u,o,i){var a;if(!i&&e&&\"number\"===typeof t){var l=/^[/|\\\\].*?[/|\\\\]((src|node_modules)[/|\\\\].*)/.exec(e);a=l&&l[1]?l[1]:e,a+=\":\"+t,n&&(a+=\":\"+n)}else r&&\"number\"===typeof u?(a=r+\":\"+u,o&&(a+=\":\"+o)):a=\"unknown\";return a.replace(\"webpack://\",\".\")}var Z=function(e){return{fontSize:\"0.9em\",marginBottom:\"0.9em\"}},ee=function(e){return{textDecoration:\"none\",color:e.anchorColor,cursor:\"pointer\"}},te=function(e){return{cursor:\"pointer\"}},ne=function(e){return{marginBottom:\"1.5em\",color:e.toggleColor,cursor:\"pointer\",border:\"none\",display:\"block\",width:\"100%\",textAlign:\"left\",background:e.toggleBackground,fontFamily:\"Consolas, Menlo, monospace\",fontSize:\"1em\",padding:\"0px\",lineHeight:\"1.5\"}};var re=function(e){var t=Object(r.useContext)(De),n=Q(Object(r.useState)(!1),2),o=n[0],i=n[1],a=function(){var t=e.frame,n=t._originalFileName,r=t._originalLineNumber;return n?-1!==n.trim().indexOf(\" \")?null:{fileName:n,lineNumber:r||1}:null},l=function(){var t=a();t&&e.editorHandler(t)},c=e.frame,s=e.contextSize,f=e.critical,d=e.showCode,p=c.fileName,h=c.lineNumber,m=c.columnNumber,g=c._scriptCode,v=c._originalFileName,D=c._originalLineNumber,y=c._originalColumnNumber,b=c._originalScriptCode,E=c.getFunctionName(),C=X(v,D,y,p,h,m,o),A=null;d&&(o&&g&&0!==g.length&&null!=h?A={lines:g,lineNum:h,columnNum:m,contextSize:s,main:f}:!o&&b&&0!==b.length&&null!=D&&(A={lines:b,lineNum:D,columnNum:y,contextSize:s,main:f}));var F=null!==a()&&null!==e.editorHandler;return u.a.createElement(\"div\",null,u.a.createElement(\"div\",null,E),u.a.createElement(\"div\",{style:Z(t)},u.a.createElement(\"span\",{style:F?ee(t):null,onClick:F?l:null,onKeyDown:F?function(e){\"Enter\"===e.key&&l()}:null,tabIndex:F?\"0\":null},C)),A&&u.a.createElement(\"span\",null,u.a.createElement(\"span\",{onClick:F?l:null,style:F?te(t):null},u.a.createElement(J,A)),u.a.createElement(\"button\",{style:ne(t),onClick:function(){i(!o)}},\"View \"+(o?\"source\":\"compiled\"))))},ue={cursor:\"pointer\",border:\"none\",display:\"block\",width:\"100%\",textAlign:\"left\",fontFamily:\"Consolas, Menlo, monospace\",fontSize:\"1em\",padding:\"0px\",lineHeight:\"1.5\"},oe=function(e){return g({},ue,{color:e.color,background:e.background,marginBottom:\"1.5em\"})},ie=function(e){return g({},ue,{color:e.color,background:e.background,marginBottom:\"0.6em\"})};var ae=function(e){var t=Object(r.useContext)(De),n=Q(Object(r.useState)(!0),2),o=n[0],i=n[1],a=function(){i(!o)},l=e.children.length;return u.a.createElement(\"div\",null,u.a.createElement(\"button\",{onClick:a,style:o?oe(t):ie(t)},(o?\"\u25B6\":\"\u25BC\")+\" \".concat(l,\" stack frames were \")+(o?\"collapsed.\":\"expanded.\")),u.a.createElement(\"div\",{style:{display:o?\"none\":\"block\"}},e.children,u.a.createElement(\"button\",{onClick:a,style:ie(t)},\"\u25B2 \".concat(l,\" stack frames were expanded.\"))))};function le(e){switch(e){case\"EvalError\":case\"InternalError\":case\"RangeError\":case\"ReferenceError\":case\"SyntaxError\":case\"TypeError\":case\"URIError\":return!0;default:return!1}}var ce={fontSize:\"1em\",flex:\"0 1 auto\",minHeight:\"0px\",overflow:\"auto\"},se=function(e){function t(){return _(this,t),R(this,M(t).apply(this,arguments))}return L(t,e),O(t,[{key:\"renderFrames\",value:function(){var e=this.props,t=e.stackFrames,n=e.errorName,r=e.contextSize,o=e.editorHandler,i=[],a=!1,l=[],c=0;return t.forEach((function(e,s){var f=e.fileName,d=function(e,t){return null==e||\"\"===e||-1!==e.indexOf(\"/~/\")||-1!==e.indexOf(\"/node_modules/\")||-1!==e.trim().indexOf(\" \")||null==t||\"\"===t}(e._originalFileName,f),p=!le(n),h=d&&(p||a);d||(a=!0);var m=u.a.createElement(re,{key:\"frame-\"+s,frame:e,contextSize:r,critical:0===s,showCode:!h,editorHandler:o}),g=s===t.length-1;h&&l.push(m),h&&!g||(1===l.length?i.push(l[0]):l.length>1&&(c++,i.push(u.a.createElement(ae,{key:\"bundle-\"+c},l))),l=[]),h||i.push(m)})),i}},{key:\"render\",value:function(){return u.a.createElement(\"div\",{style:ce},this.renderFrames())}}]),t}(r.Component),fe={display:\"flex\",flexDirection:\"column\"};var de=function(e){var t=e.errorRecord,n=e.editorHandler,r=t.error,o=t.unhandledRejection,i=t.contextSize,a=t.stackFrames,l=o?\"Unhandled Rejection (\"+r.name+\")\":r.name,c=r.message,s=c.match(/^\\w*:/)||!l?c:l+\": \"+c;return s=s.replace(/^Invariant Violation:\\s*/,\"\").replace(/^Warning:\\s*/,\"\").replace(\" Check the render method\",\"\\n\\nCheck the render method\").replace(\" Check your code at\",\"\\n\\nCheck your code at\"),u.a.createElement(\"div\",{style:fe},u.a.createElement(p,{headerText:s}),u.a.createElement(se,{stackFrames:a,errorName:l,contextSize:i,editorHandler:n}))},pe=function(e){function t(){var e,n;_(this,t);for(var r=arguments.length,u=new Array(r),o=0;o<r;o++)u[o]=arguments[o];return(n=R(this,(e=M(t)).call.apply(e,[this].concat(u)))).state={currentIndex:0},n.previous=function(){n.setState((function(e,t){return{currentIndex:e.currentIndex>0?e.currentIndex-1:t.errorRecords.length-1}}))},n.next=function(){n.setState((function(e,t){return{currentIndex:e.currentIndex<t.errorRecords.length-1?e.currentIndex+1:0}}))},n.shortcutHandler=function(e){\"Escape\"===e?n.props.close():\"ArrowLeft\"===e?n.previous():\"ArrowRight\"===e&&n.next()},n}return L(t,e),O(t,[{key:\"render\",value:function(){var e=this.props,t=e.errorRecords,n=e.close,r=t.length;return u.a.createElement(c,{shortcutHandler:this.shortcutHandler},u.a.createElement(U,{close:n}),r>1&&u.a.createElement(G,{currentError:this.state.currentIndex+1,totalErrors:r,previous:this.previous,next:this.next}),u.a.createElement(de,{errorRecord:t[this.state.currentIndex],editorHandler:this.props.editorHandler}),u.a.createElement(f,{line1:\"This screen is visible only in development. It will not appear if the app crashes in production.\",line2:\"Open your browser\u2019s developer console to further inspect this error.\"}))}}]),t}(r.PureComponent),he={background:\"white\",color:\"black\",headerColor:\"#ce1126\",primaryPreBackground:\"rgba(206, 17, 38, 0.05)\",primaryPreColor:\"inherit\",secondaryPreBackground:\"rgba(251, 245, 180, 0.3)\",secondaryPreColor:\"inherit\",footer:\"#878e91\",anchorColor:\"#878e91\",toggleBackground:\"transparent\",toggleColor:\"#878e91\",closeColor:\"#293238\",navBackground:\"rgba(206, 17, 38, 0.05)\",navArrow:\"#ce1126\",base01:\"#f5f5f5\",base03:\"#6e6e6e\",base05:\"#333333\",base08:\"#881280\",base0B:\"#1155cc\",base0C:\"#994500\",base0E:\"#c80000\"},me={background:\"#353535\",color:\"white\",headerColor:\"#e83b46\",primaryPreBackground:\"rgba(206, 17, 38, 0.1)\",primaryPreColor:\"#fccfcf\",secondaryPreBackground:\"rgba(251, 245, 180, 0.1)\",secondaryPreColor:\"#fbf5b4\",footer:\"#878e91\",anchorColor:\"#878e91\",toggleBackground:\"transparent\",toggleColor:\"#878e91\",closeColor:\"#ffffff\",navBackground:\"rgba(206, 17, 38, 0.2)\",navArrow:\"#ce1126\",base01:\"#282a2e\",base03:\"#969896\",base05:\"#c5c8c6\",base08:\"#cc6666\",base0B:\"#b5bd68\",base0C:\"#8abeb7\",base0E:\"#b294bb\"};n.d(t,\"ThemeContext\",(function(){return De}));var ge=null,ve=window.matchMedia&&window.matchMedia(\"(prefers-color-scheme: dark)\").matches?me:he,De=Object(r.createContext)();window.updateContent=function(e){var t,n,r,o,a,l=(n=(t=e).currentBuildError,r=t.currentRuntimeErrorRecords,o=t.dismissRuntimeErrors,a=t.editorHandler,n?u.a.createElement(De.Provider,{value:ve},u.a.createElement(T,{error:n,editorHandler:a})):r.length>0?u.a.createElement(De.Provider,{value:ve},u.a.createElement(pe,{errorRecords:r,close:o,editorHandler:a})):null);return null===l?(i.a.unmountComponentAtNode(ge),!1):(i.a.render(l,ge),!0)},document.body.style.margin=\"0\",document.body.style[\"max-width\"]=\"100vw\",function(e,t){for(var n in e.setAttribute(\"style\",\"\"),t)t.hasOwnProperty(n)&&(e.style[n]=t[n])}(ge=document.createElement(\"div\"),{width:\"100%\",height:\"100%\",\"box-sizing\":\"border-box\",\"text-align\":\"center\",\"background-color\":ve.background}),document.body.appendChild(ge),window.parent.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady()}]);";
  }, function (e, t, n) {
    var r = function (e) {
      "use strict";

      var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          u = "function" == typeof Symbol ? Symbol : {},
          o = u.iterator || "@@iterator",
          i = u.asyncIterator || "@@asyncIterator",
          a = u.toStringTag || "@@toStringTag";

      function l(e, t, n, r) {
        var u = t && t.prototype instanceof g ? t : g,
            o = Object.create(u.prototype),
            i = new k(r || []);
        return o._invoke = function (e, t, n) {
          var r = s;
          return function (u, o) {
            if (r === p) throw new Error("Generator is already running");

            if (r === d) {
              if ("throw" === u) throw o;
              return S();
            }

            for (n.method = u, n.arg = o;;) {
              var i = n.delegate;

              if (i) {
                var a = w(i, n);

                if (a) {
                  if (a === h) continue;
                  return a;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (r === s) throw r = d, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var l = c(e, t, n);

              if ("normal" === l.type) {
                if (r = n.done ? d : f, l.arg === h) continue;
                return {
                  value: l.arg,
                  done: n.done
                };
              }

              "throw" === l.type && (r = d, n.method = "throw", n.arg = l.arg);
            }
          };
        }(e, n, i), o;
      }

      function c(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }

      e.wrap = l;
      var s = "suspendedStart",
          f = "suspendedYield",
          p = "executing",
          d = "completed",
          h = {};

      function g() {}

      function m() {}

      function v() {}

      var y = {};

      y[o] = function () {
        return this;
      };

      var D = Object.getPrototypeOf,
          b = D && D(D(B([])));
      b && b !== n && r.call(b, o) && (y = b);
      var E = v.prototype = g.prototype = Object.create(y);

      function C(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }

      function A(e) {
        var t;

        this._invoke = function (n, u) {
          function o() {
            return new Promise(function (t, o) {
              !function t(n, u, o, i) {
                var a = c(e[n], e, u);

                if ("throw" !== a.type) {
                  var l = a.arg,
                      s = l.value;
                  return s && "object" == _typeof(s) && r.call(s, "__await") ? Promise.resolve(s.__await).then(function (e) {
                    t("next", e, o, i);
                  }, function (e) {
                    t("throw", e, o, i);
                  }) : Promise.resolve(s).then(function (e) {
                    l.value = e, o(l);
                  }, function (e) {
                    return t("throw", e, o, i);
                  });
                }

                i(a.arg);
              }(n, u, t, o);
            });
          }

          return t = t ? t.then(o, o) : o();
        };
      }

      function w(e, n) {
        var r = e.iterator[n.method];

        if (r === t) {
          if (n.delegate = null, "throw" === n.method) {
            if (e.iterator.return && (n.method = "return", n.arg = t, w(e, n), "throw" === n.method)) return h;
            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return h;
        }

        var u = c(r, e.iterator, n.arg);
        if ("throw" === u.type) return n.method = "throw", n.arg = u.arg, n.delegate = null, h;
        var o = u.arg;
        return o ? o.done ? (n[e.resultName] = o.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, h) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, h);
      }

      function F(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }

      function x(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }

      function k(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(F, this), this.reset(!0);
      }

      function B(e) {
        if (e) {
          var n = e[o];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;

          if (!isNaN(e.length)) {
            var u = -1,
                i = function n() {
              for (; ++u < e.length;) {
                if (r.call(e, u)) return n.value = e[u], n.done = !1, n;
              }

              return n.value = t, n.done = !0, n;
            };

            return i.next = i;
          }
        }

        return {
          next: S
        };
      }

      function S() {
        return {
          value: t,
          done: !0
        };
      }

      return m.prototype = E.constructor = v, v.constructor = m, v[a] = m.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(E), e;
      }, e.awrap = function (e) {
        return {
          __await: e
        };
      }, C(A.prototype), A.prototype[i] = function () {
        return this;
      }, e.AsyncIterator = A, e.async = function (t, n, r, u) {
        var o = new A(l(t, n, r, u));
        return e.isGeneratorFunction(n) ? o : o.next().then(function (e) {
          return e.done ? e.value : o.next();
        });
      }, C(E), E[a] = "Generator", E[o] = function () {
        return this;
      }, E.toString = function () {
        return "[object Generator]";
      }, e.keys = function (e) {
        var t = [];

        for (var n in e) {
          t.push(n);
        }

        return t.reverse(), function n() {
          for (; t.length;) {
            var r = t.pop();
            if (r in e) return n.value = r, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, e.values = B, k.prototype = {
        constructor: k,
        reset: function reset(e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(x), !e) for (var n in this) {
            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
          }
        },
        stop: function stop() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e) {
          if (this.done) throw e;
          var n = this;

          function u(r, u) {
            return a.type = "throw", a.arg = e, n.next = r, u && (n.method = "next", n.arg = t), !!u;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
                a = i.completion;
            if ("root" === i.tryLoc) return u("end");

            if (i.tryLoc <= this.prev) {
              var l = r.call(i, "catchLoc"),
                  c = r.call(i, "finallyLoc");

              if (l && c) {
                if (this.prev < i.catchLoc) return u(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return u(i.finallyLoc);
              } else if (l) {
                if (this.prev < i.catchLoc) return u(i.catchLoc, !0);
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return u(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var u = this.tryEntries[n];

            if (u.tryLoc <= this.prev && r.call(u, "finallyLoc") && this.prev < u.finallyLoc) {
              var o = u;
              break;
            }
          }

          o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
          var i = o ? o.completion : {};
          return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(i);
        },
        complete: function complete(e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h;
        },
        finish: function finish(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), h;
          }
        },
        catch: function _catch(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];

            if (n.tryLoc === e) {
              var r = n.completion;

              if ("throw" === r.type) {
                var u = r.arg;
                x(n);
              }

              return u;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, n, r) {
          return this.delegate = {
            iterator: B(e),
            resultName: n,
            nextLoc: r
          }, "next" === this.method && (this.arg = t), h;
        }
      }, e;
    }(e.exports);

    try {
      regeneratorRuntime = r;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  }, function (e, t) {
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    t.encode = function (e) {
      if (0 <= e && e < n.length) return n[e];
      throw new TypeError("Must be between 0 and 63: " + e);
    }, t.decode = function (e) {
      return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
    };
  }, function (e, t, n) {
    var r = n(1);

    function u() {
      this._array = [], this._sorted = !0, this._last = {
        generatedLine: -1,
        generatedColumn: 0
      };
    }

    u.prototype.unsortedForEach = function (e, t) {
      this._array.forEach(e, t);
    }, u.prototype.add = function (e) {
      var t, n, u, o, i, a;
      t = this._last, n = e, u = t.generatedLine, o = n.generatedLine, i = t.generatedColumn, a = n.generatedColumn, o > u || o == u && a >= i || r.compareByGeneratedPositionsInflated(t, n) <= 0 ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e));
    }, u.prototype.toArray = function () {
      return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
    }, t.MappingList = u;
  }, function (e, t, n) {
    var r = n(1),
        u = n(13),
        o = n(6).ArraySet,
        i = n(5),
        a = n(14).quickSort;

    function l(e) {
      var t = e;
      return "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ""))), null != t.sections ? new f(t) : new c(t);
    }

    function c(e) {
      var t = e;
      "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
      var n = r.getArg(t, "version"),
          u = r.getArg(t, "sources"),
          i = r.getArg(t, "names", []),
          a = r.getArg(t, "sourceRoot", null),
          l = r.getArg(t, "sourcesContent", null),
          c = r.getArg(t, "mappings"),
          s = r.getArg(t, "file", null);
      if (n != this._version) throw new Error("Unsupported version: " + n);
      u = u.map(String).map(r.normalize).map(function (e) {
        return a && r.isAbsolute(a) && r.isAbsolute(e) ? r.relative(a, e) : e;
      }), this._names = o.fromArray(i.map(String), !0), this._sources = o.fromArray(u, !0), this.sourceRoot = a, this.sourcesContent = l, this._mappings = c, this.file = s;
    }

    function s() {
      this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
    }

    function f(e) {
      var t = e;
      "string" == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, "")));
      var n = r.getArg(t, "version"),
          u = r.getArg(t, "sections");
      if (n != this._version) throw new Error("Unsupported version: " + n);
      this._sources = new o(), this._names = new o();
      var i = {
        line: -1,
        column: 0
      };
      this._sections = u.map(function (e) {
        if (e.url) throw new Error("Support for url field in sections not implemented.");
        var t = r.getArg(e, "offset"),
            n = r.getArg(t, "line"),
            u = r.getArg(t, "column");
        if (n < i.line || n === i.line && u < i.column) throw new Error("Section offsets must be ordered and non-overlapping.");
        return i = t, {
          generatedOffset: {
            generatedLine: n + 1,
            generatedColumn: u + 1
          },
          consumer: new l(r.getArg(e, "map"))
        };
      });
    }

    l.fromSourceMap = function (e) {
      return c.fromSourceMap(e);
    }, l.prototype._version = 3, l.prototype.__generatedMappings = null, Object.defineProperty(l.prototype, "_generatedMappings", {
      get: function get() {
        return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
      }
    }), l.prototype.__originalMappings = null, Object.defineProperty(l.prototype, "_originalMappings", {
      get: function get() {
        return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
      }
    }), l.prototype._charIsMappingSeparator = function (e, t) {
      var n = e.charAt(t);
      return ";" === n || "," === n;
    }, l.prototype._parseMappings = function (e, t) {
      throw new Error("Subclasses must implement _parseMappings");
    }, l.GENERATED_ORDER = 1, l.ORIGINAL_ORDER = 2, l.GREATEST_LOWER_BOUND = 1, l.LEAST_UPPER_BOUND = 2, l.prototype.eachMapping = function (e, t, n) {
      var u,
          o = t || null;

      switch (n || l.GENERATED_ORDER) {
        case l.GENERATED_ORDER:
          u = this._generatedMappings;
          break;

        case l.ORIGINAL_ORDER:
          u = this._originalMappings;
          break;

        default:
          throw new Error("Unknown order of iteration.");
      }

      var i = this.sourceRoot;
      u.map(function (e) {
        var t = null === e.source ? null : this._sources.at(e.source);
        return null != t && null != i && (t = r.join(i, t)), {
          source: t,
          generatedLine: e.generatedLine,
          generatedColumn: e.generatedColumn,
          originalLine: e.originalLine,
          originalColumn: e.originalColumn,
          name: null === e.name ? null : this._names.at(e.name)
        };
      }, this).forEach(e, o);
    }, l.prototype.allGeneratedPositionsFor = function (e) {
      var t = r.getArg(e, "line"),
          n = {
        source: r.getArg(e, "source"),
        originalLine: t,
        originalColumn: r.getArg(e, "column", 0)
      };
      if (null != this.sourceRoot && (n.source = r.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)) return [];
      n.source = this._sources.indexOf(n.source);

      var o = [],
          i = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, u.LEAST_UPPER_BOUND);

      if (i >= 0) {
        var a = this._originalMappings[i];
        if (void 0 === e.column) for (var l = a.originalLine; a && a.originalLine === l;) {
          o.push({
            line: r.getArg(a, "generatedLine", null),
            column: r.getArg(a, "generatedColumn", null),
            lastColumn: r.getArg(a, "lastGeneratedColumn", null)
          }), a = this._originalMappings[++i];
        } else for (var c = a.originalColumn; a && a.originalLine === t && a.originalColumn == c;) {
          o.push({
            line: r.getArg(a, "generatedLine", null),
            column: r.getArg(a, "generatedColumn", null),
            lastColumn: r.getArg(a, "lastGeneratedColumn", null)
          }), a = this._originalMappings[++i];
        }
      }

      return o;
    }, t.SourceMapConsumer = l, c.prototype = Object.create(l.prototype), c.prototype.consumer = l, c.fromSourceMap = function (e) {
      var t = Object.create(c.prototype),
          n = t._names = o.fromArray(e._names.toArray(), !0),
          u = t._sources = o.fromArray(e._sources.toArray(), !0);
      t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;

      for (var i = e._mappings.toArray().slice(), l = t.__generatedMappings = [], f = t.__originalMappings = [], p = 0, d = i.length; p < d; p++) {
        var h = i[p],
            g = new s();
        g.generatedLine = h.generatedLine, g.generatedColumn = h.generatedColumn, h.source && (g.source = u.indexOf(h.source), g.originalLine = h.originalLine, g.originalColumn = h.originalColumn, h.name && (g.name = n.indexOf(h.name)), f.push(g)), l.push(g);
      }

      return a(t.__originalMappings, r.compareByOriginalPositions), t;
    }, c.prototype._version = 3, Object.defineProperty(c.prototype, "sources", {
      get: function get() {
        return this._sources.toArray().map(function (e) {
          return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e;
        }, this);
      }
    }), c.prototype._parseMappings = function (e, t) {
      for (var n, u, o, l, c, f = 1, p = 0, d = 0, h = 0, g = 0, m = 0, v = e.length, y = 0, D = {}, b = {}, E = [], C = []; y < v;) {
        if (";" === e.charAt(y)) f++, y++, p = 0;else if ("," === e.charAt(y)) y++;else {
          for ((n = new s()).generatedLine = f, l = y; l < v && !this._charIsMappingSeparator(e, l); l++) {
            ;
          }

          if (o = D[u = e.slice(y, l)]) y += u.length;else {
            for (o = []; y < l;) {
              i.decode(e, y, b), c = b.value, y = b.rest, o.push(c);
            }

            if (2 === o.length) throw new Error("Found a source, but no line and column");
            if (3 === o.length) throw new Error("Found a source and line, but no column");
            D[u] = o;
          }
          n.generatedColumn = p + o[0], p = n.generatedColumn, o.length > 1 && (n.source = g + o[1], g += o[1], n.originalLine = d + o[2], d = n.originalLine, n.originalLine += 1, n.originalColumn = h + o[3], h = n.originalColumn, o.length > 4 && (n.name = m + o[4], m += o[4])), C.push(n), "number" == typeof n.originalLine && E.push(n);
        }
      }

      a(C, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = C, a(E, r.compareByOriginalPositions), this.__originalMappings = E;
    }, c.prototype._findMapping = function (e, t, n, r, o, i) {
      if (e[n] <= 0) throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
      if (e[r] < 0) throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
      return u.search(e, t, o, i);
    }, c.prototype.computeColumnSpans = function () {
      for (var e = 0; e < this._generatedMappings.length; ++e) {
        var t = this._generatedMappings[e];

        if (e + 1 < this._generatedMappings.length) {
          var n = this._generatedMappings[e + 1];

          if (t.generatedLine === n.generatedLine) {
            t.lastGeneratedColumn = n.generatedColumn - 1;
            continue;
          }
        }

        t.lastGeneratedColumn = 1 / 0;
      }
    }, c.prototype.originalPositionFor = function (e) {
      var t = {
        generatedLine: r.getArg(e, "line"),
        generatedColumn: r.getArg(e, "column")
      },
          n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));

      if (n >= 0) {
        var u = this._generatedMappings[n];

        if (u.generatedLine === t.generatedLine) {
          var o = r.getArg(u, "source", null);
          null !== o && (o = this._sources.at(o), null != this.sourceRoot && (o = r.join(this.sourceRoot, o)));
          var i = r.getArg(u, "name", null);
          return null !== i && (i = this._names.at(i)), {
            source: o,
            line: r.getArg(u, "originalLine", null),
            column: r.getArg(u, "originalColumn", null),
            name: i
          };
        }
      }

      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }, c.prototype.hasContentsOfAllSources = function () {
      return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
        return null == e;
      });
    }, c.prototype.sourceContentFor = function (e, t) {
      if (!this.sourcesContent) return null;
      if (null != this.sourceRoot && (e = r.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
      var n;

      if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
        var u = e.replace(/^file:\/\//, "");
        if ("file" == n.scheme && this._sources.has(u)) return this.sourcesContent[this._sources.indexOf(u)];
        if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) return this.sourcesContent[this._sources.indexOf("/" + e)];
      }

      if (t) return null;
      throw new Error('"' + e + '" is not in the SourceMap.');
    }, c.prototype.generatedPositionFor = function (e) {
      var t = r.getArg(e, "source");
      if (null != this.sourceRoot && (t = r.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
        line: null,
        column: null,
        lastColumn: null
      };

      var n = {
        source: t = this._sources.indexOf(t),
        originalLine: r.getArg(e, "line"),
        originalColumn: r.getArg(e, "column")
      },
          u = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", l.GREATEST_LOWER_BOUND));

      if (u >= 0) {
        var o = this._originalMappings[u];
        if (o.source === n.source) return {
          line: r.getArg(o, "generatedLine", null),
          column: r.getArg(o, "generatedColumn", null),
          lastColumn: r.getArg(o, "lastGeneratedColumn", null)
        };
      }

      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }, t.BasicSourceMapConsumer = c, f.prototype = Object.create(l.prototype), f.prototype.constructor = l, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
      get: function get() {
        for (var e = [], t = 0; t < this._sections.length; t++) {
          for (var n = 0; n < this._sections[t].consumer.sources.length; n++) {
            e.push(this._sections[t].consumer.sources[n]);
          }
        }

        return e;
      }
    }), f.prototype.originalPositionFor = function (e) {
      var t = {
        generatedLine: r.getArg(e, "line"),
        generatedColumn: r.getArg(e, "column")
      },
          n = u.search(t, this._sections, function (e, t) {
        var n = e.generatedLine - t.generatedOffset.generatedLine;
        return n || e.generatedColumn - t.generatedOffset.generatedColumn;
      }),
          o = this._sections[n];
      return o ? o.consumer.originalPositionFor({
        line: t.generatedLine - (o.generatedOffset.generatedLine - 1),
        column: t.generatedColumn - (o.generatedOffset.generatedLine === t.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
        bias: e.bias
      }) : {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }, f.prototype.hasContentsOfAllSources = function () {
      return this._sections.every(function (e) {
        return e.consumer.hasContentsOfAllSources();
      });
    }, f.prototype.sourceContentFor = function (e, t) {
      for (var n = 0; n < this._sections.length; n++) {
        var r = this._sections[n].consumer.sourceContentFor(e, !0);

        if (r) return r;
      }

      if (t) return null;
      throw new Error('"' + e + '" is not in the SourceMap.');
    }, f.prototype.generatedPositionFor = function (e) {
      for (var t = 0; t < this._sections.length; t++) {
        var n = this._sections[t];

        if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
          var u = n.consumer.generatedPositionFor(e);
          if (u) return {
            line: u.line + (n.generatedOffset.generatedLine - 1),
            column: u.column + (n.generatedOffset.generatedLine === u.line ? n.generatedOffset.generatedColumn - 1 : 0)
          };
        }
      }

      return {
        line: null,
        column: null
      };
    }, f.prototype._parseMappings = function (e, t) {
      this.__generatedMappings = [], this.__originalMappings = [];

      for (var n = 0; n < this._sections.length; n++) {
        for (var u = this._sections[n], o = u.consumer._generatedMappings, i = 0; i < o.length; i++) {
          var l = o[i],
              c = u.consumer._sources.at(l.source);

          null !== u.consumer.sourceRoot && (c = r.join(u.consumer.sourceRoot, c)), this._sources.add(c), c = this._sources.indexOf(c);

          var s = u.consumer._names.at(l.name);

          this._names.add(s), s = this._names.indexOf(s);
          var f = {
            source: c,
            generatedLine: l.generatedLine + (u.generatedOffset.generatedLine - 1),
            generatedColumn: l.generatedColumn + (u.generatedOffset.generatedLine === l.generatedLine ? u.generatedOffset.generatedColumn - 1 : 0),
            originalLine: l.originalLine,
            originalColumn: l.originalColumn,
            name: s
          };
          this.__generatedMappings.push(f), "number" == typeof f.originalLine && this.__originalMappings.push(f);
        }
      }

      a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), a(this.__originalMappings, r.compareByOriginalPositions);
    }, t.IndexedSourceMapConsumer = f;
  }, function (e, t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function (e, n, r, u) {
      if (0 === n.length) return -1;

      var o = function e(n, r, u, o, i, a) {
        var l = Math.floor((r - n) / 2) + n,
            c = i(u, o[l], !0);
        return 0 === c ? l : c > 0 ? r - l > 1 ? e(l, r, u, o, i, a) : a == t.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : l - n > 1 ? e(n, l, u, o, i, a) : a == t.LEAST_UPPER_BOUND ? l : n < 0 ? -1 : n;
      }(-1, n.length, e, n, r, u || t.GREATEST_LOWER_BOUND);

      if (o < 0) return -1;

      for (; o - 1 >= 0 && 0 === r(n[o], n[o - 1], !0);) {
        --o;
      }

      return o;
    };
  }, function (e, t) {
    function n(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r;
    }

    function r(e, t, u, o) {
      if (u < o) {
        var i = u - 1;
        n(e, (s = u, f = o, Math.round(s + Math.random() * (f - s))), o);

        for (var a = e[o], l = u; l < o; l++) {
          t(e[l], a) <= 0 && n(e, i += 1, l);
        }

        n(e, i + 1, l);
        var c = i + 1;
        r(e, t, u, c - 1), r(e, t, c + 1, o);
      }

      var s, f;
    }

    t.quickSort = function (e, t) {
      r(e, t, 0, e.length - 1);
    };
  }, function (e, t, n) {
    var r = n(4).SourceMapGenerator,
        u = n(1),
        o = /(\r?\n)/,
        i = "$$$isSourceNode$$$";

    function a(e, t, n, r, u) {
      this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == u ? null : u, this[i] = !0, null != r && this.add(r);
    }

    a.fromStringWithSourceMap = function (e, t, n) {
      var r = new a(),
          i = e.split(o),
          l = function l() {
        return i.shift() + (i.shift() || "");
      },
          c = 1,
          s = 0,
          f = null;

      return t.eachMapping(function (e) {
        if (null !== f) {
          if (!(c < e.generatedLine)) {
            var t = (n = i[0]).substr(0, e.generatedColumn - s);
            return i[0] = n.substr(e.generatedColumn - s), s = e.generatedColumn, p(f, t), void (f = e);
          }

          p(f, l()), c++, s = 0;
        }

        for (; c < e.generatedLine;) {
          r.add(l()), c++;
        }

        if (s < e.generatedColumn) {
          var n = i[0];
          r.add(n.substr(0, e.generatedColumn)), i[0] = n.substr(e.generatedColumn), s = e.generatedColumn;
        }

        f = e;
      }, this), i.length > 0 && (f && p(f, l()), r.add(i.join(""))), t.sources.forEach(function (e) {
        var o = t.sourceContentFor(e);
        null != o && (null != n && (e = u.join(n, e)), r.setSourceContent(e, o));
      }), r;

      function p(e, t) {
        if (null === e || void 0 === e.source) r.add(t);else {
          var o = n ? u.join(n, e.source) : e.source;
          r.add(new a(e.originalLine, e.originalColumn, o, t, e.name));
        }
      }
    }, a.prototype.add = function (e) {
      if (Array.isArray(e)) e.forEach(function (e) {
        this.add(e);
      }, this);else {
        if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
        e && this.children.push(e);
      }
      return this;
    }, a.prototype.prepend = function (e) {
      if (Array.isArray(e)) for (var t = e.length - 1; t >= 0; t--) {
        this.prepend(e[t]);
      } else {
        if (!e[i] && "string" != typeof e) throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
        this.children.unshift(e);
      }
      return this;
    }, a.prototype.walk = function (e) {
      for (var t, n = 0, r = this.children.length; n < r; n++) {
        (t = this.children[n])[i] ? t.walk(e) : "" !== t && e(t, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }, a.prototype.join = function (e) {
      var t,
          n,
          r = this.children.length;

      if (r > 0) {
        for (t = [], n = 0; n < r - 1; n++) {
          t.push(this.children[n]), t.push(e);
        }

        t.push(this.children[n]), this.children = t;
      }

      return this;
    }, a.prototype.replaceRight = function (e, t) {
      var n = this.children[this.children.length - 1];
      return n[i] ? n.replaceRight(e, t) : "string" == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push("".replace(e, t)), this;
    }, a.prototype.setSourceContent = function (e, t) {
      this.sourceContents[u.toSetString(e)] = t;
    }, a.prototype.walkSourceContents = function (e) {
      for (var t = 0, n = this.children.length; t < n; t++) {
        this.children[t][i] && this.children[t].walkSourceContents(e);
      }

      var r = Object.keys(this.sourceContents);

      for (t = 0, n = r.length; t < n; t++) {
        e(u.fromSetString(r[t]), this.sourceContents[r[t]]);
      }
    }, a.prototype.toString = function () {
      var e = "";
      return this.walk(function (t) {
        e += t;
      }), e;
    }, a.prototype.toStringWithSourceMap = function (e) {
      var t = {
        code: "",
        line: 1,
        column: 0
      },
          n = new r(e),
          u = !1,
          o = null,
          i = null,
          a = null,
          l = null;
      return this.walk(function (e, r) {
        t.code += e, null !== r.source && null !== r.line && null !== r.column ? (o === r.source && i === r.line && a === r.column && l === r.name || n.addMapping({
          source: r.source,
          original: {
            line: r.line,
            column: r.column
          },
          generated: {
            line: t.line,
            column: t.column
          },
          name: r.name
        }), o = r.source, i = r.line, a = r.column, l = r.name, u = !0) : u && (n.addMapping({
          generated: {
            line: t.line,
            column: t.column
          }
        }), o = null, u = !1);

        for (var c = 0, s = e.length; c < s; c++) {
          10 === e.charCodeAt(c) ? (t.line++, t.column = 0, c + 1 === s ? (o = null, u = !1) : u && n.addMapping({
            source: r.source,
            original: {
              line: r.line,
              column: r.column
            },
            generated: {
              line: t.line,
              column: t.column
            },
            name: r.name
          })) : t.column++;
        }
      }), this.walkSourceContents(function (e, t) {
        n.setSourceContent(e, t);
      }), {
        code: t.code,
        map: n
      };
    }, t.SourceNode = a;
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = null;

    function u(e, t) {
      if (t.error) {
        var n = t.error;
        n instanceof Error ? e(n) : e(new Error(n));
      }
    }

    function o(e, t) {
      null === r && (r = u.bind(void 0, t), e.addEventListener("error", r));
    }

    var i = null;

    function a(e, t) {
      if (null == t || null == t.reason) return e(new Error("Unknown"));
      var n = t.reason;
      return n instanceof Error ? e(n) : e(new Error(n));
    }

    function l(e, t) {
      null === i && (i = a.bind(void 0, t), e.addEventListener("unhandledrejection", i));
    }

    var c = !1,
        s = 10,
        f = 50;

    var p = [],
        d = function d() {
      "undefined" != typeof console && (console.reactStack = function (e) {
        return p.push(e);
      }, console.reactStackEnd = function (e) {
        return p.pop();
      });
    },
        h = function h() {
      "undefined" != typeof console && (console.reactStack = void 0, console.reactStackEnd = void 0);
    },
        g = function g(e, t) {
      if ("undefined" != typeof console) {
        var n = console[e];
        "function" == typeof n && (console[e] = function () {
          try {
            var e = arguments[0];
            "string" == typeof e && p.length > 0 && t(e, p[p.length - 1]);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }

          return n.apply(this, arguments);
        });
      }
    };

    function m(e, t) {
      return (m = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function v(e, t, n) {
      return (v = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }() ? Reflect.construct : function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var u = new (Function.bind.apply(e, r))();
        return n && m(u, n.prototype), u;
      }).apply(null, arguments);
    }

    function y(e) {
      return function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = new Array(e.length); t < e.length; t++) {
            n[t] = e[t];
          }

          return n;
        }
      }(e) || function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
      }(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    function D(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function b(e, t, n) {
      return t && D(e.prototype, t), n && D(e, n), e;
    }

    function E(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    var C = function e(t, n) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      E(this, e), this.lineNumber = t, this.content = n, this.highlight = r;
    },
        A = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
            l = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
            c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            s = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        E(this, e), t && 0 === t.indexOf("Object.") && (t = t.slice("Object.".length)), "friendlySyntaxErrorLabel" !== t && "exports.__esModule" !== t && "<anonymous>" !== t && t || (t = null), this.functionName = t, this.fileName = n, this.lineNumber = r, this.columnNumber = u, this._originalFunctionName = i, this._originalFileName = a, this._originalLineNumber = l, this._originalColumnNumber = c, this._scriptCode = o, this._originalScriptCode = s;
      }

      return b(e, [{
        key: "getFunctionName",
        value: function value() {
          return this.functionName || "(anonymous function)";
        }
      }, {
        key: "getSource",
        value: function value() {
          var e = "";
          return null != this.fileName && (e += this.fileName + ":"), null != this.lineNumber && (e += this.lineNumber + ":"), null != this.columnNumber && (e += this.columnNumber + ":"), e.slice(0, -1);
        }
      }, {
        key: "toString",
        value: function value() {
          var e = this.getFunctionName(),
              t = this.getSource();
          return "".concat(e).concat(t ? " (".concat(t, ")") : "");
        }
      }]), e;
    }(),
        w = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;

    function F(e) {
      return w.exec(e).slice(1).map(function (e) {
        var t = Number(e);
        return isNaN(t) ? e : t;
      });
    }

    var x = /^\s*(at|in)\s.+(:\d+)/,
        k = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;

    function B(e) {
      return e.filter(function (e) {
        return x.test(e) || k.test(e);
      }).map(function (e) {
        if (k.test(e)) {
          var t = !1;
          / > (eval|Function)/.test(e) && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ":$1"), t = !0);
          var n = e.split(/[@]/g),
              r = n.pop();
          return v(A, [n.join("@") || (t ? "eval" : null)].concat(y(F(r))));
        }

        -1 !== e.indexOf("(eval ") && (e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, "")), -1 !== e.indexOf("(at ") && (e = e.replace(/\(at /, "("));
        var u = e.trim().split(/\s+/g).slice(1),
            o = u.pop();
        return v(A, [u.join(" ") || null].concat(y(F(o))));
      });
    }

    function S(e) {
      if (null == e) throw new Error("You cannot pass a null object.");
      if ("string" == typeof e) return B(e.split("\n"));
      if (Array.isArray(e)) return B(e);
      if ("string" == typeof e.stack) return B(e.stack.split("\n"));
      throw new Error("The error you provided does not contain a stack trace.");
    }

    var _ = n(0),
        T = n.n(_),
        O = n(3),
        P = function () {
      function e(t) {
        E(this, e), this.__source_map = t;
      }

      return b(e, [{
        key: "getOriginalPosition",
        value: function value(e, t) {
          var n = this.__source_map.originalPositionFor({
            line: e,
            column: t
          });

          return {
            line: n.line,
            column: n.column,
            source: n.source
          };
        }
      }, {
        key: "getGeneratedPosition",
        value: function value(e, t, n) {
          var r = this.__source_map.generatedPositionFor({
            source: e,
            line: t,
            column: n
          });

          return {
            line: r.line,
            column: r.column
          };
        }
      }, {
        key: "getSource",
        value: function value(e) {
          return this.__source_map.sourceContentFor(e);
        }
      }, {
        key: "getSources",
        value: function value() {
          return this.__source_map.sources;
        }
      }]), e;
    }();

    function N(e, t) {
      for (var n = /\/\/[#@] ?sourceMappingURL=([^\s'"]+)\s*$/gm, r = null;;) {
        var u = n.exec(t);
        if (null == u) break;
        r = u;
      }

      return r && r[1] ? Promise.resolve(r[1].toString()) : Promise.reject("Cannot find a source map directive for ".concat(e, "."));
    }

    function L(e, t) {
      var n, r, u, o, i, a;
      return T.a.async(function (l) {
        for (;;) {
          switch (l.prev = l.next) {
            case 0:
              return l.next = 2, T.a.awrap(N(e, t));

            case 2:
              if (0 !== (n = l.sent).indexOf("data:")) {
                l.next = 14;
                break;
              }

              if (r = /^data:application\/json;([\w=:"-]+;)*base64,/, u = n.match(r)) {
                l.next = 8;
                break;
              }

              throw new Error("Sorry, non-base64 inline source-map encoding is not supported.");

            case 8:
              return n = n.substring(u[0].length), n = window.atob(n), n = JSON.parse(n), l.abrupt("return", new P(new O.SourceMapConsumer(n)));

            case 14:
              return o = e.lastIndexOf("/"), i = e.substring(0, o + 1) + n, l.next = 18, T.a.awrap(fetch(i).then(function (e) {
                return e.json();
              }));

            case 18:
              return a = l.sent, l.abrupt("return", new P(new O.SourceMapConsumer(a)));

            case 20:
            case "end":
              return l.stop();
          }
        }
      });
    }

    function R(e, t, n) {
      "string" == typeof n && (n = n.split("\n"));

      for (var r = [], u = Math.max(0, e - 1 - t); u <= Math.min(n.length - 1, e - 1 + t); ++u) {
        r.push(new C(u + 1, n[u], u === e - 1));
      }

      return r;
    }

    var M = n(7);

    function j(e) {
      var t,
          n,
          r,
          u = arguments;
      return T.a.async(function (o) {
        for (;;) {
          switch (o.prev = o.next) {
            case 0:
              return t = u.length > 1 && void 0 !== u[1] ? u[1] : 3, n = {}, r = [], e.forEach(function (e) {
                var t = e.fileName;
                null != t && -1 === r.indexOf(t) && r.push(t);
              }), o.next = 6, T.a.awrap(Object(M.settle)(r.map(function (e) {
                var t, r, u;
                return T.a.async(function (o) {
                  for (;;) {
                    switch (o.prev = o.next) {
                      case 0:
                        return t = 0 === e.indexOf("webpack-internal:") ? "/__get-internal-source?fileName=".concat(encodeURIComponent(e)) : e, o.next = 3, T.a.awrap(fetch(t).then(function (e) {
                          return e.text();
                        }));

                      case 3:
                        return r = o.sent, o.next = 6, T.a.awrap(L(e, r));

                      case 6:
                        u = o.sent, n[e] = {
                          fileSource: r,
                          map: u
                        };

                      case 8:
                      case "end":
                        return o.stop();
                    }
                  }
                });
              })));

            case 6:
              return o.abrupt("return", e.map(function (e) {
                var r = e.functionName,
                    u = e.fileName,
                    o = e.lineNumber,
                    i = e.columnNumber,
                    a = n[u] || {},
                    l = a.map,
                    c = a.fileSource;
                if (null == l || null == o) return e;
                var s = l.getOriginalPosition(o, i),
                    f = s.source,
                    p = s.line,
                    d = s.column,
                    h = null == f ? [] : l.getSource(f);
                return new A(r, u, o, i, R(o, t, c), r, f, p, d, R(p, t, h));
              }));

            case 7:
            case "end":
              return o.stop();
          }
        }
      });
    }

    var I = n(2),
        q = n.n(I);

    function U(e, t) {
      var n = -1,
          r = -1;

      do {
        ++n, r = t.indexOf(e, r + 1);
      } while (-1 !== r);

      return n;
    }

    function z(e, t) {
      var n,
          r,
          u,
          o,
          i = arguments;
      return T.a.async(function (a) {
        for (;;) {
          switch (a.prev = a.next) {
            case 0:
              if (n = i.length > 2 && void 0 !== i[2] ? i[2] : 3, r = "object" == _typeof(e) ? e.contents : null, u = "object" == _typeof(e) ? e.uri : e, null != r) {
                a.next = 7;
                break;
              }

              return a.next = 6, T.a.awrap(fetch(u).then(function (e) {
                return e.text();
              }));

            case 6:
              r = a.sent;

            case 7:
              return a.next = 9, T.a.awrap(L(u, r));

            case 9:
              return o = a.sent, a.abrupt("return", t.map(function (e) {
                var t = e.functionName,
                    i = e.lineNumber,
                    a = e.columnNumber;
                if (null != e._originalLineNumber) return e;
                var l = e.fileName;
                if (l && (l = q.a.normalize(l.replace(/[\\]+/g, "/"))), null == l) return e;
                var c = l,
                    s = o.getSources().map(function (e) {
                  return e.replace(/[\\]+/g, "/");
                }).filter(function (e) {
                  var t = (e = q.a.normalize(e)).lastIndexOf(c);
                  return -1 !== t && t === e.length - c.length;
                }).map(function (e) {
                  return {
                    token: e,
                    seps: U(q.a.sep, q.a.normalize(e)),
                    penalties: U("node_modules", e) + U("~", e)
                  };
                }).sort(function (e, t) {
                  var n = Math.sign(e.seps - t.seps);
                  return 0 !== n ? n : Math.sign(e.penalties - t.penalties);
                });
                if (s.length < 1 || null == i) return new A(null, null, null, null, null, t, c, i, a, null);
                var f = s[0].token,
                    p = o.getGeneratedPosition(f, i, a),
                    d = p.line,
                    h = p.column,
                    g = o.getSource(f);
                return new A(t, u, d, h || null, R(d, n, r || []), t, c, i, a, R(i, n, g));
              }));

            case 11:
            case "end":
              return a.stop();
          }
        }
      });
    }

    var V = function V(e) {
      arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          n = S(e);
      return (e.__unmap_source ? z(e.__unmap_source, n, t) : j(n, t)).then(function (e) {
        return 0 === e.map(function (e) {
          return e._originalFileName;
        }).filter(function (e) {
          return null != e && -1 === e.indexOf("node_modules");
        }).length ? null : e.filter(function (e) {
          var t = e.functionName;
          return null == t || -1 === t.indexOf("__stack_frame_overlay_proxy_console__");
        });
      });
    },
        H = function H(e) {
      return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        V(t, n, 3).then(function (r) {
          null != r && e({
            error: t,
            unhandledRejection: n,
            contextSize: 3,
            stackFrames: r
          });
        }).catch(function (e) {
          console.log("Could not get the stack frames of error:", e);
        });
      };
    };

    function $(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/static/js/bundle.js",
          n = H(e);
      return o(window, function (e) {
        return n(e, !1);
      }), l(window, function (e) {
        return n(e, !0);
      }), function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
        if (!c) try {
          s = Error.stackTraceLimit, Error.stackTraceLimit = e, c = !0;
        } catch (e) {}
      }(), d(), g("error", function (e, r) {
        var u = function (e, t) {
          for (var n, r, u = function (e) {
            return e.split("\n").filter(function (e) {
              return !e.match(/^\s*in/);
            }).join("\n");
          }(e), o = "", i = 0; i < t.length; ++i) {
            var a = t[i],
                l = a.fileName,
                c = a.lineNumber;

            if (null != l && null != c && !(l === n && "number" == typeof c && "number" == typeof r && Math.abs(c - r) < 3)) {
              n = l, r = c;
              var s = t[i].name;
              o += "in ".concat(s = s || "(anonymous function)", " (at ").concat(l, ":").concat(c, ")\n");
            }
          }

          return {
            message: u,
            stack: o
          };
        }(e, r);

        n({
          message: u.message,
          stack: u.stack,
          __unmap_source: t
        }, !1);
      }), function () {
        var e;
        !function () {
          if (c) try {
            Error.stackTraceLimit = s, c = !1;
          } catch (e) {}
        }(), e = window, null !== i && (e.removeEventListener("unhandledrejection", i), i = null), function (e) {
          null !== r && (e.removeEventListener("error", r), r = null);
        }(window), h();
      };
    }

    var W = {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      border: "none",
      "z-index": 2147483647
    };
    var G = n(8),
        Q = n.n(G);
    n.d(t, "setEditorHandler", function () {
      return re;
    }), n.d(t, "reportBuildError", function () {
      return ue;
    }), n.d(t, "reportRuntimeError", function () {
      return oe;
    }), n.d(t, "dismissBuildError", function () {
      return ie;
    }), n.d(t, "startReportingRuntimeErrors", function () {
      return ae;
    }), n.d(t, "dismissRuntimeErrors", function () {
      return ce;
    }), n.d(t, "stopReportingRuntimeErrors", function () {
      return se;
    });
    var K = null,
        Y = !1,
        J = !1,
        X = null,
        Z = null,
        ee = [],
        te = null,
        ne = null;

    function re(e) {
      X = e, K && fe();
    }

    function ue(e) {
      Z = e, fe();
    }

    function oe(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      te = t, H(le(t))(e);
    }

    function ie() {
      Z = null, fe();
    }

    function ae(e) {
      if (null !== ne) throw new Error("Already listening");
      e.launchEditorEndpoint && console.warn("Warning: `startReportingRuntimeErrors` doesn’t accept `launchEditorEndpoint` argument anymore. Use `listenToOpenInEditor` instead with your own implementation to open errors in editor "), te = e, ne = $(le(e), e.filename);
    }

    var le = function le(e) {
      return function (t) {
        try {
          "function" == typeof e.onError && e.onError.call(null);
        } finally {
          if (ee.some(function (e) {
            return e.error === t.error;
          })) return;
          ee = ee.concat([t]), fe();
        }
      };
    };

    function ce() {
      ee = [], fe();
    }

    function se() {
      if (null === ne) throw new Error("Not currently listening");
      te = null;

      try {
        ne();
      } finally {
        ne = null;
      }
    }

    function fe() {
      if (!Y) if (J) pe();else {
        Y = !0;
        var e = window.document.createElement("iframe");
        !function (e, t) {
          for (var n in e.setAttribute("style", ""), t) {
            t.hasOwnProperty(n) && (e.style[n] = t[n]);
          }
        }(e, W), e.onload = function () {
          var t = e.contentDocument;

          if (null != t && null != t.body) {
            K = e;
            var n = e.contentWindow.document.createElement("script");
            n.type = "text/javascript", n.innerHTML = Q.a, t.body.appendChild(n);
          }
        }, window.document.body.appendChild(e);
      }
    }

    function pe() {
      if (!te) throw new Error("Expected options to be injected.");
      if (!K) throw new Error("Iframe has not been created yet.");
      K.contentWindow.updateContent({
        currentBuildError: Z,
        currentRuntimeErrorRecords: ee,
        dismissRuntimeErrors: ce,
        editorHandler: X
      }) || (window.document.body.removeChild(K), K = null, J = !1);
    }

    window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ = window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__ || {}, window.__REACT_ERROR_OVERLAY_GLOBAL_HOOK__.iframeReady = function () {
      J = !0, Y = !1, pe();
    },  true && console.warn("react-error-overlay is not meant for use in production. You should ensure it is not included in your build to reduce bundle size.");
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : dtlsRole || 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId || transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId; // spec.

    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' + trackId + '\r\n';
    sdp += 'a=' + msid; // for Chrome. Legacy should no longer be required.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid; // RTX

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
} // Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times


function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;

      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }

      var isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(function (url) {
        var validTurn = url.indexOf('turn:') === 0 && url.indexOf('transport=udp') !== -1 && url.indexOf('turn:[') === -1 && !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }

        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 && url.indexOf('?transport=udp') === -1;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
} // Determines the intersection of local and remote capabilities.


function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function findCodecByPayloadType(pt, codecs) {
    pt = parseInt(pt, 10);

    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt || codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function rtxCapabilityMatches(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec && lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function (lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];

      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() && lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' && lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec, localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }

        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels

        rCodec.numChannels = Math.min(lCodec.numChannels, rCodec.numChannels); // push rCodec so we reply with offerer payload type

        commonCapabilities.codecs.push(rCodec); // determine common feedback mechanisms

        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function (fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type && lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }

          return false;
        }); // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569

        break;
      }
    }
  });
  localCapabilities.headerExtensions.forEach(function (lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];

      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  }); // FIXME: fecMechanisms

  return commonCapabilities;
} // is action=setLocalDescription with type allowed in signalingState


function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates().find(function (remoteCandidate) {
    return candidate.foundation === remoteCandidate.foundation && candidate.ip === remoteCandidate.ip && candidate.port === remoteCandidate.port && candidate.priority === remoteCandidate.priority && candidate.protocol === remoteCandidate.protocol && candidate.type === remoteCandidate.type;
  });

  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }

  return !alreadyAdded;
}

function makeError(name, description) {
  var e = new Error(description);
  e.name = name; // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names

  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function (window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack', {
      track: track
    }));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack', {
      track: track
    }));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {
      receiver: receiver
    };
    trackEvent.streams = streams;
    window.setTimeout(function () {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function RTCPeerConnection(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();

    ['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (method) {
      pc[method] = _eventTarget[method].bind(_eventTarget);
    });
    this.canTrickleIceCandidates = null;
    this.needNegotiation = false;
    this.localStreams = [];
    this.remoteStreams = [];
    this._localDescription = null;
    this._remoteDescription = null;
    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';
    config = JSON.parse(JSON.stringify(config || {}));
    this.usingBundle = config.bundlePolicy === 'max-bundle';

    if (config.rtcpMuxPolicy === 'negotiate') {
      throw makeError('NotSupportedError', 'rtcpMuxPolicy \'negotiate\' is not supported');
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;

      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;

      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
    this._iceGatherers = [];

    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config; // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.

    this.transceivers = [];
    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;
    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function get() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function get() {
      return this._remoteDescription;
    }
  }); // set up event handlers on prototype

  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function (name, event) {
    if (this._isClosed) {
      return;
    }

    this.dispatchEvent(event);

    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function () {
    var event = new Event('icegatheringstatechange');

    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function () {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function () {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function () {
    return this.remoteStreams;
  }; // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)


  RTCPeerConnection.prototype._createTransceiver = function (kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };

    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();

      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }

    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }

    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function (track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;

    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track && this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }

    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track, transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function (stream) {
    var pc = this;

    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function (track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function (track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function (event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function (track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function (sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function (t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError', 'Sender was not created by this connection.');
    }

    var stream = transceiver.stream;
    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null; // remove the stream from the set of local streams

    var localStreams = this.transceivers.map(function (t) {
      return t.stream;
    });

    if (localStreams.indexOf(stream) === -1 && this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function (stream) {
    var pc = this;
    stream.getTracks().forEach(function (track) {
      var sender = pc.getSenders().find(function (s) {
        return s.track === track;
      });

      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpSender;
    }).map(function (transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function () {
    return this.transceivers.filter(function (transceiver) {
      return !!transceiver.rtpReceiver;
    }).map(function (transceiver) {
      return transceiver.rtpReceiver;
    });
  };

  RTCPeerConnection.prototype._createIceGatherer = function (sdpMLineIndex, usingBundle) {
    var pc = this;

    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }

    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state', {
      value: 'new',
      writable: true
    });
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];

    this.transceivers[sdpMLineIndex].bufferCandidates = function (event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0; // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.

      iceGatherer.state = end ? 'completed' : 'gathering';

      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };

    iceGatherer.addEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  }; // start gathering from an RTCIceGatherer.


  RTCPeerConnection.prototype._gather = function (mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer.onlocalcandidate) {
      return;
    }

    var bufferedCandidateEvents = this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate', this.transceivers[sdpMLineIndex].bufferCandidates);

    iceGatherer.onlocalcandidate = function (evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }

      var event = new Event('icecandidate');
      event.candidate = {
        sdpMid: mid,
        sdpMLineIndex: sdpMLineIndex
      };
      var cand = evt.candidate; // Edge emits an empty object for RTCIceCandidateComplete‥

      var end = !cand || Object.keys(cand).length === 0;

      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        } // RTCIceCandidate doesn't have a component, needs to be added


        cand.component = 1; // also the usernameFragment. TODO: update SDP to take both variants.

        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate, SDPUtils.parseCandidate(serializedCandidate));
        event.candidate.candidate = serializedCandidate;

        event.candidate.toJSON = function () {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      } // update local description.


      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);

      if (!end) {
        sections[event.candidate.sdpMLineIndex] += 'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] += 'a=end-of-candidates\r\n';
      }

      pc._localDescription.sdp = SDPUtils.getDescription(pc._localDescription.sdp) + sections.join('');
      var complete = pc.transceivers.every(function (transceiver) {
        return transceiver.iceGatherer && transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';

        pc._emitGatheringStateChange();
      } // Emit candidate. Also emit null candidate when all gatherers are
      // complete.


      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }

      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));

        pc.iceGatheringState = 'complete';

        pc._emitGatheringStateChange();
      }
    }; // emit already gathered candidates.


    window.setTimeout(function () {
      bufferedCandidateEvents.forEach(function (e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  }; // Create ICE transport and DTLS transport.


  RTCPeerConnection.prototype._createIceAndDtlsTransports = function () {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);

    iceTransport.onicestatechange = function () {
      pc._updateIceConnectionState();

      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);

    dtlsTransport.ondtlsstatechange = function () {
      pc._updateConnectionState();
    };

    dtlsTransport.onerror = function () {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state', {
        value: 'failed',
        writable: true
      });

      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  }; // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.


  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function (sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;

    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }

    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;

    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }

    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;

    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  }; // Start the RTP Sender and Receiver for a transceiver.


  RTCPeerConnection.prototype._transceive = function (transceiver, send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);

    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }

      transceiver.rtpSender.send(params);
    }

    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video' && transceiver.recvEncodingParameters && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function (p) {
          delete p.rtx;
        });
      }

      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }

      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };

      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }

      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }

      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set local ' + description.type + ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;

    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });
      pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
      sections.forEach(function (mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities; // treat bundle-only as not-rejected.

        var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);

          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);

            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters, isIceLite ? 'controlling' : 'controlled');
            }

            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          } // Calculate intersection of capabilities.


          var params = getCommonCapabilities(localCapabilities, remoteCapabilities); // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.

          pc._transceive(transceiver, params.codecs.length > 0, false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function (description) {
    var pc = this; // Note: pranswer is not supported.

    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError', 'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription', description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not set remote ' + description.type + ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function (stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart, 'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart, 'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart, 'a=ice-options:')[0];

    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ').indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function (mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection); // treat bundle-only as not-rejected.

      var rejected = SDPUtils.isRejected(mediaSection) && SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];
      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);
      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier(); // Reject datachannels which are not implemented yet.

      if (rejected || kind === 'application' && (protocol === 'DTLS/SCTP' || protocol === 'UDP/DTLS/SCTP')) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] && pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;
      var track; // FIXME: ensure the mediaSection has rtcp-mux set.

      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;

      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection, sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection, sessionpart);
        remoteDtlsParameters.role = 'client';
      }

      recvEncodingParameters = SDPUtils.parseRtpEncodingParameters(mediaSection);
      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
      var isComplete = SDPUtils.matchPrefix(mediaSection, 'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:').map(function (cand) {
        return SDPUtils.parseCandidate(cand);
      }).filter(function (cand) {
        return cand.component === 1;
      }); // Check if we can use BUNDLE and dispose transports.

      if ((description.type === 'offer' || description.type === 'answer') && !rejected && usingBundle && sdpMLineIndex > 0 && pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);

        pc.transceivers[sdpMLineIndex].iceGatherer = pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport = pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport = pc.transceivers[0].dtlsTransport;

        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(pc.transceivers[0].dtlsTransport);
        }

        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(pc.transceivers[0].dtlsTransport);
        }
      }

      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] || pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js

        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
            return codec.name !== 'rtx';
          });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }]; // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams

        var isNewTrack = false;

        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver || new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track; // FIXME: does not work with Plan B.

            if (remoteMsid && remoteMsid.stream === '-') {// no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function get() {
                    return remoteMsid.stream;
                  }
                });
              }

              Object.defineProperty(track, 'id', {
                get: function get() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }

              stream = streams.default;
            }

            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }

            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function (s) {
            var nativeTrack = s.getTracks().find(function (t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });

            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters; // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.

        pc._transceive(pc.transceivers[sdpMLineIndex], false, isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;
        pc.transceivers[sdpMLineIndex].recvEncodingParameters = recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities = remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) && (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function (candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          }

          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        } // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.


        var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
        var hasRtx = commonCapabilities.codecs.filter(function (c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;

        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver, direction === 'sendrecv' || direction === 'recvonly', direction === 'sendrecv' || direction === 'sendonly'); // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams


        if (rtpReceiver && (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;

          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }

            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };

    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    Object.keys(streams).forEach(function (sid) {
      var stream = streams[sid];

      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function () {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function (item) {
          var track = item[0];
          var receiver = item[1];

          if (stream.id !== item[2].id) {
            return;
          }

          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function (item) {
      if (item[2]) {
        return;
      }

      fireAddTrack(pc, item[0], item[1], []);
    }); // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.

    window.setTimeout(function () {
      if (!(pc && pc.transceivers)) {
        return;
      }

      pc.transceivers.forEach(function (transceiver) {
        if (transceiver.iceTransport && transceiver.iceTransport.state === 'new' && transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' + 'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);
    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function () {
    this.transceivers.forEach(function (transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }

      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }

      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }

      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    }); // FIXME: clean up tracks, local streams, remote streams, etc

    this._isClosed = true;

    this._updateSignalingState('closed');
  }; // Update the signaling state.


  RTCPeerConnection.prototype._updateSignalingState = function (newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');

    this._dispatchEvent('signalingstatechange', event);
  }; // Determine whether to fire the negotiationneeded event.


  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function () {
    var pc = this;

    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }

    this.needNegotiation = true;
    window.setTimeout(function () {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');

        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  }; // Update the ice connection state.


  RTCPeerConnection.prototype._updateIceConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');

      this._dispatchEvent('iceconnectionstatechange', event);
    }
  }; // Update the connection state.


  RTCPeerConnection.prototype._updateConnectionState = function () {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function (transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    }); // ICETransport.completed and connected are the same for this purpose.

    states.connected += states.completed;
    newState = 'new';

    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');

      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function (t) {
      return t.kind === 'video';
    }).length; // Determine number of audio and video tracks we need to send/recv.

    var offerOptions = arguments[0];

    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError('Legacy mandatory/optional constraints not supported.');
      }

      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }

      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function (transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;

        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;

        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    }); // Create M-lines for recvonly streams.

    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');

        numAudioTracks--;
      }

      if (numVideoTracks > 0) {
        pc._createTransceiver('video');

        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex, pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind); // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js

      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(function (codec) {
          return codec.name !== 'rtx';
        });
      }

      localCapabilities.codecs.forEach(function (codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' && codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        } // for subsequent offers, we might have to re-use the payload
        // type of the last offer.


        if (transceiver.remoteCapabilities && transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function (remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() && codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function (hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities && transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function (rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      }); // generate an ssrc now, to be used later in rtpSender.send

      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];

      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' && !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    }); // always offer BUNDLE and dispose on return if not supported.

    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities, 'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' && (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function (cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function () {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' || pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError', 'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId, pc._sdpSessionVersion++);

    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function (t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }

    sdp += 'a=ice-options:trickle\r\n';
    var mediaSectionsInOffer = SDPUtils.getMediaSections(pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function (transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }

      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') {
            // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol + ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' + 'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' + 'a=rtpmap:120 VP8/90000\r\n';
        }

        sdp += 'c=IN IP4 0.0.0.0\r\n' + 'a=inactive\r\n' + 'a=mid:' + transceiver.mid + '\r\n';
        return;
      } // FIXME: look at direction.


      if (transceiver.stream) {
        var localTrack;

        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }

        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' && !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      } // Calculate intersection of capabilities.


      var commonCapabilities = getCommonCapabilities(transceiver.localCapabilities, transceiver.remoteCapabilities);
      var hasRtx = commonCapabilities.codecs.filter(function (c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;

      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities, 'answer', transceiver.stream, pc._dtlsRole);

      if (transceiver.rtcpParameters && transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });
    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function (candidate) {
    var pc = this;
    var sections;

    if (candidate && !(candidate.sdpMLineIndex !== undefined || candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    } // TODO: needs to go into ops queue.


    return new Promise(function (resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError', 'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }

          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');

          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;

        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }

        var transceiver = pc.transceivers[sdpMLineIndex];

        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }

          var cand = Object.keys(candidate.candidate).length > 0 ? SDPUtils.parseCandidate(candidate.candidate) : {}; // Ignore Chrome's invalid candidates since Edge does not like them.

          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          } // Ignore RTCP candidates, we assume RTCP-MUX.


          if (cand.component && cand.component !== 1) {
            return resolve();
          } // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.


          if (sdpMLineIndex === 0 || sdpMLineIndex > 0 && transceiver.iceTransport !== pc.transceivers[0].iceTransport) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError', 'Can not add ICE candidate'));
            }
          } // update the remoteDescription.


          var candidateString = candidate.candidate.trim();

          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }

          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' + (cand.type ? candidateString : 'end-of-candidates') + '\r\n';
          pc._remoteDescription.sdp = SDPUtils.getDescription(pc._remoteDescription.sdp) + sections.join('');
        } else {
          return reject(makeError('OperationError', 'Can not add ICE candidate'));
        }
      }

      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function (selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function (transceiver) {
        if (transceiver.rtpSender && transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });

      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }

      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function (transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(function (method) {
        if (transceiver[method]) {
          promises.push(transceiver[method].getStats());
        }
      });
    });
    return Promise.all(promises).then(function (allStats) {
      var results = new Map();
      allStats.forEach(function (stats) {
        stats.forEach(function (stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  }; // fix low-level stat names and return Map instead of object.


  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer', 'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function (ortcObjectName) {
    var obj = window[ortcObjectName];

    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;

      obj.prototype.getStats = function () {
        return nativeGetstats.apply(this).then(function (nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function (id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  }); // legacy callback shims. Should be moved to adapter.js some days.

  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[0] === 'function' || typeof args[1] === 'function') {
        // legacy
        return nativeMethod.apply(this, [arguments[2]]).then(function (description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function (error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function' || typeof args[2] === 'function') {
        // legacy
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function (error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  }); // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.

  ['getStats'].forEach(function (method) {
    var nativeMethod = RTCPeerConnection.prototype[method];

    RTCPeerConnection.prototype[method] = function () {
      var args = arguments;

      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments).then(function () {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }

      return nativeMethod.apply(this, arguments);
    };
  });
  return RTCPeerConnection;
};

/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* eslint-env node */
 // SDP helpers.

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var SDPUtils = {}; // Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883

SDPUtils.generateIdentifier = function () {
  return Math.random().toString(36).substr(2, 10);
}; // The RTCP CNAME used by all peerconnections from the same JS.


SDPUtils.localCName = SDPUtils.generateIdentifier(); // Splits SDP into lines, dealing with both CRLF and LF.

SDPUtils.splitLines = function (blob) {
  return blob.trim().split('\n').map(function (line) {
    return line.trim();
  });
}; // Splits SDP into sessionpart and mediasections. Ensures CRLF.


SDPUtils.splitSections = function (blob) {
  var parts = blob.split('\nm=');
  return parts.map(function (part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
}; // returns the session description.


SDPUtils.getDescription = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
}; // returns the individual media sections.


SDPUtils.getMediaSections = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
}; // Returns lines that start with a certain prefix.


SDPUtils.matchPrefix = function (blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function (line) {
    return line.indexOf(prefix) === 0;
  });
}; // Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"


SDPUtils.parseCandidate = function (line) {
  var parts; // Parse both variants.

  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4],
    // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;

      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;

      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;

      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.

        candidate.usernameFragment = parts[i + 1];
        break;

      default:
        // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }

  return candidate;
}; // Translates a candidate object into SDP candidate attribute.


SDPUtils.writeCandidate = function (candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);
  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);

  if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }

  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }

  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }

  return 'candidate:' + sdp.join(' ');
}; // Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar


SDPUtils.parseIceOptions = function (line) {
  return line.substr(14).split(' ');
}; // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2


SDPUtils.parseRtpMap = function (line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id

  };
  parts = parts[0].split('/');
  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate

  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1; // legacy alias, got renamed back to channels in ORTC.

  parsed.numChannels = parsed.channels;
  return parsed;
}; // Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.


SDPUtils.writeRtpMap = function (codec) {
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
}; // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset


SDPUtils.parseExtmap = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
}; // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.


SDPUtils.writeExtmap = function (headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
}; // Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on


SDPUtils.parseFmtp = function (line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');

  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }

  return parsed;
}; // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeFmtp = function (codec) {
  var line = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function (param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }

  return line;
}; // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi


SDPUtils.parseRtcpFb = function (line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
}; // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.


SDPUtils.writeRtcpFb = function (codec) {
  var lines = '';
  var pt = codec.payloadType;

  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }

  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function (fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
  }

  return lines;
}; // Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something


SDPUtils.parseSsrcMedia = function (line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);

  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }

  return parts;
};

SDPUtils.parseSsrcGroup = function (line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function (ssrc) {
      return parseInt(ssrc, 10);
    })
  };
}; // Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.


SDPUtils.getMid = function (mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];

  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function (line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(),
    // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
}; // Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.


SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:'); // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.

  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
}; // Serializes DTLS parameters to SDP.


SDPUtils.writeDtlsParameters = function (params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function (fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
}; // Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members


SDPUtils.parseCryptoLine = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts[3]
  };
};

SDPUtils.writeCryptoLine = function (parameters) {
  return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + parameters.keyParams + (parameters.sessionParams ? ' ' + parameters.sessionParams : '') + '\r\n';
}; // Extracts all SDES paramters.


SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
}; // Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.


SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.splitLines(mediaSection); // Search in session part, too.

  lines = lines.concat(SDPUtils.splitLines(sessionpart));
  var iceParameters = {
    usernameFragment: lines.filter(function (line) {
      return line.indexOf('a=ice-ufrag:') === 0;
    })[0].substr(12),
    password: lines.filter(function (line) {
      return line.indexOf('a=ice-pwd:') === 0;
    })[0].substr(10)
  };
  return iceParameters;
}; // Serializes ICE parameters to SDP.


SDPUtils.writeIceParameters = function (params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
}; // Parses the SDP media section and returns RTCRtpParameters.


SDPUtils.parseRtpParameters = function (mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');

  for (var i = 3; i < mline.length; i++) {
    // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];

    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' '); // Only the first a=fmtp:<pt> is considered.

      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec); // parse FEC mechanisms from rtpmap lines.

      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;

        default:
          // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }

  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  }); // FIXME: parse rtcp.

  return description;
}; // Generates parts of the SDP media section describing the capabilities /
// parameters.


SDPUtils.writeRtpDescription = function (kind, caps) {
  var sdp = ''; // Build the mline.

  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.

  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function (codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }

    return codec.payloadType;
  }).join(' ') + '\r\n';
  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'; // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.

  caps.codecs.forEach(function (codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function (codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });

  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function (extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  } // FIXME: write fecMechanisms.


  return sdp;
}; // Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.


SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1; // filter a=ssrc:... cname:, ignore PlanB-msid

  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;
  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function (part) {
      return parseInt(part, 10);
    });
  });

  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function (codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };

      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {
          ssrc: secondarySsrc
        };
      }

      encodingParameters.push(encParam);

      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });

  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  } // we support both b=AS and b=TIAS but interpret AS as TIAS.


  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');

  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
    } else {
      bandwidth = undefined;
    }

    encodingParameters.forEach(function (params) {
      params.maxBitrate = bandwidth;
    });
  }

  return encodingParameters;
}; // parses http://draft.ortc.org/#rtcrtcpparameters*


SDPUtils.parseRtcpParameters = function (mediaSection) {
  var rtcpParameters = {}; // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.

  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (obj) {
    return obj.attribute === 'cname';
  })[0];

  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  } // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize


  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0; // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.

  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;
  return rtcpParameters;
}; // parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.


SDPUtils.parseMsid = function (mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');

  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }

  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (msidParts) {
    return msidParts.attribute === 'msid';
  });

  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {
      stream: parts[0],
      track: parts[1]
    };
  }
}; // SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05


SDPUtils.parseSctpDescription = function (mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;

  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }

  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }

  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');

  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }

  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');

  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0].substr(10).split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
}; // SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)


SDPUtils.writeSctpDescription = function (media, sctp) {
  var output = [];

  if (media.protocol !== 'DTLS/SCTP') {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + sctp.port + '\r\n'];
  } else {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'];
  }

  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }

  return output.join('');
}; // Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range


SDPUtils.generateSessionId = function () {
  return Math.random().toString().substr(2, 21);
}; // Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'


SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;

  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }

  var user = sessUser || 'thisisadapterortc'; // FIXME: sess-id should be an NTP timestamp.

  return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};

SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps); // Map ICE parameters (ufrag, pwd) to SDP.

  sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters()); // Map DTLS parameters to SDP.

  sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');
  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid; // for Chrome.

    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;

    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
      sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
    }
  } // FIXME: this should be written by writeRtpDescription.


  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';

  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
  }

  return sdp;
}; // Gets the direction from the mediaSection or the sessionpart.


SDPUtils.getDirection = function (mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);

  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);

      default: // FIXME: What should happen here?

    }
  }

  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }

  return 'sendrecv';
};

SDPUtils.getKind = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function (mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function (mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
}; // a very naive interpretation of a valid SDP.


SDPUtils.isValidSDP = function (blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }

  var lines = SDPUtils.splitLines(blob);

  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    } // TODO: check the modifier a bit more.

  }

  return true;
}; // Expose public methods.


if (( false ? undefined : _typeof(module)) === 'object') {
  module.exports = SDPUtils;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");

var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;
exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
} // Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,
    // Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    // RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},
    // protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + _typeof(url));
  } // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916


  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);
  var rest = url; // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"

  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);

    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];

      if (simplePath[2]) {
        this.search = simplePath[2];

        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }

      return this;
    }
  }

  var proto = protocolPattern.exec(rest);

  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  } // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.


  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';

    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c
    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.
    // find the first instance of any hostEndingChars
    var hostEnd = -1;

    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.


    var auth, atSign;

    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    } // Now we have a portion which is definitely the auth.
    // Pull that off.


    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    } // the host is the remaining to the left of the first non-host char


    hostEnd = -1;

    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    } // if we still have not hit it, then the entire thing is a host.


    if (hostEnd === -1) hostEnd = rest.length;
    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd); // pull out port.

    this.parseHost(); // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.

    this.hostname = this.hostname || ''; // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.

    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']'; // validate a little.

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);

      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;

        if (!part.match(hostnamePartPattern)) {
          var newpart = '';

          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          } // we test again with ASCII char only


          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);

            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }

            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }

            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host; // strip [ and ] from the hostname
    // the host field still retains them, though

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);

      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  } // now rest is set to the post-host stuff.
  // chop off any delim chars.


  if (!unsafeProtocol[lowerProto]) {
    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);

      if (esc === ae) {
        esc = escape(ae);
      }

      rest = rest.split(ae).join(esc);
    }
  } // chop off from the tail first.


  var hash = rest.indexOf('#');

  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }

  var qm = rest.indexOf('?');

  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);

    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }

    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }

  if (rest) this.pathname = rest;

  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  } //to support http.request


  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  } // finally, reconstruct the href based on what has been validated.


  this.href = this.format();
  return this;
}; // format a parsed object into a url string


function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');

    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':'; // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.

  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');
  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);

  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  } // hash is always overridden, no matter what.
  // even href="" will remove it.


  result.hash = relative.hash; // if the relative url is empty, then there's nothing left to do here.

  if (relative.href === '') {
    result.href = result.format();
    return result;
  } // hrefs like //foo/bar always cut to the protocol.


  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);

    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    } //urlParse appends trailing / to urls like http://www.example.com


    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);

      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }

      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;

    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');

      while (relPath.length && !(relative.host = relPath.shift())) {
        ;
      }

      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }

    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port; // to support http.request

    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }

    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol]; // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.

  if (psychotic) {
    result.hostname = '';
    result.port = null;

    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }

    result.host = '';

    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;

      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }

      relative.host = null;
    }

    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath; // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift(); //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    result.search = relative.search;
    result.query = relative.query; //to support http.request

    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }

    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null; //to support http.request

    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }

    result.href = result.format();
    return result;
  } // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.


  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === ''; // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0

  var up = 0;

  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];

    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/'; // put the host back

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : ''; //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')

    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;

    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  } //to support request.http


  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }

  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);

  if (port) {
    port = port[0];

    if (port !== ':') {
      this.port = port.substr(1);
    }

    host = host.substr(0, host.length - port.length);
  }

  if (host) this.hostname = host;
};

/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return _typeof(arg) === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */



var adapter = Object(_adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])({
  window: window
});
/* harmony default export */ __webpack_exports__["default"] = (adapter);

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js");
/* harmony import */ var _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js");
/* harmony import */ var _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js");
/* harmony import */ var _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js");
/* harmony import */ var _common_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 // Browser shims.





 // Shimming starts here.

function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimEdge: true,
    shimSafari: true
  };
  // Utils.
  var logging = _utils__WEBPACK_IMPORTED_MODULE_0__["log"];
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);
  var adapter = {
    browserDetails: browserDetails,
    commonShim: _common_shim__WEBPACK_IMPORTED_MODULE_5__,
    extractVersion: _utils__WEBPACK_IMPORTED_MODULE_0__["extractVersion"],
    disableLog: _utils__WEBPACK_IMPORTED_MODULE_0__["disableLog"],
    disableWarnings: _utils__WEBPACK_IMPORTED_MODULE_0__["disableWarnings"]
  }; // Shim browser if found.

  switch (browserDetails.browser) {
    case 'chrome':
      if (!_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ || !_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"] || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming chrome.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__;
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetUserMedia"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimMediaStream"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimPeerConnection"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimOnTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimAddTrackRemoveTrack"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetSendersWithDtmf"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["shimSenderReceiverGetStats"](window);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__["fixNegotiationNeeded"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;

    case 'firefox':
      if (!_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ || !_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"] || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming firefox.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__;
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimPeerConnection"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimOnTrack"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRemoveStream"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimSenderGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimReceiverGetStats"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimRTCDataChannel"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimAddTransceiver"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateOffer"](window);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__["shimCreateAnswer"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimConnectionState"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;

    case 'edge':
      if (!_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ || !_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"] || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming edge.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__;
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetUserMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimGetDisplayMedia"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimPeerConnection"](window);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__["shimReplaceTrack"](window); // the edge shim implements the full RTCIceCandidate object.

      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      break;

    case 'safari':
      if (!_safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }

      logging('adapter.js shimming safari.'); // Export to the adapter global object visible in the browser.

      adapter.browserShim = _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__;
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRTCIceServerUrls"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCreateOfferLegacy"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimCallbacksAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimLocalStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimRemoteStreamsAPI"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimTrackEventTransceiver"](window);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__["shimGetUserMedia"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimRTCIceCandidate"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimMaxMessageSize"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["shimSendThrowTypeError"](window);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__["removeAllowExtmapMixed"](window);
      break;

    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimMediaStream, shimOnTrack, shimGetSendersWithDtmf, shimGetStats, shimSenderReceiverGetStats, shimAddTrackRemoveTrackWithNative, shimAddTrackRemoveTrack, shimPeerConnection, fixNegotiationNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMediaStream", function() { return shimMediaStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetSendersWithDtmf", function() { return shimGetSendersWithDtmf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetStats", function() { return shimGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderReceiverGetStats", function() { return shimSenderReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrackWithNative", function() { return shimAddTrackRemoveTrackWithNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTrackRemoveTrack", function() { return shimAddTrackRemoveTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixNegotiationNeeded", function() { return fixNegotiationNeeded; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */







function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}
function shimOnTrack(window) {
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }

        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = {
                track: te.track
              };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = {
              receiver: receiver
            };
            event.streams = [e.stream];

            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver;

            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = {
                track: track
              };
            }

            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = {
              receiver: receiver
            };
            event.streams = [e.stream];

            _this.dispatchEvent(event);
          });
        };

        this.addEventListener('addstream', this._ontrackpoly);
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utils_js__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', {
          value: {
            receiver: e.receiver
          }
        });
      }

      return e;
    });
  }
}
function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,

        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }

          return this._dtmf;
        },

        _pc: pc
      };
    }; // augment addTrack when getSenders is not available.


    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };

      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        var sender = origAddTrack.apply(this, arguments);

        if (!sender) {
          sender = shimSenderWithDtmf(this, track);

          this._senders.push(sender);
        }

        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);

        var idx = this._senders.indexOf(sender);

        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }

    var origAddStream = window.RTCPeerConnection.prototype.addStream;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });

        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }
    });
  }
}
function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _this5 = this;

    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2]; // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.


    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    } // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.


    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });
      return standardReport;
    }; // shim getStats with maplike support


    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    } // promise-support


    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this5, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}
function shimSenderReceiverGetStats(window) {
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  } // shim sender stats.


  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        var _this6 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this6;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }

    window.RTCRtpSender.prototype.getStats = function getStats() {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          _utils_js__WEBPACK_IMPORTED_MODULE_2__["filterStats"](result, sender.track, true)
        );
      });
    };
  } // shim receiver stats.


  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        var _this7 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this7;
        });
        return receivers;
      };
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });

    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return _utils_js__WEBPACK_IMPORTED_MODULE_2__["filterStats"](result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  } // shim RTCPeerConnection.getStats(track).


  var origGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender;
      var receiver;
      var err;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }

        return r.track === track;
      });

      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }

      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }

    return origGetStats.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this8._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    var sender = origAddTrack.apply(this, arguments);

    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }

    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this9.getSenders().find(function (s) {
        return s.track === track;
      });

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this10 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);

        if (idx !== -1) {
          _this10._shimmedLocalStreams[streamId].splice(idx, 1);
        }

        if (_this10._shimmedLocalStreams[streamId].length === 1) {
          delete _this10._shimmedLocalStreams[streamId];
        }
      });
    }

    return origRemoveTrack.apply(this, arguments);
  };
}
function shimAddTrackRemoveTrack(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_2__["detectBrowser"](window); // shim addTrack and removeTrack.

  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  } // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.


  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;

  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this11 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this11._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;

  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this12 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this12.getSenders().find(function (s) {
        return s.track === track;
      });

      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    }); // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.

    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }

    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    var _this13 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }

    var streams = [].slice.call(arguments, 1);

    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];

    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track); // Trigger ONN async.

      Promise.resolve().then(function () {
        _this13.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }

    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  }; // replace the internal stream id with the external one and
  // vice versa.


  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }

  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }

  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];

    var methodObj = Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
      var _this14 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';

      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this14, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }

      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this14, description);
      });
    });

    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });
  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;

  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }

    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  }; // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier


  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);

      if (description.type === '') {
        return description;
      }

      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this15 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    } // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.


    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }

    var isLocal = sender._pc === this;

    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    } // Search for the native stream the senders track belongs to.


    this._streams = this._streams || {};
    var stream;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });

      if (hasTrack) {
        stream = _this15._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }

      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}
function shimPeerConnection(window) {
  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_2__["detectBrowser"](window);

  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }

  if (!window.RTCPeerConnection) {
    return;
  } // shim implicit creation of RTCSessionDescription/RTCIceCandidate


  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];

      var methodObj = Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });

      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  } // support for addIceCandidate(null or undefined)


  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }

      return Promise.resolve();
    } // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions. Native support planned for Chrome M77.


    if (browserDetails.version < 78 && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }

    return nativeAddIceCandidate.apply(this, arguments);
  };
}
function fixNegotiationNeeded(window) {
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'negotiationneeded', function (e) {
    var pc = e.target;

    if (pc.signalingState !== 'stable') {
      return;
    }

    return e;
  });
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  } // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.


  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };

      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }

      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }

      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */




var logging = _utils_js__WEBPACK_IMPORTED_MODULE_1__["log"];
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var browserDetails = _utils_js__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(c) !== 'object' || c.mandatory || c.optional) {
      return c;
    }

    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }

      var r = Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(c[key]) === 'object' ? c[key] : {
        ideal: c[key]
      };

      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }

      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }

        return name === 'deviceId' ? 'sourceId' : name;
      };

      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};

        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }

      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });

    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }

    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }

    constraints = JSON.parse(JSON.stringify(constraints));

    if (constraints && Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };

      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }

    if (constraints && Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(face) === 'object' ? face : {
        ideal: face
      });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches;

        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }

        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });

            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }

            if (dev) {
              constraints.video.deviceId = face.exact ? {
                exact: dev.deviceId
              } : {
                ideal: dev.deviceId
              };
            }

            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }

      constraints.video = constraintsToChrome_(constraints.video);
    }

    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }

    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };

  navigator.getUserMedia = getUserMedia_.bind(navigator); // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.

  if (navigator.mediaDevices.getUserMedia) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }

          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/*! exports provided: shimRTCIceCandidate, shimMaxMessageSize, shimSendThrowTypeError, shimConnectionState, removeAllowExtmapMixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceCandidate", function() { return shimRTCIceCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimMaxMessageSize", function() { return shimMaxMessageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSendThrowTypeError", function() { return shimSendThrowTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConnectionState", function() { return shimConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllowExtmapMixed", function() { return removeAllowExtmapMixed; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sdp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;

  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(args) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = sdp__WEBPACK_IMPORTED_MODULE_1___default.a.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate); // Add a serializer that does not serialize the extra attributes.

      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };

      return augmentedCandidate;
    }

    return new NativeRTCIceCandidate(args);
  };

  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype; // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)

  _utils__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }

    return e;
  });
}
function shimMaxMessageSize(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_2__["detectBrowser"](window);

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    if (!description || !description.sdp) {
      return false;
    }

    var sections = sdp__WEBPACK_IMPORTED_MODULE_1___default.a.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = sdp__WEBPACK_IMPORTED_MODULE_1___default.a.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);

    if (match === null || match.length < 2) {
      return -1;
    }

    var version = parseInt(match[1], 10); // Test for NaN (yes, this is ugly)

    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;

    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }

    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536; // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697

    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = sdp__WEBPACK_IMPORTED_MODULE_1___default.a.matchPrefix(description.sdp, 'a=max-message-size:');

    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }

    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null; // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.

    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      var _this$getConfiguratio = this.getConfiguration(),
          sdpSemantics = _this$getConfiguratio.sdpSemantics;

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get: function get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },
          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]); // Get the maximum message size the local peer is capable of sending

      var canSendMMS = getCanSendMaxMessageSize(isFirefox); // Get the maximum message size of the remote peer.

      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox); // Determine final maximum message size

      var maxMessageSize;

      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      } // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.


      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}
function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  } // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831


  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;

    dc.send = function send() {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;

      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }

      return origDataChannelSend.apply(dc, arguments);
    };
  }

  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;

  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };

  _utils__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}
/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */

function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }

  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }

      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];

    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;

          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }

          return e;
        };

        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }

      return origMethod.apply(this, arguments);
    };
  });
}
function removeAllowExtmapMixed(window) {
  /* remove a=extmap-allow-mixed for Chrome < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }

  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_2__["detectBrowser"](window);

  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }

  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;

  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      desc.sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
    }

    return nativeSRD.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimPeerConnection, shimReplaceTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReplaceTrack", function() { return shimReplaceTrack; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _filtericeservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */







function shimPeerConnection(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__["detectBrowser"](window);

  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }

    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    } // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+


    if (browserDetails.version < 15025) {
      var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set: function set(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  } // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714


  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }

        return this._dtmf;
      }
    });
  } // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*


  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  var RTCPeerConnectionShim = rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default()(window, browserDetails.version);

  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = Object(_filtericeservers__WEBPACK_IMPORTED_MODULE_1__["filterIceServers"])(config.iceServers, browserDetails.version);
      _utils__WEBPACK_IMPORTED_MODULE_0__["log"]('ICE servers after filtering:', config.iceServers);
    }

    return new RTCPeerConnectionShim(config);
  };

  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}
function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/*! exports provided: filterIceServers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterIceServers", function() { return filterIceServers; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


 // Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times

function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function (server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;

      if (server.url && !server.urls) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
      }

      var isString = typeof urls === 'string';

      if (isString) {
        urls = [urls];
      }

      urls = urls.filter(function (url) {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');

        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }

        return validTurn && !hasTurn;
      });
      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  var shimError_ = function shimError_(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function toString() {
        return this.name;
      }
    };
  }; // getUserMedia error shim.


  var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

  navigator.mediaDevices.getUserMedia = function (c) {
    return origGetUserMedia(c).catch(function (e) {
      return Promise.reject(shimError_(e));
    });
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia, shimGetDisplayMedia, shimOnTrack, shimPeerConnection, shimSenderGetStats, shimReceiverGetStats, shimRemoveStream, shimRTCDataChannel, shimAddTransceiver, shimCreateOffer, shimCreateAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimOnTrack", function() { return shimOnTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimPeerConnection", function() { return shimPeerConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimSenderGetStats", function() { return shimSenderGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimReceiverGetStats", function() { return shimReceiverGetStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoveStream", function() { return shimRemoveStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCDataChannel", function() { return shimRTCDataChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimAddTransceiver", function() { return shimAddTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOffer", function() { return shimCreateOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateAnswer", function() { return shimCreateAnswer; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return _getusermedia__WEBPACK_IMPORTED_MODULE_3__["shimGetUserMedia"]; });

/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__["shimGetDisplayMedia"]; });

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */







function shimOnTrack(window) {
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
}
function shimPeerConnection(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_2__["detectBrowser"](window);

  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }

  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];

      var methodObj = Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });

      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  } // support for addIceCandidate(null or undefined)
  // as well as ignoring {sdpMid, candidate: ""}


  if (browserDetails.version < 68) {
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;

    window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }

        return Promise.resolve();
      } // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.


      if (arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }

      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };
  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;

  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          } // Avoid TypeError: "type" is read-only, in old versions. 34-43ish


          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }

      return stats;
    }).then(onSucc, onErr);
  };
}
function shimSenderGetStats(window) {
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }

  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;

  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;

  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }

  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}
function shimReceiverGetStats(window) {
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }

  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }

  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;

  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }

  _utils__WEBPACK_IMPORTED_MODULE_2__["wrapPeerConnectionEvent"](window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });

  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}
function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }

  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    var _this3 = this;

    _utils__WEBPACK_IMPORTED_MODULE_2__["deprecated"]('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}
function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}
function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;

  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      var initParameters = arguments[1];
      var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;

      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(function (encodingParam) {
          if ('rid' in encodingParam) {
            var ridRegex = /^[a-z0-9]{0,16}$/i;

            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }

          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }

          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }

      var transceiver = origAddTransceiver.apply(this, arguments);

      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        var sender = transceiver.sender;
        var params = sender.getParameters();

        if (!('encodings' in params)) {
          params.encodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).catch(function () {}));
        }
      }

      return transceiver;
    };
  }
}
function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    var _arguments2 = arguments,
        _this4 = this;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateOffer.apply(_this4, _arguments2);
      }).finally(function () {
        _this4.setParametersPromises = [];
      });
    }

    return origCreateOffer.apply(this, arguments);
  };
}
function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window) === 'object' && window.RTCPeerConnection)) {
    return;
  }

  var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;

  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    var _arguments3 = arguments,
        _this5 = this;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateAnswer.apply(_this5, _arguments3);
      }).finally(function () {
        _this5.setParametersPromises = [];
      });
    }

    return origCreateAnswer.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/*! exports provided: shimGetDisplayMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetDisplayMedia", function() { return shimGetDisplayMedia; });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */


function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }

  if (!window.navigator.mediaDevices) {
    return;
  }

  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError'; // from https://heycam.github.io/webidl/#idl-DOMException-error-names

      err.code = 8;
      return Promise.reject(err);
    }

    if (constraints.video === true) {
      constraints.video = {
        mediaSource: preferredMediaSource
      };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }

    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/*! exports provided: shimGetUserMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */




function shimGetUserMedia(window) {
  var browserDetails = _utils__WEBPACK_IMPORTED_MODULE_1__["detectBrowser"](window);
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    _utils__WEBPACK_IMPORTED_MODULE_1__["deprecated"]('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);

    navigator.mediaDevices.getUserMedia = function (c) {
      if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(c) === 'object' && Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }

      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;

      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;

      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(c) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }

        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/*! exports provided: shimLocalStreamsAPI, shimRemoteStreamsAPI, shimCallbacksAPI, shimGetUserMedia, shimConstraints, shimRTCIceServerUrls, shimTrackEventTransceiver, shimCreateOfferLegacy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimLocalStreamsAPI", function() { return shimLocalStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRemoteStreamsAPI", function() { return shimRemoteStreamsAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCallbacksAPI", function() { return shimCallbacksAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimGetUserMedia", function() { return shimGetUserMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimConstraints", function() { return shimConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimRTCIceServerUrls", function() { return shimRTCIceServerUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimTrackEventTransceiver", function() { return shimTrackEventTransceiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shimCreateOfferLegacy", function() { return shimCreateOfferLegacy; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */




function shimLocalStreamsAPI(window) {
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window) !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }

      return this._localStreams;
    };
  }

  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;

    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }

      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      } // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.


      stream.getAudioTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
      stream.getVideoTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
      var stream = arguments[1];

      if (stream) {
        if (!this._localStreams) {
          this._localStreams = [stream];
        } else if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
      }

      return _addTrack.apply(this, arguments);
    };
  }

  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this2 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }

      var index = this._localStreams.indexOf(stream);

      if (index === -1) {
        return;
      }

      this._localStreams.splice(index, 1);

      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this2.removeTrack(sender);
        }
      });
    };
  }
}
function shimRemoteStreamsAPI(window) {
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window) !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }

  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this3 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }

        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this3._remoteStreams) {
              _this3._remoteStreams = [];
            }

            if (_this3._remoteStreams.includes(stream)) {
              return;
            }

            _this3._remoteStreams.push(stream);

            var event = new Event('addstream');
            event.stream = stream;

            _this3.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;

    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var pc = this;

      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }

            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }

            pc._remoteStreams.push(stream);

            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }

      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}
function shimCallbacksAPI(window) {
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window) !== 'object' || !window.RTCPeerConnection) {
    return;
  }

  var prototype = window.RTCPeerConnection.prototype;
  var origCreateOffer = prototype.createOffer;
  var origCreateAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateOffer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateAnswer.apply(this, [options]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);

    if (!failureCallback) {
      return promise;
    }

    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.addIceCandidate = withCallback;
}
function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;

    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);

    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}
function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, {
      video: _utils__WEBPACK_IMPORTED_MODULE_1__["compactObject"](constraints.video)
    });
  }

  return constraints;
}
function shimRTCIceServerUrls(window) {
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;

  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];

      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];

        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          _utils__WEBPACK_IMPORTED_MODULE_1__["deprecated"]('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }

      pcConfig.iceServers = newIceServers;
    }

    return new OrigPeerConnection(pcConfig, pcConstraints);
  };

  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype; // wrap static methods. Currently just generateCertificate.

  if ('generateCertificate' in window.RTCPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}
function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(window) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return {
          receiver: this.receiver
        };
      }
    });
  }
}
function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;

  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }

      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'audio';
      });

      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }

      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'video';
      });

      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }

    return origCreateOffer.apply(this, arguments);
  };
}

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/*! exports provided: extractVersion, wrapPeerConnectionEvent, disableLog, disableWarnings, log, deprecated, detectBrowser, compactObject, walkStats, filterStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractVersion", function() { return extractVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPeerConnectionEvent", function() { return wrapPeerConnectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableLog", function() { return disableLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableWarnings", function() { return disableWarnings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecated", function() { return deprecated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectBrowser", function() { return detectBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactObject", function() { return compactObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walkStats", function() { return walkStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStats", function() { return filterStats; });
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* eslint-env node */




var logDisabled_ = true;
var deprecationWarnings_ = true;
/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */

function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
} // Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).

function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;

  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }

    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);

      if (modifiedEvent) {
        cb(modifiedEvent);
      }
    };

    this._eventMap = this._eventMap || {};
    this._eventMap[cb] = wrappedCallback;
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;

  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }

    var unwrappedCb = this._eventMap[cb];
    delete this._eventMap[cb];
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }

      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}
function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(bool) + '. Please use a boolean.');
  }

  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}
/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */

function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(bool) + '. Please use a boolean.');
  }

  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}
function log() {
  if ((typeof window === "undefined" ? "undefined" : Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(window)) === 'object') {
    if (logDisabled_) {
      return;
    }

    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}
/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */

function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }

  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}
/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */

function detectBrowser(window) {
  var navigator = window.navigator; // Returned result object.

  var result = {
    browser: null,
    version: null
  }; // Fail early if it's not a browser

  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
    // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}
/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */


function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObj = isObject(data[key]);
    var value = isObj ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObj && !Object.keys(value).length;

    if (value === undefined || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
  }, {});
}
/* iterates the stats graph recursively. */

function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }

  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}
/* filter getStats for a sender/receiver track. */

function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();

  if (track === null) {
    return filteredResult;
  }

  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

/***/ }),

/***/ "./src/demo/App.js":
/*!*************************!*\
  !*** ./src/demo/App.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/App.css */ "./src/demo/css/App.css");
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lib */ "./src/lib/index.js");





var App = function App() {
  Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

  Object(_Users_kliment_WebstormProjects_rpturn_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "demoArrowMethod", function () {
    console.log("Arrow methods will work");
  });

  var libInstance = new _lib__WEBPACK_IMPORTED_MODULE_3__["default"]();
  console.log("Demo loaded!", libInstance);
  this.demoArrowMethod();
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/demo/css/App.css":
/*!******************************!*\
  !*** ./src/demo/css/App.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/demo/css/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/demo/css/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/demo/css/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/demo/index.js":
/*!***************************!*\
  !*** ./src/demo/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/demo/App.js");

new _App__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./src/lib/App.js":
/*!************************!*\
  !*** ./src/lib/App.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rpturn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rpturn.js */ "./src/lib/rpturn.js");

/* harmony default export */ __webpack_exports__["default"] = (_rpturn_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/lib/api.js":
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
/*! exports provided: createApiGetRequest, getServerListApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApiGetRequest", function() { return createApiGetRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerListApi", function() { return getServerListApi; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Rough implementation. Untested.
function timeout(ms, promise) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("timeout"));
    }, ms);
    promise.then(resolve, reject);
  });
}

var createApiGetRequest = function createApiGetRequest(url) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return timeout(2000, fetch(url, {
    method: 'GET',
    headers: headers
  }));
};

var getServerListApi = function getServerListApi(url, headers) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      query: "\n        query {ips:listInstancesIp}\n      ",
      variables: {}
    }),
    headers: _objectSpread({}, headers, {
      'Content-Type': 'application/json'
    })
  }).then(function (response) {
    return response.json();
  });
};



/***/ }),

/***/ "./src/lib/config.js":
/*!***************************!*\
  !*** ./src/lib/config.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RPConfig = {
  apiUrl: 'https://api-tool.rpturn.com',
  healthCheckEndpoint: '/api/health-check',
  fallbackTurnServer: 'turn.vitech.dev',
  signalServer: 'api.rpturn.com'
};
/* harmony default export */ __webpack_exports__["default"] = (RPConfig);

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/lib/App.js");

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/lib/peer.js":
/*!*************************!*\
  !*** ./src/lib/peer.js ***!
  \*************************/
/*! exports provided: createPeer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPeer", function() { return createPeer; });
/* harmony import */ var _peerjs_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peerjs/peer */ "./src/lib/peerjs/peer.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/lib/config.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var peerjsConf = {
  host: 'localhost',
  port: 4000
};

if (true) {
  peerjsConf = {
    host: _config__WEBPACK_IMPORTED_MODULE_1__["default"].signalServer,
    secure: true
  };
}

var createPeer = function createPeer(id, _ref, turnOnly, signalCredentials, debug) {
  var ip = _ref.ip;
  var iceServers = [{
    urls: ["turn:".concat(ip)],
    username: signalCredentials.key,
    credential: signalCredentials.token
  }, {
    urls: ["stun:".concat(ip)],
    username: signalCredentials.key,
    credential: signalCredentials.token
  }];
  console.log(iceServers, _peerjs_peer__WEBPACK_IMPORTED_MODULE_0__["Peer"]);
  var peer = new _peerjs_peer__WEBPACK_IMPORTED_MODULE_0__["Peer"](id, _objectSpread({}, peerjsConf, {
    path: '/signal',
    config: {
      iceServers: iceServers,
      iceTransportPolicy: turnOnly ? "relay" : "all"
    }
  }, signalCredentials, {
    debug: debug
  }));
  return peer;
};



/***/ }),

/***/ "./src/lib/peerjs/adapter.js":
/*!***********************************!*\
  !*** ./src/lib/peerjs/adapter.js ***!
  \***********************************/
/*! exports provided: webRTCAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webRTCAdapter", function() { return webrtc_adapter__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/lib/peerjs/api.js":
/*!*******************************!*\
  !*** ./src/lib/peerjs/api.js ***!
  \*******************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/peerjs/util.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var API =
/*#__PURE__*/
function () {
  function API(_options) {
    _classCallCheck(this, API);

    this._options = _options;
  }

  _createClass(API, [{
    key: "_buildUrl",
    value: function _buildUrl(method) {
      var protocol = this._options.secure ? "https://" : "http://";
      var url = protocol + this._options.host + ":" + this._options.port + this._options.path + this._options.key + "/" + method;
      var queryString = "?ts=" + new Date().getTime() + "" + Math.random();
      url += queryString;
      return url;
    }
    /** Get a unique ID from the server via XHR and initialize with it. */

  }, {
    key: "retrieveId",
    value: function () {
      var _retrieveId = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var url, response, pathError;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this._buildUrl("id");
                _context.prev = 1;
                _context.next = 4;
                return fetch(url);

              case 4:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 7;
                  break;
                }

                throw new Error("Error. Status:".concat(response.status));

              case 7:
                return _context.abrupt("return", response.text());

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Error retrieving ID", _context.t0);
                pathError = "";

                if (this._options.path === "/" && this._options.host !== _util__WEBPACK_IMPORTED_MODULE_0__["util"].CLOUD_HOST) {
                  pathError = " If you passed in a `path` to your self-hosted PeerServer, " + "you'll also need to pass in that same path when creating a new " + "Peer.";
                }

                throw new Error("Could not get an ID from the server." + pathError);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function retrieveId() {
        return _retrieveId.apply(this, arguments);
      }

      return retrieveId;
    }()
    /** @deprecated */

  }, {
    key: "listAllPeers",
    value: function () {
      var _listAllPeers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var url, response, helpfulError;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this._buildUrl("peers");
                _context2.prev = 1;
                _context2.next = 4;
                return fetch(url);

              case 4:
                response = _context2.sent;

                if (!(response.status !== 200)) {
                  _context2.next = 11;
                  break;
                }

                if (!(response.status === 401)) {
                  _context2.next = 10;
                  break;
                }

                helpfulError = "";

                if (this._options.host === _util__WEBPACK_IMPORTED_MODULE_0__["util"].CLOUD_HOST) {
                  helpfulError = "It looks like you're using the cloud server. You can email " + "team@peerjs.com to enable peer listing for your API key.";
                } else {
                  helpfulError = "You need to enable `allow_discovery` on your self-hosted " + "PeerServer to use this feature.";
                }

                throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);

              case 10:
                throw new Error("Error. Status:".concat(response.status));

              case 11:
                return _context2.abrupt("return", response.json());

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Error retrieving list peers", _context2.t0);
                throw new Error("Could not get list peers from the server." + _context2.t0);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 14]]);
      }));

      function listAllPeers() {
        return _listAllPeers.apply(this, arguments);
      }

      return listAllPeers;
    }()
  }]);

  return API;
}();

/***/ }),

/***/ "./src/lib/peerjs/baseconnection.js":
/*!******************************************!*\
  !*** ./src/lib/peerjs/baseconnection.js ***!
  \******************************************/
/*! exports provided: BaseConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConnection", function() { return BaseConnection; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EventEmitter = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");

var BaseConnection =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(BaseConnection, _EventEmitter);

  function BaseConnection(peer, provider, options) {
    var _this;

    _classCallCheck(this, BaseConnection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseConnection).call(this));
    _this.peer = peer;
    _this.provider = provider;
    _this.options = options;
    _this._open = false;
    _this.metadata = options.metadata;
    _this.config = options.config;
    return _this;
  }

  _createClass(BaseConnection, [{
    key: "open",
    get: function get() {
      return this._open;
    }
  }]);

  return BaseConnection;
}(EventEmitter);



/***/ }),

/***/ "./src/lib/peerjs/dataconnection.js":
/*!******************************************!*\
  !*** ./src/lib/peerjs/dataconnection.js ***!
  \******************************************/
/*! exports provided: DataConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConnection", function() { return DataConnection; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/peerjs/util.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
/* harmony import */ var _negotiator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negotiator */ "./src/lib/peerjs/negotiator.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/lib/peerjs/enums.js");
/* harmony import */ var _baseconnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseconnection */ "./src/lib/peerjs/baseconnection.js");
/* harmony import */ var _encodingQueue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./encodingQueue */ "./src/lib/peerjs/encodingQueue.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Wraps a DataChannel between two Peers.
 */

var DataConnection =
/*#__PURE__*/
function (_BaseConnection) {
  _inherits(DataConnection, _BaseConnection);

  _createClass(DataConnection, [{
    key: "type",
    get: function get() {
      return _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionType"].Data;
    }
  }, {
    key: "dataChannel",
    get: function get() {
      return this._dc;
    }
  }, {
    key: "bufferSize",
    get: function get() {
      return this._bufferSize;
    }
  }]);

  function DataConnection(peerId, provider, options) {
    var _this;

    _classCallCheck(this, DataConnection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataConnection).call(this, peerId, provider, options));

    _defineProperty(_assertThisInitialized(_this), "_negotiator", void 0);

    _defineProperty(_assertThisInitialized(_this), "label", void 0);

    _defineProperty(_assertThisInitialized(_this), "serialization", void 0);

    _defineProperty(_assertThisInitialized(_this), "reliable", void 0);

    _defineProperty(_assertThisInitialized(_this), "stringify", JSON.stringify);

    _defineProperty(_assertThisInitialized(_this), "parse", JSON.parse);

    _defineProperty(_assertThisInitialized(_this), "_buffer", []);

    _defineProperty(_assertThisInitialized(_this), "_bufferSize", 0);

    _defineProperty(_assertThisInitialized(_this), "_buffering", false);

    _defineProperty(_assertThisInitialized(_this), "_chunkedData", {});

    _defineProperty(_assertThisInitialized(_this), "_dc", void 0);

    _defineProperty(_assertThisInitialized(_this), "_encodingQueue", new _encodingQueue__WEBPACK_IMPORTED_MODULE_5__["EncodingQueue"]());

    _defineProperty(_assertThisInitialized(_this), "connectionId", null);

    _this.stringify = JSON.stringify;
    _this.parse = JSON.parse;
    _this._buffer = [];
    _this._bufferSize = 0;
    _this._buffering = false;
    _this._chunkedData = {};
    _this._encodingQueue = new _encodingQueue__WEBPACK_IMPORTED_MODULE_5__["EncodingQueue"]();
    _this.connectionId = _this.options.connectionId || DataConnection.ID_PREFIX + _util__WEBPACK_IMPORTED_MODULE_0__["util"].randomToken();
    _this.label = _this.options.label || _this.connectionId;
    _this.serialization = _this.options.serialization || _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].Binary;
    _this.reliable = !!_this.options.reliable;

    _this._encodingQueue.on('done', function (ab) {
      _this._bufferedSend(ab);
    });

    _this._encodingQueue.on('error', function () {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("DC#".concat(_this.connectionId, ": Error occured in encoding from blob to arraybuffer, close DC"));

      _this.close();
    });

    _this._negotiator = new _negotiator__WEBPACK_IMPORTED_MODULE_2__["Negotiator"](_assertThisInitialized(_this));

    _this._negotiator.startConnection(_this.options._payload || {
      originator: true
    });

    return _this;
  }
  /** Called by the Negotiator when the DataChannel is ready. */


  _createClass(DataConnection, [{
    key: "initialize",
    value: function initialize(dc) {
      this._dc = dc;

      this._configureDataChannel();
    }
  }, {
    key: "_configureDataChannel",
    value: function _configureDataChannel() {
      var _this2 = this;

      if (!_util__WEBPACK_IMPORTED_MODULE_0__["util"].supports.binaryBlob || _util__WEBPACK_IMPORTED_MODULE_0__["util"].supports.reliable) {
        this.dataChannel.binaryType = "arraybuffer";
      }

      this.dataChannel.onopen = function () {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("DC#".concat(_this2.connectionId, " dc connection success"));
        _this2._open = true;

        _this2.emit(_enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Open);
      };

      this.dataChannel.onmessage = function (e) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("DC#".concat(_this2.connectionId, " dc onmessage:"), e.data);

        _this2._handleDataMessage(e);
      };

      this.dataChannel.onclose = function () {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("DC#".concat(_this2.connectionId, " dc closed for:"), _this2.peer);

        _this2.close();
      };
    } // Handles a DataChannel message.

  }, {
    key: "_handleDataMessage",
    value: function _handleDataMessage(_ref) {
      var _this3 = this;

      var data = _ref.data;
      var datatype = data.constructor;
      var isBinarySerialization = this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].Binary || this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].BinaryUTF8;
      var deserializedData = data;

      if (isBinarySerialization) {
        if (datatype === Blob) {
          // Datatype should never be blob
          _util__WEBPACK_IMPORTED_MODULE_0__["util"].blobToArrayBuffer(data, function (ab) {
            var unpackedData = _util__WEBPACK_IMPORTED_MODULE_0__["util"].unpack(ab);

            _this3.emit(_enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Data, unpackedData);
          });
          return;
        } else if (datatype === ArrayBuffer) {
          deserializedData = _util__WEBPACK_IMPORTED_MODULE_0__["util"].unpack(data);
        } else if (datatype === String) {
          // String fallback for binary data for browsers that don't support binary yet
          var ab = _util__WEBPACK_IMPORTED_MODULE_0__["util"].binaryStringToArrayBuffer(data);
          deserializedData = _util__WEBPACK_IMPORTED_MODULE_0__["util"].unpack(ab);
        }
      } else if (this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].JSON) {
        deserializedData = this.parse(data);
      } // Check if we've chunked--if so, piece things back together.
      // We're guaranteed that this isn't 0.


      if (deserializedData.__peerData) {
        this._handleChunk(deserializedData);

        return;
      }

      _get(_getPrototypeOf(DataConnection.prototype), "emit", this).call(this, _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Data, deserializedData);
    }
  }, {
    key: "_handleChunk",
    value: function _handleChunk(data) {
      var id = data.__peerData;
      var chunkInfo = this._chunkedData[id] || {
        data: [],
        count: 0,
        total: data.total
      };
      chunkInfo.data[data.n] = data.data;
      chunkInfo.count++;
      this._chunkedData[id] = chunkInfo;

      if (chunkInfo.total === chunkInfo.count) {
        // Clean up before making the recursive call to `_handleDataMessage`.
        delete this._chunkedData[id]; // We've received all the chunks--time to construct the complete data.

        var _data = new Blob(chunkInfo.data);

        this._handleDataMessage({
          data: _data
        });
      }
    }
    /**
     * Exposed functionality for users.
     */

    /** Allows user to close connection. */

  }, {
    key: "close",
    value: function close() {
      this._buffer = [];
      this._bufferSize = 0;
      this._chunkedData = {};

      if (this._negotiator) {
        this._negotiator.cleanup();

        this._negotiator = null;
      }

      if (this.provider) {
        this.provider._removeConnection(this);

        this.provider = null;
      }

      if (this.dataChannel) {
        this.dataChannel.onopen = null;
        this.dataChannel.onmessage = null;
        this.dataChannel.onclose = null;
        this._dc = null;
      }

      if (this._encodingQueue) {
        this._encodingQueue.destroy();

        this._encodingQueue.removeAllListeners();

        this._encodingQueue = null;
      }

      if (!this.open) {
        return;
      }

      this._open = false;

      _get(_getPrototypeOf(DataConnection.prototype), "emit", this).call(this, _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Close);
    }
    /** Allows user to send data. */

  }, {
    key: "send",
    value: function send(data, chunked) {
      if (!this.open) {
        _get(_getPrototypeOf(DataConnection.prototype), "emit", this).call(this, _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Error, new Error("Connection is not open. You should listen for the `open` event before sending messages."));

        return;
      }

      if (this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].JSON) {
        this._bufferedSend(this.stringify(data));
      } else if (this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].Binary || this.serialization === _enums__WEBPACK_IMPORTED_MODULE_3__["SerializationType"].BinaryUTF8) {
        var blob = _util__WEBPACK_IMPORTED_MODULE_0__["util"].pack(data);

        if (!chunked && blob.size > _util__WEBPACK_IMPORTED_MODULE_0__["util"].chunkedMTU) {
          this._sendChunks(blob);

          return;
        }

        if (!_util__WEBPACK_IMPORTED_MODULE_0__["util"].supports.binaryBlob) {
          // We only do this if we really need to (e.g. blobs are not supported),
          // because this conversion is costly.
          this._encodingQueue.enque(blob);
        } else {
          this._bufferedSend(blob);
        }
      } else {
        this._bufferedSend(data);
      }
    }
  }, {
    key: "_bufferedSend",
    value: function _bufferedSend(msg) {
      if (this._buffering || !this._trySend(msg)) {
        this._buffer.push(msg);

        this._bufferSize = this._buffer.length;
      }
    } // Returns true if the send succeeds.

  }, {
    key: "_trySend",
    value: function _trySend(msg) {
      var _this4 = this;

      if (!this.open) {
        return false;
      }

      if (this.dataChannel.bufferedAmount > DataConnection.MAX_BUFFERED_AMOUNT) {
        this._buffering = true;
        setTimeout(function () {
          _this4._buffering = false;

          _this4._tryBuffer();
        }, 50);
        return false;
      }

      try {
        this.dataChannel.send(msg);
      } catch (e) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("DC#:".concat(this.connectionId, " Error when sending:"), e);
        this._buffering = true;
        this.close();
        return false;
      }

      return true;
    } // Try to send the first message in the buffer.

  }, {
    key: "_tryBuffer",
    value: function _tryBuffer() {
      if (!this.open) {
        return;
      }

      if (this._buffer.length === 0) {
        return;
      }

      var msg = this._buffer[0];

      if (this._trySend(msg)) {
        this._buffer.shift();

        this._bufferSize = this._buffer.length;

        this._tryBuffer();
      }
    }
  }, {
    key: "_sendChunks",
    value: function _sendChunks(blob) {
      var blobs = _util__WEBPACK_IMPORTED_MODULE_0__["util"].chunk(blob);
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("DC#".concat(this.connectionId, " Try to send ").concat(blobs.length, " chunks..."));
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = blobs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _blob = _step.value;
          this.send(_blob, true);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      var payload = message.payload;

      switch (message.type) {
        case _enums__WEBPACK_IMPORTED_MODULE_3__["ServerMessageType"].Answer:
          this._negotiator.handleSDP(message.type, payload.sdp);

          break;

        case _enums__WEBPACK_IMPORTED_MODULE_3__["ServerMessageType"].Candidate:
          this._negotiator.handleCandidate(payload.candidate);

          break;

        default:
          _logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Unrecognized message type:", message.type, "from peer:", this.peer);
          break;
      }
    }
  }]);

  return DataConnection;
}(_baseconnection__WEBPACK_IMPORTED_MODULE_4__["BaseConnection"]);

_defineProperty(DataConnection, "ID_PREFIX", "dc_");

_defineProperty(DataConnection, "MAX_BUFFERED_AMOUNT", 8 * 1024 * 1024);

/***/ }),

/***/ "./src/lib/peerjs/encodingQueue.js":
/*!*****************************************!*\
  !*** ./src/lib/peerjs/encodingQueue.js ***!
  \*****************************************/
/*! exports provided: EncodingQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingQueue", function() { return EncodingQueue; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var EncodingQueue =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(EncodingQueue, _EventEmitter);

  function EncodingQueue() {
    var _this;

    _classCallCheck(this, EncodingQueue);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EncodingQueue).call(this));

    _defineProperty(_assertThisInitialized(_this), "fileReader", new FileReader());

    _defineProperty(_assertThisInitialized(_this), "_queue", []);

    _defineProperty(_assertThisInitialized(_this), "_processing", false);

    _this.fileReader.onload = function (evt) {
      _this._processing = false;

      if (evt.target) {
        _this.emit('done', evt.target.result);
      }

      _this.doNextTask();
    };

    _this.fileReader.onerror = function (evt) {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("EncodingQueue error:", evt);
      _this._processing = false;

      _this.destroy();

      _this.emit('error', evt);
    };

    return _this;
  }

  _createClass(EncodingQueue, [{
    key: "enque",
    value: function enque(blob) {
      this.queue.push(blob);
      if (this.processing) return;
      this.doNextTask();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.fileReader.abort();
      this._queue = [];
    }
  }, {
    key: "doNextTask",
    value: function doNextTask() {
      if (this.size === 0) return;
      if (this.processing) return;
      this._processing = true;
      this.fileReader.readAsArrayBuffer(this.queue.shift());
    }
  }, {
    key: "queue",
    get: function get() {
      return this._queue;
    }
  }, {
    key: "size",
    get: function get() {
      return this.queue.length;
    }
  }, {
    key: "processing",
    get: function get() {
      return this._processing;
    }
  }]);

  return EncodingQueue;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

/***/ }),

/***/ "./src/lib/peerjs/enums.js":
/*!*********************************!*\
  !*** ./src/lib/peerjs/enums.js ***!
  \*********************************/
/*! exports provided: ConnectionEventType, ConnectionType, PeerEventType, PeerErrorType, SerializationType, SocketEventType, ServerMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionEventType", function() { return ConnectionEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionType", function() { return ConnectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerEventType", function() { return PeerEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerErrorType", function() { return PeerErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerializationType", function() { return SerializationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEventType", function() { return SocketEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMessageType", function() { return ServerMessageType; });
var ConnectionEventType = {
  Open: "open",
  Stream: "stream",
  Data: "data",
  Close: "close",
  Error: "error",
  IceStateChanged: "iceStateChanged"
};
var ConnectionType = {
  Data: "data",
  Media: "media"
};
var PeerEventType = {
  Open: "open",
  Close: "close",
  Connection: "connection",
  Call: "call",
  Disconnected: "disconnected",
  Error: "error"
};
var PeerErrorType = {
  BrowserIncompatible: "browser-incompatible",
  Disconnected: "disconnected",
  InvalidID: "invalid-id",
  InvalidKey: "invalid-key",
  Network: "network",
  PeerUnavailable: "peer-unavailable",
  SslUnavailable: "ssl-unavailable",
  ServerError: "server-error",
  SocketError: "socket-error",
  SocketClosed: "socket-closed",
  UnavailableID: "unavailable-id",
  WebRTC: "webrtc"
};
var SerializationType = {
  Binary: "binary",
  BinaryUTF8: "binary-utf8",
  JSON: "json"
};
var SocketEventType = {
  Message: "message",
  Disconnected: "disconnected",
  Error: "error",
  Close: "close"
};
var ServerMessageType = {
  Heartbeat: "HEARTBEAT",
  Candidate: "CANDIDATE",
  Offer: "OFFER",
  Answer: "ANSWER",
  Open: "OPEN",
  // The connection to the server is open.
  Error: "ERROR",
  // Server error.
  IdTaken: "ID-TAKEN",
  // The selected ID is taken.
  InvalidKey: "INVALID-KEY",
  // The given API key cannot be found.
  Leave: "LEAVE",
  // Another peer has closed its connection to this peer.
  Expire: "EXPIRE" // The offer sent to a peer has expired without response.

};

/***/ }),

/***/ "./src/lib/peerjs/logger.js":
/*!**********************************!*\
  !*** ./src/lib/peerjs/logger.js ***!
  \**********************************/
/*! exports provided: LogLevel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOG_PREFIX = 'PeerJS: ';
/*
Prints log messages depending on the debug level passed in. Defaults to 0.
0  Prints no logs.
1  Prints only errors.
2  Prints errors and warnings.
3  Prints all logs.
*/

var LogLevel = {
  Disabled: 'Disabled',
  Errors: 'Errors',
  Warnings: 'Warnings',
  All: 'All'
};

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);

    _defineProperty(this, "_logLevel", LogLevel.Disabled);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      if (this._logLevel >= LogLevel.All) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this._print.apply(this, [LogLevel.All].concat(args));
      }
    }
  }, {
    key: "warn",
    value: function warn() {
      if (this._logLevel >= LogLevel.Warnings) {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this._print.apply(this, [LogLevel.Warnings].concat(args));
      }
    }
  }, {
    key: "error",
    value: function error() {
      if (this._logLevel >= LogLevel.Errors) {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        this._print.apply(this, [LogLevel.Errors].concat(args));
      }
    }
  }, {
    key: "setLogFunction",
    value: function setLogFunction(fn) {
      this._print = fn;
    }
  }, {
    key: "_print",
    value: function _print(logLevel) {
      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      var copy = [LOG_PREFIX].concat(rest);

      for (var i in copy) {
        if (copy[i] instanceof Error) {
          copy[i] = "(" + copy[i].name + ") " + copy[i].message;
        }
      }

      if (logLevel >= LogLevel.All) {
        var _console;

        (_console = console).log.apply(_console, _toConsumableArray(copy));
      } else if (logLevel >= LogLevel.Warnings) {
        var _console2;

        (_console2 = console).warn.apply(_console2, ["WARNING"].concat(_toConsumableArray(copy)));
      } else if (logLevel >= LogLevel.Errors) {
        var _console3;

        (_console3 = console).error.apply(_console3, ["ERROR"].concat(_toConsumableArray(copy)));
      }
    }
  }, {
    key: "logLevel",
    get: function get() {
      return this._logLevel;
    },
    set: function set(logLevel) {
      this._logLevel = logLevel;
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Logger());

/***/ }),

/***/ "./src/lib/peerjs/mediaconnection.js":
/*!*******************************************!*\
  !*** ./src/lib/peerjs/mediaconnection.js ***!
  \*******************************************/
/*! exports provided: MediaConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaConnection", function() { return MediaConnection; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/peerjs/util.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
/* harmony import */ var _negotiator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negotiator */ "./src/lib/peerjs/negotiator.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/lib/peerjs/enums.js");
/* harmony import */ var _baseconnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baseconnection */ "./src/lib/peerjs/baseconnection.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Wraps the streaming interface between two Peers.
 */

var MediaConnection =
/*#__PURE__*/
function (_BaseConnection) {
  _inherits(MediaConnection, _BaseConnection);

  _createClass(MediaConnection, [{
    key: "type",
    get: function get() {
      return _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionType"].Media;
    }
  }, {
    key: "localStream",
    get: function get() {
      return this._localStream;
    }
  }, {
    key: "remoteStream",
    get: function get() {
      return this._remoteStream;
    }
  }]);

  function MediaConnection(peerId, provider, options) {
    var _this;

    _classCallCheck(this, MediaConnection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MediaConnection).call(this, peerId, provider, options));

    _defineProperty(_assertThisInitialized(_this), "_negotiator", void 0);

    _defineProperty(_assertThisInitialized(_this), "_localStream", void 0);

    _defineProperty(_assertThisInitialized(_this), "_remoteStream", void 0);

    _defineProperty(_assertThisInitialized(_this), "connectionId", null);

    _this._localStream = _this.options._stream;
    _this.connectionId = _this.options.connectionId || MediaConnection.ID_PREFIX + _util__WEBPACK_IMPORTED_MODULE_0__["util"].randomToken();
    _this._negotiator = new _negotiator__WEBPACK_IMPORTED_MODULE_2__["Negotiator"](_assertThisInitialized(_this));

    if (_this._localStream) {
      _this._negotiator.startConnection({
        _stream: _this._localStream,
        originator: true
      });
    }

    return _this;
  }

  _createClass(MediaConnection, [{
    key: "addStream",
    value: function addStream(remoteStream) {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Receiving stream", remoteStream);
      this._remoteStream = remoteStream;

      _get(_getPrototypeOf(MediaConnection.prototype), "emit", this).call(this, _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Stream, remoteStream); // Should we call this `open`?

    }
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      var type = message.type;
      var payload = message.payload;

      switch (message.type) {
        case _enums__WEBPACK_IMPORTED_MODULE_3__["ServerMessageType"].Answer:
          // Forward to negotiator
          this._negotiator.handleSDP(type, payload.sdp);

          this._open = true;
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_3__["ServerMessageType"].Candidate:
          this._negotiator.handleCandidate(payload.candidate);

          break;

        default:
          _logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Unrecognized message type:".concat(type, " from peer:").concat(this.peer));
          break;
      }
    }
  }, {
    key: "answer",
    value: function answer(stream, options) {
      if (this._localStream) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
        return;
      }

      this._localStream = stream;

      if (options && options.sdpTransform) {
        this.options.sdpTransform = options.sdpTransform;
      }

      this._negotiator.startConnection(_objectSpread({}, this.options._payload, {
        _stream: stream
      })); // Retrieve lost messages stored because PeerConnection not set up.


      var messages = this.provider._getMessages(this.connectionId);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;
          this.handleMessage(message);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._open = true;
    }
    /**
     * Exposed functionality for users.
     */

    /** Allows user to close connection. */

  }, {
    key: "close",
    value: function close() {
      if (this._negotiator) {
        this._negotiator.cleanup();

        this._negotiator = null;
      }

      this._localStream = null;
      this._remoteStream = null;

      if (this.provider) {
        this.provider._removeConnection(this);

        this.provider = null;
      }

      if (this.options && this.options._stream) {
        this.options._stream = null;
      }

      if (!this.open) {
        return;
      }

      this._open = false;

      _get(_getPrototypeOf(MediaConnection.prototype), "emit", this).call(this, _enums__WEBPACK_IMPORTED_MODULE_3__["ConnectionEventType"].Close);
    }
  }]);

  return MediaConnection;
}(_baseconnection__WEBPACK_IMPORTED_MODULE_4__["BaseConnection"]);

_defineProperty(MediaConnection, "ID_PREFIX", "mc_");

/***/ }),

/***/ "./src/lib/peerjs/negotiator.js":
/*!**************************************!*\
  !*** ./src/lib/peerjs/negotiator.js ***!
  \**************************************/
/*! exports provided: Negotiator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Negotiator", function() { return Negotiator; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/lib/peerjs/util.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/lib/peerjs/enums.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Manages all negotiations between Peers.
 */

var Negotiator =
/*#__PURE__*/
function () {
  function Negotiator(connection) {
    _classCallCheck(this, Negotiator);

    _defineProperty(this, "connection", null);

    this.connection = connection;
  }
  /** Returns a PeerConnection object set up correctly (for data, media). */


  _createClass(Negotiator, [{
    key: "startConnection",
    value: function startConnection(options) {
      var peerConnection = this._startPeerConnection(); // Set the connection's PC.


      this.connection.peerConnection = peerConnection;

      if (this.connection.type === _enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionType"].Media && options._stream) {
        this._addTracksToConnection(options._stream, peerConnection);
      } // What do we need to do now?


      if (options.originator) {
        if (this.connection.type === _enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionType"].Data) {
          var dataConnection = this.connection;
          var config = {
            ordered: !!options.reliable
          };
          var dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
          dataConnection.initialize(dataChannel);
        }

        this._makeOffer();
      } else {
        this.handleSDP("OFFER", options.sdp);
      }
    }
    /** Start a PC. */

  }, {
    key: "_startPeerConnection",
    value: function _startPeerConnection() {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Creating RTCPeerConnection.");
      var peerConnection = new RTCPeerConnection(this.connection.config || this.connection.provider.options.config);

      this._setupListeners(peerConnection);

      return peerConnection;
    }
    /** Set up various WebRTC listeners. */

  }, {
    key: "_setupListeners",
    value: function _setupListeners(peerConnection) {
      var _this = this;

      var peerId = this.connection.peer;
      var connectionId = this.connection.connectionId;
      var connectionType = this.connection.type;
      var provider = this.connection.provider; // ICE CANDIDATES.

      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Listening for ICE candidates.");

      peerConnection.onicecandidate = function (evt) {
        if (!evt.candidate || !evt.candidate.candidate) return;
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Received ICE candidates for ".concat(peerId, ":"), evt.candidate);
        provider.socket.send({
          type: _enums__WEBPACK_IMPORTED_MODULE_2__["ServerMessageType"].Candidate,
          payload: {
            candidate: evt.candidate,
            type: connectionType,
            connectionId: connectionId
          },
          dst: peerId
        });
      };

      peerConnection.oniceconnectionstatechange = function () {
        switch (peerConnection.iceConnectionState) {
          case "failed":
            _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("iceConnectionState is failed, closing connections to " + peerId);

            _this.connection.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionEventType"].Error, new Error("Negotiation of connection to " + peerId + " failed."));

            _this.connection.close();

            break;

          case "closed":
            _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("iceConnectionState is closed, closing connections to " + peerId);

            _this.connection.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionEventType"].Error, new Error("Connection to " + peerId + " closed."));

            _this.connection.close();

            break;

          case "disconnected":
            _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("iceConnectionState is disconnected, closing connections to " + peerId);

            _this.connection.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionEventType"].Error, new Error("Connection to " + peerId + " disconnected."));

            _this.connection.close();

            break;

          case "completed":
            peerConnection.onicecandidate = _util__WEBPACK_IMPORTED_MODULE_0__["util"].noop;
            break;

          default:
            break;
        }

        _this.connection.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionEventType"].IceStateChanged, peerConnection.iceConnectionState);
      }; // DATACONNECTION.


      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Listening for data channel"); // Fired between offer and answer, so options should already be saved
      // in the options hash.

      peerConnection.ondatachannel = function (evt) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Received data channel");
        var dataChannel = evt.channel;
        var connection = provider.getConnection(peerId, connectionId);
        connection.initialize(dataChannel);
      }; // MEDIACONNECTION.


      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Listening for remote stream");

      peerConnection.ontrack = function (evt) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Received remote stream");
        var stream = evt.streams[0];
        var connection = provider.getConnection(peerId, connectionId);

        if (connection.type === _enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionType"].Media) {
          var mediaConnection = connection;

          _this._addStreamToMediaConnection(stream, mediaConnection);
        }
      };
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Cleaning up PeerConnection to " + this.connection.peer);
      var peerConnection = this.connection.peerConnection;

      if (!peerConnection) {
        return;
      }

      this.connection.peerConnection = null; //unsubscribe from all PeerConnection's events

      peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = function () {};

      var peerConnectionNotClosed = peerConnection.signalingState !== "closed";
      var dataChannelNotClosed = false;

      if (this.connection.type === _enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionType"].Data) {
        var dataConnection = this.connection;
        var dataChannel = dataConnection.dataChannel;

        if (dataChannel) {
          dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
        }
      }

      if (peerConnectionNotClosed || dataChannelNotClosed) {
        peerConnection.close();
      }
    }
  }, {
    key: "_makeOffer",
    value: function () {
      var _makeOffer2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var peerConnection, provider, offer, payload, dataConnection;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                peerConnection = this.connection.peerConnection;
                provider = this.connection.provider;
                _context.prev = 2;
                _context.next = 5;
                return peerConnection.createOffer(this.connection.options.constraints);

              case 5:
                offer = _context.sent;
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Created offer.");

                if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === 'function') {
                  offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
                }

                _context.prev = 8;
                _context.next = 11;
                return peerConnection.setLocalDescription(offer);

              case 11:
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Set localDescription:", offer, "for:".concat(this.connection.peer));
                payload = {
                  sdp: offer,
                  type: this.connection.type,
                  connectionId: this.connection.connectionId,
                  metadata: this.connection.metadata,
                  browser: _util__WEBPACK_IMPORTED_MODULE_0__["util"].browser,
                  config: this.connection.provider.options.config
                };

                if (this.connection.type === _enums__WEBPACK_IMPORTED_MODULE_2__["ConnectionType"].Data) {
                  dataConnection = this.connection;
                  payload = _objectSpread({}, payload, {
                    label: dataConnection.label,
                    reliable: dataConnection.reliable,
                    serialization: dataConnection.serialization
                  });
                }

                provider.socket.send({
                  type: _enums__WEBPACK_IMPORTED_MODULE_2__["ServerMessageType"].Offer,
                  payload: payload,
                  dst: this.connection.peer
                });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](8);

                // TODO: investigate why _makeOffer is being called from the answer
                if (_context.t0 !== "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
                  provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context.t0);
                  _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to setLocalDescription, ", _context.t0);
                }

              case 20:
                _context.next = 26;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](2);
                provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context.t1);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to createOffer, ", _context.t1);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 22], [8, 17]]);
      }));

      function _makeOffer() {
        return _makeOffer2.apply(this, arguments);
      }

      return _makeOffer;
    }()
  }, {
    key: "_makeAnswer",
    value: function () {
      var _makeAnswer2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var peerConnection, provider, answer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                peerConnection = this.connection.peerConnection;
                provider = this.connection.provider;
                _context2.prev = 2;
                _context2.next = 5;
                return peerConnection.createAnswer();

              case 5:
                answer = _context2.sent;
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Created answer.");

                if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === 'function') {
                  answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
                }

                _context2.prev = 8;
                _context2.next = 11;
                return peerConnection.setLocalDescription(answer);

              case 11:
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Set localDescription:", answer, "for:".concat(this.connection.peer));
                provider.socket.send({
                  type: _enums__WEBPACK_IMPORTED_MODULE_2__["ServerMessageType"].Answer,
                  payload: {
                    sdp: answer,
                    type: this.connection.type,
                    connectionId: this.connection.connectionId,
                    browser: _util__WEBPACK_IMPORTED_MODULE_0__["util"].browser
                  },
                  dst: this.connection.peer
                });
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](8);
                provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context2.t0);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to setLocalDescription, ", _context2.t0);

              case 19:
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t1 = _context2["catch"](2);
                provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context2.t1);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to create answer, ", _context2.t1);

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 21], [8, 15]]);
      }));

      function _makeAnswer() {
        return _makeAnswer2.apply(this, arguments);
      }

      return _makeAnswer;
    }()
    /** Handle an SDP. */

  }, {
    key: "handleSDP",
    value: function () {
      var _handleSDP = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(type, sdp) {
        var peerConnection, provider, self;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                sdp = new RTCSessionDescription(sdp);
                peerConnection = this.connection.peerConnection;
                provider = this.connection.provider;
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Setting remote description", sdp);
                self = this;
                _context3.prev = 5;
                _context3.next = 8;
                return peerConnection.setRemoteDescription(sdp);

              case 8:
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Set remoteDescription:".concat(type, " for:").concat(this.connection.peer));

                if (!(type === "OFFER")) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 12;
                return self._makeAnswer();

              case 12:
                _context3.next = 18;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](5);
                provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context3.t0);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to setRemoteDescription, ", _context3.t0);

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 14]]);
      }));

      function handleSDP(_x, _x2) {
        return _handleSDP.apply(this, arguments);
      }

      return handleSDP;
    }()
    /** Handle a candidate. */

  }, {
    key: "handleCandidate",
    value: function () {
      var _handleCandidate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(ice) {
        var candidate, sdpMLineIndex, sdpMid, peerConnection, provider;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("handleCandidate:", ice);
                candidate = ice.candidate;
                sdpMLineIndex = ice.sdpMLineIndex;
                sdpMid = ice.sdpMid;
                peerConnection = this.connection.peerConnection;
                provider = this.connection.provider;
                _context4.prev = 6;
                _context4.next = 9;
                return peerConnection.addIceCandidate(new RTCIceCandidate({
                  sdpMid: sdpMid,
                  sdpMLineIndex: sdpMLineIndex,
                  candidate: candidate
                }));

              case 9:
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Added ICE candidate for:".concat(this.connection.peer));
                _context4.next = 16;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](6);
                provider.emitError(_enums__WEBPACK_IMPORTED_MODULE_2__["PeerErrorType"].WebRTC, _context4.t0);
                _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Failed to handleCandidate, ", _context4.t0);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[6, 12]]);
      }));

      function handleCandidate(_x3) {
        return _handleCandidate.apply(this, arguments);
      }

      return handleCandidate;
    }()
  }, {
    key: "_addTracksToConnection",
    value: function _addTracksToConnection(stream, peerConnection) {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("add tracks from stream ".concat(stream.id, " to peer connection"));

      if (!peerConnection.addTrack) {
        return _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
      }

      stream.getTracks().forEach(function (track) {
        peerConnection.addTrack(track, stream);
      });
    }
  }, {
    key: "_addStreamToMediaConnection",
    value: function _addStreamToMediaConnection(stream, mediaConnection) {
      _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("add stream ".concat(stream.id, " to media connection ").concat(mediaConnection.connectionId));
      mediaConnection.addStream(stream);
    }
  }]);

  return Negotiator;
}();

/***/ }),

/***/ "./src/lib/peerjs/peer.js":
/*!********************************!*\
  !*** ./src/lib/peerjs/peer.js ***!
  \********************************/
/*! exports provided: Peer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peer", function() { return Peer; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/lib/peerjs/util.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket */ "./src/lib/peerjs/socket.js");
/* harmony import */ var _mediaconnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mediaconnection */ "./src/lib/peerjs/mediaconnection.js");
/* harmony import */ var _dataconnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dataconnection */ "./src/lib/peerjs/dataconnection.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "./src/lib/peerjs/enums.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./src/lib/peerjs/api.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * A peer who can initiate connections with other peers.
 */

var Peer =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Peer, _EventEmitter);

  _createClass(Peer, [{
    key: "id",
    // States.
    // Connections have been killed
    // Connection to PeerServer killed but P2P connections still active
    // Sockets and such are not yet open.
    // All connections for this peer.
    // src => [list of messages]
    get: function get() {
      return this._id;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }, {
    key: "open",
    get: function get() {
      return this._open;
    }
  }, {
    key: "socket",
    get: function get() {
      return this._socket;
    }
    /**
     * @deprecated 
     * Return type will change from Object to Map<string,[]> 
     */

  }, {
    key: "connections",
    get: function get() {
      var plainConnections = Object.create(null);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._connections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              k = _step$value[0],
              v = _step$value[1];

          plainConnections[k] = v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return plainConnections;
    }
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
  }, {
    key: "disconnected",
    get: function get() {
      return this._disconnected;
    }
  }]);

  function Peer(id, options) {
    var _this;

    _classCallCheck(this, Peer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Peer).call(this));

    _defineProperty(_assertThisInitialized(_this), "_options", void 0);

    _defineProperty(_assertThisInitialized(_this), "_api", void 0);

    _defineProperty(_assertThisInitialized(_this), "_socket", void 0);

    _defineProperty(_assertThisInitialized(_this), "_id", void 0);

    _defineProperty(_assertThisInitialized(_this), "_lastServerId", void 0);

    _defineProperty(_assertThisInitialized(_this), "_destroyed", false);

    _defineProperty(_assertThisInitialized(_this), "_disconnected", false);

    _defineProperty(_assertThisInitialized(_this), "_open", false);

    _defineProperty(_assertThisInitialized(_this), "_connections", new Map());

    _defineProperty(_assertThisInitialized(_this), "_lostMessages", new Map());

    var userId; // Deal with overloading

    if (id && id.constructor === Object) {
      options = id;
    } else if (id) {
      userId = id.toString();
    } // Configurize options


    options = _objectSpread({
      debug: 0,
      // 1: Errors, 2: Warnings, 3: All logs
      host: _util__WEBPACK_IMPORTED_MODULE_1__["util"].CLOUD_HOST,
      port: _util__WEBPACK_IMPORTED_MODULE_1__["util"].CLOUD_PORT,
      path: "/",
      key: Peer.DEFAULT_KEY,
      token: _util__WEBPACK_IMPORTED_MODULE_1__["util"].randomToken(),
      config: _util__WEBPACK_IMPORTED_MODULE_1__["util"].defaultConfig
    }, options);
    _this._options = options; // Detect relative URL host.

    if (_this._options.host === "/") {
      _this._options.host = window.location.hostname;
    } // Set path correctly.


    if (_this._options.path) {
      if (_this._options.path[0] !== "/") {
        _this._options.path = "/" + _this._options.path;
      }

      if (_this._options.path[_this._options.path.length - 1] !== "/") {
        _this._options.path += "/";
      }
    } // Set whether we use SSL to same as current host


    if (_this._options.secure === undefined && _this._options.host !== _util__WEBPACK_IMPORTED_MODULE_1__["util"].CLOUD_HOST) {
      _this._options.secure = _util__WEBPACK_IMPORTED_MODULE_1__["util"].isSecure();
    } else if (_this._options.host === _util__WEBPACK_IMPORTED_MODULE_1__["util"].CLOUD_HOST) {
      _this._options.secure = true;
    } // Set a custom log function if present


    if (_this._options.logFunction) {
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].setLogFunction(_this._options.logFunction);
    }

    _logger__WEBPACK_IMPORTED_MODULE_2__["default"].logLevel = _this._options.debug || 0;
    _this._api = new _api__WEBPACK_IMPORTED_MODULE_7__["API"](options);
    _this._socket = _this._createServerConnection(); // Sanity checks
    // Ensure WebRTC supported

    if (!_util__WEBPACK_IMPORTED_MODULE_1__["util"].supports.audioVideo && !_util__WEBPACK_IMPORTED_MODULE_1__["util"].supports.data) {
      _this._delayedAbort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].BrowserIncompatible, "The current browser does not support WebRTC");

      return _possibleConstructorReturn(_this);
    } // Ensure alphanumeric id


    if (!!userId && !_util__WEBPACK_IMPORTED_MODULE_1__["util"].validateId(userId)) {
      _this._delayedAbort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].InvalidID, "ID \"".concat(userId, "\" is invalid"));

      return _possibleConstructorReturn(_this);
    }

    if (userId) {
      _this._initialize(userId);
    } else {
      _this._api.retrieveId().then(function (id) {
        return _this._initialize(id);
      }).catch(function (error) {
        return _this._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].ServerError, error);
      });
    }

    return _this;
  }

  _createClass(Peer, [{
    key: "_createServerConnection",
    value: function _createServerConnection() {
      var _this2 = this;

      var socket = new _socket__WEBPACK_IMPORTED_MODULE_3__["Socket"](this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
      socket.on(_enums__WEBPACK_IMPORTED_MODULE_6__["SocketEventType"].Message, function (data) {
        _this2._handleMessage(data);
      });
      socket.on(_enums__WEBPACK_IMPORTED_MODULE_6__["SocketEventType"].Error, function (error) {
        _this2._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].SocketError, error);
      });
      socket.on(_enums__WEBPACK_IMPORTED_MODULE_6__["SocketEventType"].Disconnected, function () {
        if (_this2.disconnected) {
          return;
        }

        _this2.emitError(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].Network, "Lost connection to server.");

        _this2.disconnect();
      });
      socket.on(_enums__WEBPACK_IMPORTED_MODULE_6__["SocketEventType"].Close, function () {
        if (_this2.disconnected) {
          return;
        }

        _this2._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].SocketClosed, "Underlying socket is already closed.");
      });
      return socket;
    }
    /** Initialize a connection with the server. */

  }, {
    key: "_initialize",
    value: function _initialize(id) {
      this._id = id;
      this.socket.start(id, this._options.token);
    }
    /** Handles messages from the server. */

  }, {
    key: "_handleMessage",
    value: function _handleMessage(message) {
      var type = message.type;
      var payload = message.payload;
      var peerId = message.src;

      switch (type) {
        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].Open:
          // The connection to the server is open.
          this._lastServerId = this.id;
          this._open = true;
          this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Open, this.id);
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].Error:
          // Server error.
          this._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].ServerError, payload.msg);

          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].IdTaken:
          // The selected ID is taken.
          this._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].UnavailableID, "ID \"".concat(this.id, "\" is taken"));

          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].InvalidKey:
          // The given API key cannot be found.
          this._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].InvalidKey, "API KEY \"".concat(this._options.key, "\" is invalid"));

          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].Leave:
          // Another peer has closed its connection to this peer.
          _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("Received leave message from ".concat(peerId));

          this._cleanupPeer(peerId);

          this._connections.delete(peerId);

          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].Expire:
          // The offer sent to a peer has expired without response.
          this.emitError(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].PeerUnavailable, "Could not connect to peer ".concat(peerId));
          break;

        case _enums__WEBPACK_IMPORTED_MODULE_6__["ServerMessageType"].Offer:
          {
            // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
            var connectionId = payload.connectionId;
            var connection = this.getConnection(peerId, connectionId);

            if (connection) {
              connection.close();
              _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("Offer received for existing Connection ID:".concat(connectionId));
            } // Create a new connection.


            if (payload.type === _enums__WEBPACK_IMPORTED_MODULE_6__["ConnectionType"].Media) {
              connection = new _mediaconnection__WEBPACK_IMPORTED_MODULE_4__["MediaConnection"](peerId, this, {
                connectionId: connectionId,
                _payload: payload,
                metadata: payload.metadata,
                config: payload.config
              });

              this._addConnection(peerId, connection);

              this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Call, connection);
            } else if (payload.type === _enums__WEBPACK_IMPORTED_MODULE_6__["ConnectionType"].Data) {
              connection = new _dataconnection__WEBPACK_IMPORTED_MODULE_5__["DataConnection"](peerId, this, {
                connectionId: connectionId,
                _payload: payload,
                metadata: payload.metadata,
                label: payload.label,
                serialization: payload.serialization,
                reliable: payload.reliable,
                config: payload.config
              });

              this._addConnection(peerId, connection);

              this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Connection, connection);
            } else {
              _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("Received malformed connection type:".concat(payload.type));
              return;
            } // Find messages.


            var messages = this._getMessages(connectionId);

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = messages[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _message = _step2.value;
                connection.handleMessage(_message);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            break;
          }

        default:
          {
            if (!payload) {
              _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("You received a malformed message from ".concat(peerId, " of type ").concat(type));
              return;
            }

            var _connectionId = payload.connectionId;

            var _connection = this.getConnection(peerId, _connectionId);

            if (_connection && _connection.peerConnection) {
              // Pass it on.
              _connection.handleMessage(message);
            } else if (_connectionId) {
              // Store for possible later use
              this._storeMessage(_connectionId, message);
            } else {
              _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("You received an unrecognized message:", message);
            }

            break;
          }
      }
    }
    /** Stores messages without a set up connection, to be claimed later. */

  }, {
    key: "_storeMessage",
    value: function _storeMessage(connectionId, message) {
      if (!this._lostMessages.has(connectionId)) {
        this._lostMessages.set(connectionId, []);
      }

      this._lostMessages.get(connectionId).push(message);
    }
    /** Retrieve messages from lost message store */
    //TODO Change it to private

  }, {
    key: "_getMessages",
    value: function _getMessages(connectionId) {
      var messages = this._lostMessages.get(connectionId);

      if (messages) {
        this._lostMessages.delete(connectionId);

        return messages;
      }

      return [];
    }
    /**
     * Returns a DataConnection to the specified peer. See documentation for a
     * complete list of options.
     */

  }, {
    key: "connect",
    value: function connect(peer) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.disconnected) {
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("You cannot connect to a new Peer because you called " + ".disconnect() on this Peer and ended your connection with the " + "server. You can create a new Peer to reconnect, or call reconnect " + "on this peer if you believe its ID to still be available.");
        this.emitError(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }

      var dataConnection = new _dataconnection__WEBPACK_IMPORTED_MODULE_5__["DataConnection"](peer, this, options);

      this._addConnection(peer, dataConnection);

      return dataConnection;
    }
    /**
     * Returns a MediaConnection to the specified peer. See documentation for a
     * complete list of options.
     */

  }, {
    key: "call",
    value: function call(peer, stream, options) {
      if (this.disconnected) {
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn("You cannot connect to a new Peer because you called " + ".disconnect() on this Peer and ended your connection with the " + "server. You can create a new Peer to reconnect.");
        this.emitError(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }

      if (!stream) {
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
        return;
      }

      options._stream = stream;
      var mediaConnection = new _mediaconnection__WEBPACK_IMPORTED_MODULE_4__["MediaConnection"](peer, this, options);

      this._addConnection(peer, mediaConnection);

      return mediaConnection;
    }
    /** Add a data/media connection to this peer. */

  }, {
    key: "_addConnection",
    value: function _addConnection(peerId, connection) {
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("add connection ".concat(connection.type, ":").concat(connection.connectionId, " to peerId:").concat(peerId));

      if (!this._connections.has(peerId)) {
        this._connections.set(peerId, []);
      }

      this._connections.get(peerId).push(connection);
    } //TODO should be private

  }, {
    key: "_removeConnection",
    value: function _removeConnection(connection) {
      var connections = this._connections.get(connection.peer);

      if (connections) {
        var index = connections.indexOf(connection);

        if (index !== -1) {
          connections.splice(index, 1);
        }
      } //remove from lost messages


      this._lostMessages.delete(connection.connectionId);
    }
    /** Retrieve a data/media connection for this peer. */

  }, {
    key: "getConnection",
    value: function getConnection(peerId, connectionId) {
      var connections = this._connections.get(peerId);

      if (!connections) {
        return null;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = connections[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var connection = _step3.value;

          if (connection.connectionId === connectionId) {
            return connection;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return null;
    }
  }, {
    key: "_delayedAbort",
    value: function _delayedAbort(type, message) {
      var _this3 = this;

      setTimeout(function () {
        _this3._abort(type, message);
      }, 0);
    }
    /**
     * Emits an error message and destroys the Peer.
     * The Peer is not destroyed if it's in a disconnected state, in which case
     * it retains its disconnected state and its existing connections.
     */

  }, {
    key: "_abort",
    value: function _abort(type, message) {
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("Aborting!");
      this.emitError(type, message);

      if (!this._lastServerId) {
        this.destroy();
      } else {
        this.disconnect();
      }
    }
    /** Emits a typed error message. */

  }, {
    key: "emitError",
    value: function emitError(type, err) {
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("Error:", err);
      var error;

      if (typeof err === "string") {
        error = new Error(err);
      } else {
        error = err;
      }

      error.type = type;
      this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Error, error);
    }
    /**
     * Destroys the Peer: closes all active connections as well as the connection
     *  to the server.
     * Warning: The peer can no longer create or accept connections after being
     *  destroyed.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.destroyed) {
        return;
      }

      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("Destroy peer with ID:".concat(this.id));
      this.disconnect();

      this._cleanup();

      this._destroyed = true;
      this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Close);
    }
    /** Disconnects every connection on this peer. */

  }, {
    key: "_cleanup",
    value: function _cleanup() {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._connections.keys()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var peerId = _step4.value;

          this._cleanupPeer(peerId);

          this._connections.delete(peerId);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.socket.removeAllListeners();
    }
    /** Closes all connections to this peer. */

  }, {
    key: "_cleanupPeer",
    value: function _cleanupPeer(peerId) {
      var connections = this._connections.get(peerId);

      if (!connections) return;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = connections[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var connection = _step5.value;
          connection.close();
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
    /**
     * Disconnects the Peer's connection to the PeerServer. Does not close any
     *  active connections.
     * Warning: The peer can no longer create or accept connections after being
     *  disconnected. It also cannot reconnect to the server.
     */

  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.disconnected) {
        return;
      }

      var currentId = this.id;
      _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("Disconnect peer with ID:".concat(currentId));
      this._disconnected = true;
      this._open = false;
      this.socket.close();
      this._lastServerId = currentId;
      this._id = null;
      this.emit(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerEventType"].Disconnected, currentId);
    }
    /** Attempts to reconnect with the same ID. */

  }, {
    key: "reconnect",
    value: function reconnect() {
      if (this.disconnected && !this.destroyed) {
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].log("Attempting reconnection to server with ID ".concat(this._lastServerId));
        this._disconnected = false;

        this._initialize(this._lastServerId);
      } else if (this.destroyed) {
        throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
      } else if (!this.disconnected && !this.open) {
        // Do nothing. We're still connecting the first time.
        _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("In a hurry? We're still trying to make the initial connection!");
      } else {
        throw new Error("Peer ".concat(this.id, " cannot reconnect because it is not disconnected from the server!"));
      }
    }
    /**
     * Get a list of available peer IDs. If you're running your own server, you'll
     * want to set allow_discovery: true in the PeerServer options. If you're using
     * the cloud server, email team@peerjs.com to get the functionality enabled for
     * your key.
     */

  }, {
    key: "listAllPeers",
    value: function listAllPeers() {
      var _this4 = this;

      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (_) {};

      this._api.listAllPeers().then(function (peers) {
        return cb(peers);
      }).catch(function (error) {
        return _this4._abort(_enums__WEBPACK_IMPORTED_MODULE_6__["PeerErrorType"].ServerError, error);
      });
    }
  }]);

  return Peer;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

_defineProperty(Peer, "DEFAULT_KEY", "peerjs");

/***/ }),

/***/ "./src/lib/peerjs/socket.js":
/*!**********************************!*\
  !*** ./src/lib/peerjs/socket.js ***!
  \**********************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/peerjs/logger.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/lib/peerjs/enums.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * An abstraction on top of WebSockets to provide fastest
 * possible connection for peers.
 */

var Socket =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Socket, _EventEmitter);

  function Socket(secure, host, port, path, key) {
    var _this;

    var pingInterval = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5000;

    _classCallCheck(this, Socket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Socket).call(this));

    _defineProperty(_assertThisInitialized(_this), "_disconnected", true);

    _defineProperty(_assertThisInitialized(_this), "_id", void 0);

    _defineProperty(_assertThisInitialized(_this), "_messagesQueue", []);

    _defineProperty(_assertThisInitialized(_this), "_socket", void 0);

    _defineProperty(_assertThisInitialized(_this), "_wsPingTimer", void 0);

    _defineProperty(_assertThisInitialized(_this), "_baseUrl", void 0);

    _defineProperty(_assertThisInitialized(_this), "pingInterval", null);

    _this.pingInterval = pingInterval;
    _this._disconnected = true;
    _this._messagesQueue = [];
    var wsProtocol = secure ? "wss://" : "ws://";
    _this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
    return _this;
  }

  _createClass(Socket, [{
    key: "start",
    value: function start(id, token) {
      var _this2 = this;

      this._id = id;
      var wsUrl = "".concat(this._baseUrl, "&id=").concat(id, "&token=").concat(token);

      if (!!this._socket || !this._disconnected) {
        return;
      }

      this._socket = new WebSocket(wsUrl);
      this._disconnected = false;

      this._socket.onmessage = function (event) {
        var data;

        try {
          data = JSON.parse(event.data);
          _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Server message received:", data);
        } catch (e) {
          _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Invalid server message", event.data);
          return;
        }

        _this2.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].Message, data);
      };

      this._socket.onclose = function (event) {
        if (_this2._disconnected) {
          return;
        }

        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Socket closed.", event);

        _this2._cleanup();

        _this2._disconnected = true;

        _this2.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].Disconnected);
      }; // Take care of the queue of connections if necessary and make sure Peer knows
      // socket is open.


      this._socket.onopen = function () {
        if (_this2._disconnected) {
          return;
        }

        _this2._sendQueuedMessages();

        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Socket open");

        _this2._scheduleHeartbeat();
      };
    }
  }, {
    key: "_scheduleHeartbeat",
    value: function _scheduleHeartbeat() {
      var _this3 = this;

      this._wsPingTimer = setTimeout(function () {
        _this3._sendHeartbeat();
      }, this.pingInterval);
    }
  }, {
    key: "_sendHeartbeat",
    value: function _sendHeartbeat() {
      if (!this._wsOpen()) {
        _logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Cannot send heartbeat, because socket closed");
        return;
      }

      var message = JSON.stringify({
        type: _enums__WEBPACK_IMPORTED_MODULE_2__["ServerMessageType"].Heartbeat
      });
      this._socket && this._socket.send(message);

      this._scheduleHeartbeat();
    }
    /** Is the websocket currently open? */

  }, {
    key: "_wsOpen",
    value: function _wsOpen() {
      return !!this._socket && this._socket.readyState === 1;
    }
    /** Send queued messages. */

  }, {
    key: "_sendQueuedMessages",
    value: function _sendQueuedMessages() {
      //Create copy of queue and clear it,
      //because send method push the message back to queue if smth will go wrong
      var copiedQueue = _toConsumableArray(this._messagesQueue);

      this._messagesQueue = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = copiedQueue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;
          this.send(message);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /** Exposed send for DC & Peer. */

  }, {
    key: "send",
    value: function send(data) {
      if (this._disconnected) {
        return;
      } // If we didn't get an ID yet, we can't yet send anything so we should queue
      // up these messages.


      if (!this._id) {
        this._messagesQueue.push(data);

        return;
      }

      if (!data.type) {
        this.emit(_enums__WEBPACK_IMPORTED_MODULE_2__["SocketEventType"].Error, "Invalid message");
        return;
      }

      if (!this._wsOpen()) {
        return;
      }

      var message = JSON.stringify(data);
      this._socket && this._socket.send(message);
    }
  }, {
    key: "close",
    value: function close() {
      if (this._disconnected) {
        return;
      }

      this._cleanup();

      this._disconnected = true;
    }
  }, {
    key: "_cleanup",
    value: function _cleanup() {
      if (!!this._socket) {
        this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;

        this._socket.close();

        this._socket = undefined;
      }

      clearTimeout(this._wsPingTimer || null);
    }
  }]);

  return Socket;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

/***/ }),

/***/ "./src/lib/peerjs/supports.js":
/*!************************************!*\
  !*** ./src/lib/peerjs/supports.js ***!
  \************************************/
/*! exports provided: Supports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supports", function() { return Supports; });
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./src/lib/peerjs/adapter.js");
var _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Supports = new (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    _classCallCheck(this, _temp);

    _defineProperty(this, "isIOS", ['iPad', 'iPhone', 'iPod'].includes(navigator.platform));

    _defineProperty(this, "supportedBrowsers", ['firefox', 'chrome', 'safari']);

    _defineProperty(this, "minFirefoxVersion", 59);

    _defineProperty(this, "minChromeVersion", 72);

    _defineProperty(this, "minSafariVersion", 605);
  }

  _createClass(_temp, [{
    key: "isWebRTCSupported",
    value: function isWebRTCSupported() {
      return typeof RTCPeerConnection !== 'undefined';
    }
  }, {
    key: "isBrowserSupported",
    value: function isBrowserSupported() {
      var browser = this.getBrowser();
      var version = this.getVersion();
      var validBrowser = this.supportedBrowsers.includes(browser);
      if (!validBrowser) return false;
      if (browser === 'chrome') return version >= this.minChromeVersion;
      if (browser === 'firefox') return version >= this.minFirefoxVersion;
      if (browser === 'safari') return !this.isIOS && version >= this.minSafariVersion;
      return false;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      return _adapter__WEBPACK_IMPORTED_MODULE_0__["webRTCAdapter"].browserDetails.browser;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return _adapter__WEBPACK_IMPORTED_MODULE_0__["webRTCAdapter"].browserDetails.version || 0;
    }
  }, {
    key: "isUnifiedPlanSupported",
    value: function isUnifiedPlanSupported() {
      var browser = this.getBrowser();
      var version = _adapter__WEBPACK_IMPORTED_MODULE_0__["webRTCAdapter"].browserDetails.version || 0;
      if (browser === 'chrome' && version < 72) return false;
      if (browser === 'firefox' && version >= 59) return true;
      if (!window.RTCRtpTransceiver || !('currentDirection' in window.RTCRtpTransceiver.prototype)) return false;
      var tempPc;
      var supported = false;

      try {
        tempPc = new RTCPeerConnection();
        tempPc.addTransceiver('audio');
        supported = true;
      } catch (e) {} finally {
        if (tempPc) {
          tempPc.close();
        }
      }

      return supported;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Supports: \n    browser:".concat(this.getBrowser(), " \n    version:").concat(this.getVersion(), " \n    isIOS:").concat(this.isIOS, " \n    isWebRTCSupported:").concat(this.isWebRTCSupported(), " \n    isBrowserSupported:").concat(this.isBrowserSupported(), " \n    isUnifiedPlanSupported:").concat(this.isUnifiedPlanSupported());
    }
  }]);

  return _temp;
}(), _temp)();

/***/ }),

/***/ "./src/lib/peerjs/util.js":
/*!********************************!*\
  !*** ./src/lib/peerjs/util.js ***!
  \********************************/
/*! exports provided: util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return util; });
/* harmony import */ var peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peerjs-js-binarypack */ "./node_modules/peerjs-js-binarypack/lib/binarypack.js");
/* harmony import */ var peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports */ "./src/lib/peerjs/supports.js");
var _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_CONFIG = {
  iceServers: [{
    urls: "stun:stun.l.google.com:19302"
  }, {
    urls: "turn:0.peerjs.com:3478",
    username: "peerjs",
    credential: "peerjsp"
  }],
  sdpSemantics: "unified-plan"
};
var util = new (_temp =
/*#__PURE__*/
function () {
  function _temp() {
    _classCallCheck(this, _temp);

    _defineProperty(this, "CLOUD_HOST", "0.peerjs.com");

    _defineProperty(this, "CLOUD_PORT", 443);

    _defineProperty(this, "chunkedBrowsers", {
      Chrome: 1,
      chrome: 1
    });

    _defineProperty(this, "chunkedMTU", 16300);

    _defineProperty(this, "defaultConfig", DEFAULT_CONFIG);

    _defineProperty(this, "browser", _supports__WEBPACK_IMPORTED_MODULE_1__["Supports"].getBrowser());

    _defineProperty(this, "browserVersion", _supports__WEBPACK_IMPORTED_MODULE_1__["Supports"].getVersion());

    _defineProperty(this, "supports", function () {
      var supported = {
        browser: _supports__WEBPACK_IMPORTED_MODULE_1__["Supports"].isBrowserSupported(),
        webRTC: _supports__WEBPACK_IMPORTED_MODULE_1__["Supports"].isWebRTCSupported(),
        audioVideo: false,
        data: false,
        binaryBlob: false,
        reliable: false
      };
      if (!supported.webRTC) return supported;
      var pc;

      try {
        pc = new RTCPeerConnection(DEFAULT_CONFIG);
        supported.audioVideo = true;
        var dc;

        try {
          dc = pc.createDataChannel("_PEERJSTEST", {
            ordered: true
          });
          supported.data = true;
          supported.reliable = !!dc.ordered; // Binary test

          try {
            dc.binaryType = "blob";
            supported.binaryBlob = !_supports__WEBPACK_IMPORTED_MODULE_1__["Supports"].isIOS;
          } catch (e) {}
        } catch (e) {} finally {
          if (dc) {
            dc.close();
          }
        }
      } catch (e) {} finally {
        if (pc) {
          pc.close();
        }
      }

      return supported;
    }());

    _defineProperty(this, "pack", peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__["pack"]);

    _defineProperty(this, "unpack", peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__["unpack"]);

    _defineProperty(this, "_dataCount", 1);
  }

  _createClass(_temp, [{
    key: "noop",
    value: function noop() {}
  }, {
    key: "validateId",
    // Ensure alphanumeric ids
    value: function validateId(id) {
      // Allow empty ids
      return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
    }
  }, {
    key: "chunk",
    value: function chunk(blob) {
      var chunks = [];
      var size = blob.size;
      var total = Math.ceil(size / util.chunkedMTU);
      var index = 0;
      var start = 0;

      while (start < size) {
        var end = Math.min(size, start + util.chunkedMTU);
        var b = blob.slice(start, end);
        var chunk = {
          __peerData: this._dataCount,
          n: index,
          data: b,
          total: total
        };
        chunks.push(chunk);
        start = end;
        index++;
      }

      this._dataCount++;
      return chunks;
    }
  }, {
    key: "blobToArrayBuffer",
    value: function blobToArrayBuffer(blob, cb) {
      var fr = new FileReader();

      fr.onload = function (evt) {
        if (evt.target) {
          cb(evt.target.result);
        }
      };

      fr.readAsArrayBuffer(blob);
      return fr;
    }
  }, {
    key: "binaryStringToArrayBuffer",
    value: function binaryStringToArrayBuffer(binary) {
      var byteArray = new Uint8Array(binary.length);

      for (var i = 0; i < binary.length; i++) {
        byteArray[i] = binary.charCodeAt(i) & 0xff;
      }

      return byteArray.buffer;
    }
  }, {
    key: "randomToken",
    value: function randomToken() {
      return Math.random().toString(36).substr(2);
    }
  }, {
    key: "isSecure",
    value: function isSecure() {
      return window.location.protocol === "https:";
    }
  }]);

  return _temp;
}(), _temp)();

/***/ }),

/***/ "./src/lib/rpturn.js":
/*!***************************!*\
  !*** ./src/lib/rpturn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/lib/utils.js");
/* harmony import */ var _peer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peer */ "./src/lib/peer.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/lib/config.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/lib/api.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var init = function init(_ref) {
  var credentials = _ref.credentials,
      id = _ref.id,
      _ref$turnOnly = _ref.turnOnly,
      turnOnly = _ref$turnOnly === void 0 ? false : _ref$turnOnly,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? 0 : _ref$debug,
      turnServer = _ref.turnServer;
  var signalCredentials = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getUsernamePasswordFromCredentials"])(credentials);
  return getServerList(signalCredentials).then(function (ips) {
    return checkServersLatency(ips);
  }).then(function (res) {
    res = res && res.delay < 4000 ? res : [{
      ip: _config__WEBPACK_IMPORTED_MODULE_2__["default"].fallbackTurnServer
    }];
    return Object(_peer__WEBPACK_IMPORTED_MODULE_1__["createPeer"])(id, turnServer ? {
      ip: turnServer
    } : res, turnOnly, signalCredentials, debug);
  });
};

var getServerList = function getServerList(credentials) {
  return Object(_api__WEBPACK_IMPORTED_MODULE_3__["getServerListApi"])(_config__WEBPACK_IMPORTED_MODULE_2__["default"].apiUrl, {
    key: credentials.key,
    token: credentials.token
  }).then(function (_ref2) {
    var ips = _ref2.data.ips;
    return ips;
  });
};

var checkServersLatency = function checkServersLatency(ips) {
  return Promise.all(ips.map(function (ip) {
    var start = window.performance.now();
    return Object(_api__WEBPACK_IMPORTED_MODULE_3__["createApiGetRequest"])("https://".concat(ip).concat(_config__WEBPACK_IMPORTED_MODULE_2__["default"].healthCheckEndpoint)).then(function () {
      var delay = window.performance.now() - start;
      return {
        delay: delay,
        ip: ip
      };
    }).catch(function () {
      return {
        delay: 2000,
        ip: ip
      };
    });
  })).then(function (latencyList) {
    var min = Math.min.apply(Math, _toConsumableArray(latencyList.map(function (ll) {
      return ll.delay;
    })));
    return latencyList.find(function (ll) {
      return ll.delay === min;
    });
  });
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  init: init
});

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: getUsernamePasswordFromCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsernamePasswordFromCredentials", function() { return getUsernamePasswordFromCredentials; });
var getUsernamePasswordFromCredentials = function getUsernamePasswordFromCredentials(credentials) {
  var data = credentials[0];
  return {
    key: data.username,
    token: data.credential
  };
};



/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/demo/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kliment/WebstormProjects/rpturn/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kliment/WebstormProjects/rpturn/src/demo/index.js */"./src/demo/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map