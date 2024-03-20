<template>
    <div>
        <Header />
        <div class="bg-transparent px-4 py-10">
            <div class="flex justify-center items-center">
                <div class="text-center">
                    <button
                        class="mt-4 bg-black hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-full transition duration-300">News
                        and Insights</button>
                    <h1 class="text-xl sm:text-2xl md:text-3xl pt-2 font-semibold mt-2 text-white">Latest Insights from Leading Voices</h1>
                    <p class="mt-2 text-gray-300">Solving the world's problems through technology wouldn't be possible
                        without our most important invention: the NetSol. Have a look at our talented teams.</p>
                    <p class="text-xs pt-3 tracking-wider text-white underline">View All News</p>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap justify-between gap-3">
            <NewsCard image="/img1.png" title="Leasing Life Conference & Awards" tag="News"
                description="Solving the world’s problems through technology wouldn’t be possible without our most important invention." />
            <NewsCard image="/img2.png" title="Auto Finance Summit 2023" tag="Blog"
                description="Solving the world’s problems through technology wouldn’t be possible without our most important invention." />
            <NewsCard image="/img3.png" title="Careers at Netsol" tag="News"
                description="Solving the world’s problems through technology wouldn’t be possible without our most important invention." />
            <NewsCard image="/img4.png" title="Leasing Life Conference & Awards" tag="Blog"
                description="Solving the world’s problems through technology wouldn’t be possible without our most important invention." />
        </div>
    </div>
</template>
