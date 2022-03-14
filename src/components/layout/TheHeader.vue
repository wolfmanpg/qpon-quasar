<template>
  <header>
    <h1><router-link to="/">Coupon App</router-link></h1>
    <nav>
      <router-link to="/add-coupon">Add Coupon</router-link>
      <router-link to="/coupons">Coupons</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid black;
}

h1 {
  margin: 0;
}

h1 a {
  color: orangered;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

nav a{
    margin-left: 2rem;
}
</style>
