interface ReplicatedStorage extends Instance {
	Baby: RemoteFunction
	TS: Folder & {
		module: ModuleScript
		player: ModuleScript
		["remote-stuff"]: ModuleScript
	}
	CollectibleCoin: Part & {
		FloatingCoinScript: Script
		CollectCoinScript: Script & {
			Sound: Sound
		}
		ThumbnailCamera: Camera
		LeaderboardScript: Script
		SpiningCoinScript: Script
		CoinMesh: SpecialMesh
	}
	PepsiCan: Part
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript
		Promise: ModuleScript
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				ReactLua: Folder & {
					node_modules: Folder & {
						["@jsdotlua"]: Folder & {
							number: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									MAX_SAFE_INTEGER: ModuleScript
									isSafeInteger: ModuleScript
									toExponential: ModuleScript
									isNaN: ModuleScript
									isInteger: ModuleScript
									isFinite: ModuleScript
									MIN_SAFE_INTEGER: ModuleScript
								}
							}
							collections: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									Map: ModuleScript & {
										Map: ModuleScript
										coerceToTable: ModuleScript
										coerceToMap: ModuleScript
									}
									Object: ModuleScript & {
										values: ModuleScript
										assign: ModuleScript
										is: ModuleScript
										seal: ModuleScript
										entries: ModuleScript
										preventExtensions: ModuleScript
										isFrozen: ModuleScript
										keys: ModuleScript
										None: ModuleScript
										freeze: ModuleScript
									}
									Set: ModuleScript
									inspect: ModuleScript
									WeakMap: ModuleScript
									Array: ModuleScript & {
										flat: ModuleScript
										indexOf: ModuleScript
										every: ModuleScript
										slice: ModuleScript
										sort: ModuleScript
										shift: ModuleScript
										map: ModuleScript
										isArray: ModuleScript
										findIndex: ModuleScript
										unshift: ModuleScript
										splice: ModuleScript
										filter: ModuleScript
										find: ModuleScript
										forEach: ModuleScript
										reverse: ModuleScript
										includes: ModuleScript
										concat: ModuleScript
										from: ModuleScript & {
											fromArray: ModuleScript
											fromSet: ModuleScript
											fromMap: ModuleScript
											fromString: ModuleScript
										}
										join: ModuleScript
										flatMap: ModuleScript
										reduce: ModuleScript
										some: ModuleScript
									}
								}
							}
							["react-roblox"]: ModuleScript & {
								client: Folder & {
									roblox: Folder & {
										RobloxComponentProps: ModuleScript
										getDefaultInstanceProperty: ModuleScript
										SingleEventManager: ModuleScript
									}
									ReactRobloxHostConfig: ModuleScript
									ReactRobloxRoot: ModuleScript
									ReactRoblox: ModuleScript
									ReactRobloxComponentTree: ModuleScript
									["ReactRobloxHostTypes.roblox"]: ModuleScript
									ReactRobloxComponent: ModuleScript
								}
								["ReactReconciler.roblox"]: ModuleScript
							}
							["react-is"]: ModuleScript
							["react-shallow-renderer"]: ModuleScript
							["roact-compat"]: ModuleScript & {
								warnOnce: ModuleScript
								Portal: ModuleScript
								createFragment: ModuleScript
								oneChild: ModuleScript
								setGlobalConfig: ModuleScript
								RoactTree: ModuleScript
							}
							["react-reconciler"]: ModuleScript & {
								ReactRootTags: ModuleScript
								["ReactFiberDevToolsHook.new"]: ModuleScript
								["ReactFiberWorkLoop.new"]: ModuleScript
								ReactTestSelectors: ModuleScript
								["ReactFiberHotReloading.new"]: ModuleScript
								ReactCapturedValue: ModuleScript
								["ReactFiberUnwindWork.new"]: ModuleScript
								["ReactFiberNewContext.new"]: ModuleScript
								["ReactProfilerTimer.new"]: ModuleScript
								ReactInternalTypes: ModuleScript
								["ReactFiber.new"]: ModuleScript
								["ReactFiberCommitWork.new"]: ModuleScript
								ReactFiberTransition: ModuleScript
								forks: Folder & {
									["ReactFiberHostConfig.test"]: ModuleScript
								}
								SchedulingProfiler: ModuleScript
								["ReactStrictModeWarnings.new"]: ModuleScript
								ReactPortal: ModuleScript
								["SchedulerWithReactIntegration.new"]: ModuleScript
								RobloxReactProfiling: ModuleScript
								ReactWorkTags: ModuleScript
								ReactFiberHostConfig: ModuleScript
								ReactTypeOfMode: ModuleScript
								ReactFiberOffscreenComponent: ModuleScript
								["ReactUpdateQueue.new"]: ModuleScript
								ReactFiberLane: ModuleScript
								["ReactFiberClassComponent.new"]: ModuleScript
								ReactHookEffectTags: ModuleScript
								ReactFiberWorkInProgress: ModuleScript
								ReactFiberTreeReflection: ModuleScript
								["ReactChildFiber.new"]: ModuleScript
								MaxInts: ModuleScript
								["ReactFiberLazyComponent.new"]: ModuleScript
								ReactFiberErrorDialog: ModuleScript
								["ReactFiberBeginWork.new"]: ModuleScript
								ReactFiberFlags: ModuleScript
								DebugTracing: ModuleScript
								ReactFiberErrorLogger: ModuleScript
								["ReactFiberHooks.new"]: ModuleScript
								["ReactFiberSchedulerPriorities.roblox"]: ModuleScript
								["ReactFiberHydrationContext.new"]: ModuleScript
								ReactFiberReconciler: ModuleScript
								["ReactFiberContext.new"]: ModuleScript
								["ReactFiberSuspenseContext.new"]: ModuleScript
								["ReactFiberStack.new"]: ModuleScript
								["ReactFiberHostContext.new"]: ModuleScript
								["ReactMutableSource.new"]: ModuleScript
								ReactCurrentFiber: ModuleScript
								ReactFiberComponentStack: ModuleScript
								["ReactFiberSuspenseComponent.new"]: ModuleScript
								["ReactFiberCompleteWork.new"]: ModuleScript
								["ReactFiberReconciler.new"]: ModuleScript
								["ReactFiberRoot.new"]: ModuleScript
								["ReactFiberThrow.new"]: ModuleScript
							}
							math: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									clz32: ModuleScript
								}
							}
							timers: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									makeIntervalImpl: ModuleScript
									makeTimerImpl: ModuleScript
								}
							}
							["react-test-renderer"]: ModuleScript & {
								ReactTestRenderer: ModuleScript
								roblox: Folder & {
									RobloxComponentProps: ModuleScript
								}
								ReactTestHostConfig: ModuleScript
							}
							shared: ModuleScript & {
								["UninitializedState.roblox"]: ModuleScript
								console: ModuleScript
								ReactComponentStackFrame: ModuleScript
								invariant: ModuleScript
								ReactTypes: ModuleScript
								objectIs: ModuleScript
								ReactInstanceMap: ModuleScript
								["Type.roblox"]: ModuleScript
								["ConsolePatchingDev.roblox"]: ModuleScript
								["ErrorHandling.roblox"]: ModuleScript
								ReactFeatureFlags: ModuleScript
								ReactElementType: ModuleScript
								shallowEqual: ModuleScript
								isValidElementType: ModuleScript
								invokeGuardedCallbackImpl: ModuleScript
								getComponentName: ModuleScript
								formatProdErrorMessage: ModuleScript
								PropMarkers: Folder & {
									Change: ModuleScript
									Event: ModuleScript
									Tag: ModuleScript
								}
								consoleWithStackDev: ModuleScript
								ReactErrorUtils: ModuleScript
								["enqueueTask.roblox"]: ModuleScript
								checkPropTypes: ModuleScript
								ReactSharedInternals: ModuleScript & {
									ReactDebugCurrentFrame: ModuleScript
									ReactCurrentOwner: ModuleScript
									ReactCurrentDispatcher: ModuleScript
									IsSomeRendererActing: ModuleScript
									ReactCurrentBatchConfig: ModuleScript
								}
								ReactVersion: ModuleScript
								ReactSymbols: ModuleScript
								["flowtypes.roblox"]: ModuleScript
								["Symbol.roblox"]: ModuleScript
								ExecutionEnvironment: ModuleScript
								ReactFiberHostConfig: ModuleScript & {
									WithNoPersistence: ModuleScript
									WithNoHydration: ModuleScript
									WithNoTestSelectors: ModuleScript
								}
							}
							string: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									endsWith: ModuleScript
									indexOf: ModuleScript
									lastIndexOf: ModuleScript
									trimStart: ModuleScript
									trim: ModuleScript
									findOr: ModuleScript
									substr: ModuleScript
									slice: ModuleScript
									startsWith: ModuleScript
									charCodeAt: ModuleScript
									split: ModuleScript
									trimEnd: ModuleScript
									includes: ModuleScript
								}
							}
							promise: Folder & {
								lib: ModuleScript
								["package"]: ModuleScript
							}
							["luau-polyfill"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									Promise: ModuleScript
									["extends"]: ModuleScript
									AssertionError: ModuleScript & {
										["AssertionError.global"]: ModuleScript
									}
									Error: ModuleScript & {
										["Error.global"]: ModuleScript
									}
									encodeURIComponent: ModuleScript
								}
							}
							["instance-of"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									["instanceof"]: ModuleScript
								}
							}
							["es7-types"]: Folder & {
								["package"]: ModuleScript
								src: ModuleScript
							}
							console: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									makeConsoleImpl: ModuleScript
								}
							}
							["react-devtools-extensions"]: ModuleScript & {
								backend: ModuleScript
							}
							["react-devtools-shared"]: ModuleScript & {
								["jest.config"]: ModuleScript
								utils: ModuleScript
								bridge: ModuleScript
								constants: ModuleScript
								hook: ModuleScript
								["clipboardjs.mock"]: ModuleScript
								events: ModuleScript
								hydration: ModuleScript
								devtools: ModuleScript & {
									views: Folder & {
										Profiler: Folder & {
											utils: ModuleScript
											FlamegraphChartBuilder: ModuleScript
											CommitTreeBuilder: ModuleScript
											RankedChartBuilder: ModuleScript
											InteractionsChartBuilder: ModuleScript
											types: ModuleScript
										}
										Components: Folder & {
											types: ModuleScript
										}
									}
									utils: ModuleScript
									ProfilingCache: ModuleScript
									cache: ModuleScript
									types: ModuleScript
									store: ModuleScript
									ProfilerStore: ModuleScript
								}
								storage: ModuleScript
								backend: ModuleScript & {
									utils: ModuleScript
									NativeStyleEditor: Folder & {
										types: ModuleScript
									}
									ReactSymbols: ModuleScript
									renderer: ModuleScript
									agent: ModuleScript
									console: ModuleScript
									types: ModuleScript
								}
								types: ModuleScript
							}
							scheduler: ModuleScript & {
								SchedulerPriorities: ModuleScript
								TracingSubscriptions: ModuleScript
								SchedulerMinHeap: ModuleScript
								forks: Folder & {
									["SchedulerHostConfig.default"]: ModuleScript
									["SchedulerHostConfig.mock"]: ModuleScript
								}
								Tracing: ModuleScript
								SchedulerHostConfig: ModuleScript
								unstable_mock: ModuleScript
								SchedulerProfiling: ModuleScript
								Scheduler: ModuleScript
								SchedulerFeatureFlags: ModuleScript
							}
							react: ModuleScript & {
								["None.roblox"]: ModuleScript
								ReactLazy: ModuleScript
								ReactElementValidator: ModuleScript
								["createSignal.roblox"]: ModuleScript
								ReactForwardRef: ModuleScript
								ReactElement: ModuleScript
								ReactContext: ModuleScript
								ReactBaseClasses: ModuleScript
								ReactNoopUpdateQueue: ModuleScript
								ReactMutableSource: ModuleScript
								ReactCreateRef: ModuleScript
								ReactMemo: ModuleScript
								React: ModuleScript
								["ReactBinding.roblox"]: ModuleScript
								ReactHooks: ModuleScript
								ReactChildren: ModuleScript
							}
							["react-cache"]: ModuleScript & {
								LRU: ModuleScript
								ReactCacheOld: ModuleScript
							}
							boolean: Folder & {
								["package"]: ModuleScript
								src: ModuleScript & {
									toJSBoolean: ModuleScript
								}
							}
							ReactDebugTools: ModuleScript & {
								ReactDebugTools: ModuleScript
								ReactDebugHooks: ModuleScript
							}
						}
						commander: Folder & {
							["package"]: ModuleScript
							["package-support"]: ModuleScript
							lib: Folder
							typings: Folder
						}
						[".luau-aliases"]: Folder & {
							["symbol-luau"]: ModuleScript
							["@jsdotlua"]: Folder & {
								number: ModuleScript
								console: ModuleScript
								["react-roblox"]: ModuleScript
								["react-is"]: ModuleScript
								["instance-of"]: ModuleScript
								["react-cache"]: ModuleScript
								["es7-types"]: ModuleScript
								math: ModuleScript
								["react-debug-tools"]: ModuleScript
								["react-test-renderer"]: ModuleScript
								promise: ModuleScript
								timers: ModuleScript
								string: ModuleScript
								shared: ModuleScript
								scheduler: ModuleScript
								["roact-compat"]: ModuleScript
								["react-reconciler"]: ModuleScript
								["react-devtools-extensions"]: ModuleScript
								["react-shallow-renderer"]: ModuleScript
								collections: ModuleScript
								react: ModuleScript
								["react-devtools-shared"]: ModuleScript
								boolean: ModuleScript
								["luau-polyfill"]: ModuleScript
							}
						}
						["symbol-luau"]: Folder & {
							["package"]: ModuleScript
							src: ModuleScript & {
								["Registry.global"]: ModuleScript
								Symbol: ModuleScript
							}
							LICENSE: StringValue
						}
						npmluau: Folder & {
							["package"]: ModuleScript
							src: Folder
							["luau-types-re-export"]: Folder & {
								pkg: Folder & {
									["package"]: ModuleScript
								}
							}
							LICENSE: StringValue
						}
						walkdir: Folder & {
							["package"]: ModuleScript
							test: Folder & {
								comparison: Folder & {
									["package"]: ModuleScript
								}
								dir: Folder & {
									["nested-symlink"]: Folder
									foo: Folder & {
										a: Folder & {
											b: Folder & {
												c: Folder
											}
										}
									}
									symlinks: Folder & {
										dir1: Folder
										dir2: Folder
									}
								}
							}
						}
						[".bin"]: Folder
					}
					ReactShallowRenderer: ModuleScript
					ReactRoblox: ModuleScript
					ReactDevtoolsShared: ModuleScript
					ReactIs: ModuleScript
					ReactDebugTools: ModuleScript
					ReactReconciler: ModuleScript
					ReactDevtoolsExtensions: ModuleScript
					Scheduler: ModuleScript
					ReactTestRenderer: ModuleScript
					React: ModuleScript
					RoactCompat: ModuleScript
					Shared: ModuleScript
					ReactCache: ModuleScript
				}
				["react-roblox"]: ModuleScript
				react: ModuleScript & {
					tags: ModuleScript
				}
				services: ModuleScript
				["react-devtools-core"]: ModuleScript
				["react-globals"]: ModuleScript
				["compiler-types"]: Folder & {
					types: Folder
				}
				types: Folder & {
					include: Folder & {
						generated: Folder
					}
				}
			}
			["@rbxts-js"]: Folder & {
				Number: ModuleScript & {
					MAX_SAFE_INTEGER: ModuleScript
					isSafeInteger: ModuleScript
					toExponential: ModuleScript
					isNaN: ModuleScript
					isInteger: ModuleScript
					isFinite: ModuleScript
					MIN_SAFE_INTEGER: ModuleScript
				}
				Console: ModuleScript & {
					makeConsoleImpl: ModuleScript
				}
				InstanceOf: ModuleScript & {
					["instanceof"]: ModuleScript
				}
				ReactDevtoolsShared: ModuleScript & {
					["jest.config"]: ModuleScript
					hook: ModuleScript
					bridge: ModuleScript
					constants: ModuleScript
					utils: ModuleScript
					devtools: ModuleScript & {
						views: Folder & {
							Components: Folder & {
								types: ModuleScript
							}
							Profiler: Folder & {
								InteractionsChartBuilder: ModuleScript
								utils: ModuleScript
								CommitTreeBuilder: ModuleScript
								RankedChartBuilder: ModuleScript
								FlamegraphChartBuilder: ModuleScript
								types: ModuleScript
							}
						}
						utils: ModuleScript
						cache: ModuleScript
						types: ModuleScript
						ProfilingCache: ModuleScript
						store: ModuleScript
						ProfilerStore: ModuleScript
					}
					events: ModuleScript
					hydration: ModuleScript
					["clipboardjs.mock"]: ModuleScript
					storage: ModuleScript
					backend: ModuleScript & {
						views: Folder & {
							Highlighter: ModuleScript & {
								Highlighter: ModuleScript
								Overlay: Folder & {
									Overlay: ModuleScript
									OverlayRect: ModuleScript
									OverlayTip: ModuleScript
								}
							}
						}
						console: ModuleScript
						NativeStyleEditor: Folder & {
							types: ModuleScript
						}
						ReactSymbols: ModuleScript
						renderer: ModuleScript
						agent: ModuleScript
						utils: ModuleScript
						types: ModuleScript
					}
					types: ModuleScript
				}
				SafeFlags: ModuleScript
				Scheduler: ModuleScript & {
					SchedulerPriorities: ModuleScript
					NoYield: ModuleScript
					TracingSubscriptions: ModuleScript
					SchedulerMinHeap: ModuleScript
					forks: Folder & {
						["SchedulerHostConfig.mock"]: ModuleScript
						["SchedulerHostConfig.default"]: ModuleScript
					}
					Scheduler: ModuleScript
					Tracing: ModuleScript
					unstable_mock: ModuleScript
					SchedulerProfiling: ModuleScript
					SchedulerHostConfig: ModuleScript
					SchedulerFeatureFlags: ModuleScript
				}
				LuauPolyfill: ModuleScript & {
					Promise: ModuleScript
					["extends"]: ModuleScript
					AssertionError: ModuleScript & {
						["AssertionError.global"]: ModuleScript
					}
					Error: ModuleScript & {
						["Error.global"]: ModuleScript
					}
					encodeURIComponent: ModuleScript
				}
				Math: ModuleScript & {
					clz32: ModuleScript
				}
				ES7Types: ModuleScript
				ReactGlobals: ModuleScript & {
					["ReactGlobals.global"]: ModuleScript
				}
				Promise: ModuleScript
				ReactRoblox: ModuleScript & {
					client: Folder & {
						roblox: Folder & {
							RobloxComponentProps: ModuleScript
							SingleEventManager: ModuleScript
							getDefaultInstanceProperty: ModuleScript
						}
						ReactRobloxHostConfig: ModuleScript
						ReactRobloxRoot: ModuleScript
						ReactRoblox: ModuleScript
						ReactRobloxComponentTree: ModuleScript
						["ReactRobloxHostTypes.roblox"]: ModuleScript
						ReactRobloxComponent: ModuleScript
					}
					["ReactReconciler.roblox"]: ModuleScript
				}
				ReactTelemetry: ModuleScript & {
					customFields: ModuleScript
					reportCounter: ModuleScript
					ReactTelemetry: ModuleScript
				}
				ReactIs: ModuleScript
				Timers: ModuleScript & {
					makeIntervalImpl: ModuleScript
					makeTimerImpl: ModuleScript
				}
				Symbol: ModuleScript & {
					["Registry.global"]: ModuleScript
					Symbol: ModuleScript
				}
				ReactReconciler: ModuleScript & {
					ReactRootTags: ModuleScript
					["ReactFiberDevToolsHook.new"]: ModuleScript
				}
			}
		}
	}
}
