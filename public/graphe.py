import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

# Domaine de définition
x = np.linspace(-5, 5, 200)
y = np.linspace(-5, 5, 200)
X, Y = np.meshgrid(x, y)

# Fonctions
Z1 = np.sin(X) * np.sin(Y)                    # a)
Z2 = X**2 + Y**2                              # b)
Z3 = X**2 - Y**2                              # c)
Z4 = np.exp(-(X**2 + Y**2))                   # d)

R = np.sqrt(X**2 + Y**2)
Z5 = np.ones_like(R)
mask = R > 1e-10
Z5[mask] = np.sin(R[mask]) / R[mask]          # e)

Z6 = X * np.exp(-(X**2 + Y**2))               # f)

functions = [
    (Z1, r"$f_1(x,y)=\sin(x)\sin(y)$"),
    (Z2, r"$f_2(x,y)=x^2+y^2$"),
    (Z3, r"$f_3(x,y)=x^2-y^2$"),
    (Z4, r"$f_4(x,y)=e^{-x^2-y^2}$"),
    (Z5, r"$f_5(x,y)=\frac{\sin(\sqrt{x^2+y^2})}{\sqrt{x^2+y^2}}$"),
    (Z6, r"$f_6(x,y)=xe^{-x^2-y^2}$")
]
colormaps = [
    "viridis",   # f1
    "plasma",    # f2
    "coolwarm",  # f3
    "inferno",   # f4
    "cividis",   # f5
    "turbo"      # f6
]

fig = plt.figure(figsize=(15, 10))

for i, ((Z, title), cmap) in enumerate(zip(functions, colormaps), start=1):
    ax = fig.add_subplot(2, 3, i, projection='3d')

    surf = ax.plot_surface(
        X, Y, Z,
        cmap=cmap,
        edgecolor='none'
    )

    ax.set_title(title, fontsize=12)
    ax.set_xlabel('x')
    ax.set_ylabel('y')
    ax.set_zlabel('z')

    fig.colorbar(surf, ax=ax, shrink=0.5)

plt.tight_layout()
plt.show()