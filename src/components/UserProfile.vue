<template>
    <div>
        <div class="user-container">
            <div>
                <i class="fa-regular fa-user"></i>
            </div>
            <div class="user-description">
                <slot name="username"></slot>
                <slot name="time"></slot>
                <slot name="karma"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>