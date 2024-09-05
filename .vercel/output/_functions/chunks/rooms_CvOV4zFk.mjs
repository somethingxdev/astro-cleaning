const rooms = new Proxy({"src":"/_astro/rooms.CuhwTnei.png","width":821,"height":364,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Documents/GitHub/astro-cleaning/src/assets/rooms.png";
							}
							
							return target[name];
						}
					});

export { rooms as default };
