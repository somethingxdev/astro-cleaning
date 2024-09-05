const steps = new Proxy({"src":"/_astro/steps.CO5q4O9O.png","width":630,"height":364,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/steps.png";
							}
							
							return target[name];
						}
					});

export { steps as default };
