import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: false}) searchTerm: ElementRef;
  products: IProduct[];
  brands: IProductBrand[];
  types: IProductType[];
  shopParams: ShopParams;
  totalCount: number;
  sortOptions = [
    {
      name: 'Alphabetical',
      value: 'name'
    },
    {
      name: 'Price: Low to High',
      value: 'priceAsc'
    },
    {
      name: 'Price: High to Low',
      value: 'priceDesc'
    }
  ];

  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
  }

  ngOnInit(): void {
   this.getProducts(true);
   this.getBrands();
   this.getTypes();
  }

  getProducts(useCache = false){
    this.shopService.getProducts(useCache).subscribe(resp => {
      this.products =  resp.data;
      this.totalCount = resp.count;
    }, error => {
      console.log(error);
    });
  }

  getBrands(){
    this.shopService.getBrands().subscribe(resp => {
      this.brands =  [{id: 0, name: 'All'}, ...resp];
    }, error => {
      console.log(error);
    });
  }

  getTypes(){
    this.shopService.getTypes().subscribe(resp => {
      this.types =  [{id: 0, name: 'All'}, ...resp];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number){
    const params = this.shopService.getShopParams();
    params.brandId =  brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params)
    this.getProducts();
  }

  onTypeSelected(typeId: number){
    const params = this.shopService.getShopParams();
    params.typeId =  typeId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params)
    this.getProducts();
  }

  onSortSelected(sort: string){
    const params = this.shopService.getShopParams();
    params.sort = sort;
    this.shopService.setShopParams(params)
    this.getProducts();
  }

  onPageChanged(event: any){
    const params = this.shopService.getShopParams();
    if(params.pageNumber !== event){
      params.pageNumber = event;
      this.shopService.setShopParams(params)
      this.getProducts(true);
    }
  }

  onSearch(){
    const params = this.shopService.getShopParams();
    params.search = this.searchTerm.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params)
    this.getProducts();
  }

  onReset(){
    this.searchTerm.nativeElement.value = '';
    this.shopParams =  new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }

}
