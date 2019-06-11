import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {PostDetailsComponent} from '../post-details/post-details.component';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  requestTimeInterval = 10000;
  interval;
  query: string;

  posts: any[] = [];
  filteredPosts: any = [];

  constructor(private postService: PostService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchNewPosts();
    this.initRequestInterval();
  }

  openDialog(post: any) {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.height = '400px';
    // dialogConfig.width = '600px';
    // dialogConfig.hasBackdrop = true;
    // dialogConfig.closeOnNavigation = true;
    // dialogConfig.position = {
    //   'top': '150px'
    // };
    // this.dialog.open(PostDetailsComponent, dialogConfig);
    this.dialog.open(PostDetailsComponent, {
      data: {
        post: post
      },
      width: '850px',
      height: '250px'
    });
  }

  initRequestInterval() {
    this.interval = setInterval(() => {
      this.fetchNewPosts();
    }, this.requestTimeInterval);
  }

  fetchNewPosts() {
    this.postService.getPosts().subscribe((res: any) => {
      console.log(res);
      this.posts.push(...res['hits']);
      this.filterPosts();
    });
  }

  filterPosts() {
    if (this.query) {
      this.filteredPosts = this.posts.filter((post) => {
        return post.title.includes(this.query);
      });
    } else {
      this.filteredPosts.push(...this.posts);
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
