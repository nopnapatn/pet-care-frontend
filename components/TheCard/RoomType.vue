<template>
    <div class="flex justify-center py-10">
                <div class="card lg:card-side bg-base-100 shadow-xl h-72 w-3/5">
            <figure class="h-full w-3/6"><img class="object-cover w-full h-full" src="/images/room1.png" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{{ room }}</h2>
                <p>{{ amount }} Room left</p>
                <h3>${{ price }} / night</h3>
                <nuxt-link to="/booking-room">
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Booking</button>
                </div>
                </nuxt-link>
            </div>
        </div>
            </div>
</template>

<script setup lang="ts">
    const props = defineProps(['amount', 'room', 'price' ])

</script>