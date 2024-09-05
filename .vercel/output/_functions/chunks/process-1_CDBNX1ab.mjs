const process1 = new Proxy({"src":"/_astro/process-1.BC0VnQWP.png","width":738,"height":432,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/cleaning/process-1.png";
							}
							
							return target[name];
						}
					});

export { process1 as default };
