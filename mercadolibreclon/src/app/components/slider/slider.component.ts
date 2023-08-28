import { Component, ElementRef, Renderer2, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  images = [
    './assets/images/sliders/carrusel-1.png',
    './assets/images/sliders/carrusel-2.png',
    './assets/images/sliders/carrusel-3.png',
    './assets/images/sliders/carrusel-4.png'
  ];

  @ViewChild('carouselTrack', { static: true }) carouselTrack!: ElementRef;

  private slideWidth: number = 100; // Ancho de cada diapositiva en porcentaje
  private currentIndex: number = 0;
  private numSlides: number = this.images.length; // Usar el número total de imágenes

  private autoSlideInterval: any; // Para almacenar el intervalo

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.startAutoSlide();
    this.updateSlidePosition();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambiar la diapositiva cada 3 segundos (ajusta según tus preferencias)
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.numSlides;
    this.updateSlidePosition();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.numSlides) % this.numSlides;
    this.updateSlidePosition();
  }

  private updateSlidePosition() {
    const offset = -this.currentIndex * this.slideWidth;
    this.renderer.setStyle(this.carouselTrack.nativeElement, 'transform', `translateX(${offset}%)`);
  }
}
