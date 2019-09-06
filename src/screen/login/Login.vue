<template>
  <div>
    <h1>Login aqui</h1>
    <p>{{message}}</p>

    <input type="text" v-model="form.email" @change="validateForm" />
    <br />
    <input type="text" v-model="form.password" @change="validateForm" />
    <button v-on:click="login">Login</button>

    <span>{{error}}</span>
    <span v-if="loading">Cargando...</span>
  </div>
</template>

<script src="./Login.js" ></script>