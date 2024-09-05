const garantee = new Proxy({"src":"/_astro/garantee.DQkO37Wq.png","width":126,"height":126,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/garantee.png";
							}
							
							return target[name];
						}
					});

export { garantee as default };
